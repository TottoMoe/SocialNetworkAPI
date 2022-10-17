const router = require("express").Router();

const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../controllers/user-controller");

// Set up GET all and POST
router.route("/").get(getAllUser).post(createUser);

// Set up GET one, PUT, and DELETE
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// Set up POST friend, and DELETE friend
router.route("/:id/friends/:friendID").post(addFriend).delete(removeFriend);

module.exports = router;
