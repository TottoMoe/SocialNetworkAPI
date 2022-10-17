const { User, Thought } = require("../models");

const thoughtsControllers = {
  getAllThought(req, res) {},
  getThoughtById({ params }, res) {},
  updateThoughtById({ body, params }, res) {},
  addThought({ body }, res) {},
  removeThought({ params }, res) {},
  addReaction({ params, body }, res) {},
  removeReaction({ params }, res) {},
};

module.exports = thoughtsControllers;
