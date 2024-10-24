const { createUsers, findAllUsers, findOneUsers, updateUsers, deletUsers } = require("../controllers/users");
const { verifyAdmin , verifyToken } = require("../middleware/verifyToken");
const userRouter = require("express").Router()

userRouter.post("/", upload.single("image"), createUsers)
userRouter.get("/", findAllUsers);
userRouter.get("/profile", verifyToken,findOneUsers);
userRouter.patch("/:id",upload.single("image"), updateUsers);
userRouter.delete("/:id", deletUsers);

module.exports = userRouter;
