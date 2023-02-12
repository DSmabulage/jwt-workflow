const express = require("express");
const router = express.Router();
const {
  userRegister,
  userLogin,
  refreshToken,
  logout
} = require("../controllers/authController");

router.post("/register", userRegister);

router.post("/login", userLogin);

router.post("/token", refreshToken);

router.delete("/logout", logout);

module.exports = router;
