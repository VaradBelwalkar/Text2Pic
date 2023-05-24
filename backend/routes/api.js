const express = require("express");
const { generateImage } = require("../controllers/openaiControllers");
const {signuppage,loginpage} = require("../controllers/pages");
const {signup,login} = require("../controllers/auth");
const router = express.Router();

router.post("/images", generateImage)
router.get("/signup", signuppage)
router.get("/login",loginpage)
router.post("signup",signup)
router.post("login",login)
module.exports = router;
