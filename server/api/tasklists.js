const router = require("express").Router();
const { models: { Board, List, Card } } = require("../db");

//GET board by ProjectId
router.get("/:id", async(req, res, next) => {
    try {
        const board = await Board.findOne({
            where: { projectId: req.params.id },
            include: [ { model: List, include:[Card] }]
        });
        res.send(board);
    }
    catch (err) {
        next(err)
    }
})

//GET lists by boardId
router.get("/lists/:id", async(req, res, next) => {
    try {
        const lists = await List.findAll({
            where: { boardId: req.params.id }
            });
        res.send(lists);
    }
    catch (err) {
        next(err)
    }
})



//GET cards by listId
router.get("/lists/cards/:id", async (req, res, next) => {
    try {
        const cards = await Card.findAll({
            where: { listId: req.params.id }
        });
        res.send(cards);
    }
    catch (err) {
        next(err)
    }
});

//POST list by boardId
router.post("/lists", async (req, res, next) => {
    try {
        const board = await Board.findOne({
            where: { projectId: req.body.projectId }
        })
        const newList = {
            title: req.body.title,
            boardId: board.id
        };
        const list = await List.create(newList);
        res.send(list);
    }
    catch(err) {
        next(err);
    };
});

//POST card by listId
router.post("/lists/:id", async (req, res, next) => {
    try {
        // const list = await List.findByPk({
        //     where: { id: req.params.id }
        // });
        // const newCard = {
        //     content: req.body.content,
        //     listId: list.id
        // };
        const event = req.body;
        const card = await Card.create(event);
        res.send(card);
    }
    catch(err) {
        next(err);
    };
});

//DELETE list
router.delete("/:id", async (req, res, next) => {
    try {
        const list = await List.findByPk(req.params.id);
        await list.destroy();
        res.sendStatus(202);
    }
    catch(err) {
        next(err);
    }
});

//DELETE card
router.delete("/:id", async (req, res, next) => {
    try {
        const card = await Card.findByPk(req.params.id);
        await card.destroy();
        res.sendStatus(202);
    }
    catch(err) {
        next(err);
    }
});

//UPDATE list
router.put("/:id", async (req, res, next) => {
    try{
        const list = await List.findByPk(req.params.id);
        res.send(await list.update(req.body));
    }
    catch(err) {
        next(err);
    }
});

//UPDATE card
router.put("/:id", async (req, res, next) => {
    try{
        const card = await Card.findByPk(req.params.id);
        res.send(await card.update(req.body));
    }
    catch(err) {
        next(err);
    }
});

module.exports = router;
