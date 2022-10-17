const router = require("express").Router();

const {
  getAllThought,
  getThoughtById,
  updateThoughtById,
  addThought,
  removeThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");
const { remove } = require("../models/Thought");

router.route("/").get(getAllThought);

router.route("/:userId").post(addThought);

router
  .route("/:thoughtId")
  .get(getThoughtById)
  .put(updateThoughtById)
  .delete(removeThought);

router.route("/:thoughtId/reactions").post(addReaction);

router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;
