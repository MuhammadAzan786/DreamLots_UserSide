const express = require("express");
const router = express.Router();
const { signUp, login, Person } = require("../controllers/auth.controller");
const { jwtAuthMiddleware } = require("../middlewares/jwtauth.middleware");

router.post("/signup", signUp);
router.post("/login", login);
router.get("/person", jwtAuthMiddleware, Person);

module.exports = router;
