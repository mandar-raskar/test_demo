var express = require('express');
var router = express.Router();
var user_controller = require("../controllers/users")

//GET api to return total like count per user from all posts
router.get('/get_users_likes', user_controller.getAllUsersData)

//GET api to return total like count for the user with given uid
router.get('/get_single_user_likes', user_controller.getSingleUsersData)


module.exports = router;
