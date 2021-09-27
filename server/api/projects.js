const router = require('express').Router();
const {models: { Project } } = require("../db");

//GET all projects by user
router.get('/', async (req, res, next) => {
    try {
        res.send(await Project.findAll({ 
            where: { userId: req.query.userId} 
        }));
    }
    catch(err) {
        next(err);
    };
});

//We might not need this route
//Get single project 
// router.get('/:id', async (req, res, next) => {
//     try {
//         res.send(await Project.findByPk(req.params.id))
//     }
//     catch(err) {
//         next(err);
//     }
// });

//Create project
router.post('/', async (req, res, next) => {
    try {
        res.status(201).send(await Project.create(req.body));
    }
    catch(err) {
        next(err);
    };
});

//Delete project
router.delete('/:id', async (req, res, next) => {
    try {
        const project = await Project.findByPk(req.params.id);
        await project.destroy();
        res.sendStatus(202);
    }
    catch(err) {
        next(err);
    }
});

//Update project
router.put('/:id', async (req, res, next) => {
    try{
        const project = await Project.findByPk(req.params.id);
        res.send(await project.update(req.body));
    }
    catch(err) {
        next(err);
    }
});

module.exports = router;