const { User, Thought } = require("../models");

const thoughtControllers = {
  getAllThought(req, res) {}, //<------------
  getThoughtById({ params }, res) {}, //<--------------
  
  updateThoughtById({ body, params }, res) {
    Thought.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
      .then(dbThoughtData => {
        if(!dbThoughtData) {
          res.status(404).json({ message: 'No thought found at this id!'})
        }
        res.json(dbThoughtData);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err)
      })
  }, 

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
  removeThought({ params }, res) {
    Thought.findOneAndDelete({ _id: params.id })
      .then(({ username }) => {
        return User.findOneAndUpdate(
          { username: username },
          { $pull: { thought: params.id} },
          { new: true } 
        )
      })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found at this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      })
  },
  addReaction({ params, body }, res) {
    Thought.findByIdAndUpdate(
      { _id: params.thoughtId },
      { $push: { reactions: body } },
      { new: true, runValidators: true }
    )
      .then(dbThoughtData => {
        if (!dbThoughtData) {
          res.status(404).json({ message: 'No thought found at this id!' });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  removeReaction({ params }, res) {
    Thought.findByIdAndUpdate(
      { _id: params.thoughtId },
      { $pull: { reactions: body } },
      { new: true, runValidators: true }
    )
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "No thought found at this id!" });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
};

module.exports = thoughtControllers;
