const router = require('express').Router();
const {models: { Project, Board, List } } = require("../db");

//GET all projects by user
router.get("/", async (req, res, next) => {
  try {
    res.send(
      await Project.findAll({
        where: { userId: req.query.userId },
      })
    );
  } catch (err) {
    next(err);
  }
});

//Get single project by projectId
router.get('/:id', async (req, res, next) => {
    try {
        res.send(await Project.findByPk(req.params.id))
    }
    catch(err) {
        next(err);
    };
});

//Create project
router.post('/', async (req, res, next) => {
    try {
        const project = await Project.create(req.body);
        const board = await Board.create({ projectId: project.id });
        await List.create({ title: "To-Do", boardId: board.id });
        res.status(201).send(project);
    }
    catch(err) {
        next(err);
    };
});

//Delete project
router.delete("/:id", async (req, res, next) => {
  try {
    const project = await Project.findByPk(req.params.id);
    await project.destroy();
    res.sendStatus(202);
  } catch (err) {
    next(err);
  }
});

//Update project
router.put("/:id", async (req, res, next) => {
  try {
    const project = await Project.findByPk(req.params.id);
    res.send(await project.update(req.body));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
