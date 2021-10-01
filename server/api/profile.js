const router = require("express").Router();
const {
  models: { User },
} = require("../db");
module.exports = router;

//GET user bio
router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    next(err);
  }
});

//Update bio
router.put("/editBio/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    const updated = await user.update(req.body);
    console.log(updated);
    res.send(updated);
  } catch (err) {
    next(err);
  }
});
