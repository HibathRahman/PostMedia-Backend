const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);
const post = mongoose.model("postmedia", postSchema);
module.exports = post;
