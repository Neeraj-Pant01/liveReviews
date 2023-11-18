const { registerUser, loginUser } = require("../controllers/auth.controller");

const router = require("express").Router();

router.post('/register', registerUser)
router.post('/login',loginUser)
router.post('/googleLogin',)

module.exports = router;

