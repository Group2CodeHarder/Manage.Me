const router = require("express").Router();
module.exports = router;

router.use("/users", require("./users"));
router.use("/chat", require("./chat"));
router.use("/stripe", require("./stripe"));
router.use("/calendar", require("./calendar"));
router.use("/projects", require("./projects"));
router.use("/boards", require("./tasklists"));
router.use("/profile", require("./profile"));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
