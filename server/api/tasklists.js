const router = require("express").Router();
const { models: { Board, List, Card } } = require("../db");

//GET full board by projectId
router.get("/", async (req, res, next) => {
    try {
        res.send(await Board.findAll({
            where: { projectId: req.query.projectId }
        }));
    }
    catch (err) {
        next(err);
    }
});

//GET lists by boardId
router.get("/:id/lists", async(req, res, next) => {
    try {

    }
    catch (err) {
        next(err)
    }
})

module.exports = router;
