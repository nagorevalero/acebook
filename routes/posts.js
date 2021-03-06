const express = require("express");
const router = express.Router();
const multer = require("multer")();

const PostsController = require("../controllers/posts");

router.get("/", PostsController.Index);
router.post("/", multer.single('img'), PostsController.Create);
router.get("/new", PostsController.New);
router.post("/like", PostsController.Like);
router.post("/unlike", PostsController.Unlike);

module.exports = router;
