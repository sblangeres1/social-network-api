const express = require('express');
const router = express.Router();
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/user-controller");

// Creating get and post for this route
router
  .route("/")
  .get(getAllUser)
  .post(createUser);

// Creating get, put, and delete for this route
router
  .route("/:id")
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

// Creating post and delete for this route
router
  .route("/:id/friends/:friendId")
  .post(addFriend)
  .delete(removeFriend);

module.exports = router;