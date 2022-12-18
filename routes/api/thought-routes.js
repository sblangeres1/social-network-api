const express = require('express');
const router = express.Router();
const {
  getAllThought,
  getThoughtById,
  updateThought,
  addThought,
  removeThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// Creating get and post for this route
router
  .route("/")
  .get(getAllThought)
  .post(addThought);

// Creating get, put, and delete for this route
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

// Creating post and delete routes for thoughts
router
  .route("/:thoughtId/reactions")
  .post(addReaction)
  .delete(removeReaction);

module.exports = router;