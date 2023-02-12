const router = require("express").Router();
const verifyAccessToken = require("../middleware/verifyToken");

router.use(verifyAccessToken);

router.get("/user", (req, res) => {
  res.send([
    (user1 = {
      name: "John",
      age: 20,
    }),
    (user2 = {
      name: "Jane",
      age: 21,
    }),
  ]);
});

module.exports = router;
