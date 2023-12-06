const express = require("express");
const router = express.Router();
const Post = require("../models/postmodel");

//  all POST CREATE to db

router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.body) {
      return res.status(500).send({
        message: "Send All Required Feild : title , body",
      });
    }
    const newBook = {
      title: req.body.title,
      body: req.body.body,
      // DB automatically generate the Id
    };

    const post = await Post.create(newBook);
    return res.status(200).send(post);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});

// GET all data to READ
router.get("/", async (req, res) => {
  try {
    const allpost = await Post.find();
    res.status(200).json(allpost);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});

// GET only one data to READ

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const onepost = await Post.findById(id);
    res.status(200).json(onepost);
  } catch (err) {
    console.log(err);
  }
});

// UPDATE and PUT or PATCH method
// take that id and put it
router.put("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.body) {
      return res
        .status(500)
        .send({ message: "fill all req feild title , body" });
    }
    const { id } = req.params;
    const result = await Post.findByIdAndUpdate(id, req.body);
    if (!result) {
      return res.status(404).send("Post Not Found");
    } else {
      return res.status(200).send("POST updated successfully");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});

// DELETE data
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Post.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).send("POST Not Found");
    } else {
      return res.status(200).send("POST Deleted Successfully");
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
    console.log(err);
  }
});
module.exports = router;
