const port = 3000;
const express = require("express");

const app = express();

const mongoose = require("mongoose");

const jwt = require("jsonwebtoken");

const multer = require("multer");

const path = require("path");

const cors = require("cors");

app.use(express.json());
app.use(cors());

// connect db
mongoose.connect(
  "mongodb+srv://svrusty:gLsKKJd1QbgccPrN@cluster0.thyu2su.mongodb.net/pharma-e-commerce"
);

app.get("/", (req, res) => {
  res.send("Express OK");
});
