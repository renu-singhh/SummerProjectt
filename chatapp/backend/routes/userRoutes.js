const express =  require('express');
const router = express.Router();
 const {registerUser , authUser, allUsers} = require("../controllers/userController");
const{protect}=require("../middlewares/authMiddleware");
 
router.route('/').post(registerUser);
router.route('/').get(protect,allUsers);
router.post('/login',authUser);
module.exports = router;
