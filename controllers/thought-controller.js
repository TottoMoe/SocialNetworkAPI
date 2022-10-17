const { User, Thought } = require("../models");

const thoughtsControllers = {
  getAllThought(req, res) {},
  getThoughtById({ params }, res) {},
  updateThoughtById({ body, params }, res) {},
  addThought({ body }, res) {
    Thought.create(body)
      .then(({ username, _id }) => {
        return User.findByIdAndUpdate(
          { username: username },
          { $push: { thought: _id } },
          { new: true, runValidators: true }
        )
      })
      .then(dbUserData => {
        if(!dbUserData) {
          res.status(404).json({ message: 'No user found at this id! '});
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  removeThought({ params }, res) {},
  addReaction({ params, body }, res) {},
  removeReaction({ params }, res) {},
};

module.exports = thoughtsControllers;
