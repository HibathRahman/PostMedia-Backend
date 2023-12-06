const express = require("express");
const postRoute = require("./routes/postroute");
const cors = require("cors");
const connectDB = require("./config");
connectDB();
const app = express();
const PORT = 3500;

// middlewares - to json format for store
app.use(express.json());

// open to all
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("successful");
});

// router
app.use("/posts", postRoute);

app.listen(PORT, () => console.log(`PORT is running on ${PORT}`));
