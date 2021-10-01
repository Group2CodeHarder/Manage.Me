const router = require("express").Router();
const { models: { User } } = require("../db");
module.exports = router;

router.get("/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.send(user);
  } 
  catch (err) {
    next(err);
  };
});
