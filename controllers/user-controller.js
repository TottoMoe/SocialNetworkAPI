const { User, Thought } = require("../models");

const userController = {  ///<-------------------
  getAllUser(req, res) {
    User.find()
  },
  getUserById({ params }, res) {}, //<---------------------

  createUser({ body }, res) {
    User.create(body)
        .then(dbUserData => {
          res.json(dbUserData);
        })
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
  },

  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
        .then(dbUserData => {
          if(!dbUserData) {
            res.status(404).json({ message: 'No user found at this id!' });
            return;
          }
          res.json(dbUserData);
        })
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
  },

  deleteUser({ params }, res) {},  //<----------------------
  
  addFriend({ params }, res) {
    User.findOneAndUpdate(
      { id: params.userId },  //<<<<-----------Where should I init userId?
      { $push: { friends: params.friendId } },
      { new: true }
    )
        .then(dbUserData => {
          if(!dbUserData) {
            res.status(404).json({ message: 'No user found at this id'})
            return;
          }
          res.json(dbUserData)
        })
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
  },

  removeFriend({ params }, res) {
    User.findOneAndUpdate(
      { id: params.userId }, //<<<<-----------Where should I init userId?
      { $pull: { friends: params.friendId } },
      { new: true }
    )
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found at this id" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

};

module.exports = userController;
