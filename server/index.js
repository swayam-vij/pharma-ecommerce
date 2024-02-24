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

// image storage
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

// upload endpoint for images
app.use("/images", express.static("upload/images"));
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

// schema

const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  mrp: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

// add product

app.post("/addproduct", async (req, res) => {
  let products = await Product.find({});
  let id;
  if (products.length > 0) {
    let lastProductArray = products.slice(-1);
    let lastProduct = lastProductArray[0];
    id = lastProduct.id + 1;
  } else {
    id = 1;
  }
  const product = new Product({
    id: id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    mrp: req.body.mrp,
    discount: req.body.mrp,
  });
  console.log(product);
  await product.save();
  console.log("SAVED");
  res.json({
    success: true,
    name: req.body.name,
  });
});

// delete product

app.post("/removeproduct", async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  console.log("REMOVED");
  res.json({
    success: true,
    name: req.body.name,
  });
});

// get all product

app.get("/allproducts", async (req, res) => {
  let products = await Product.find({});
  console.log("All Products Fethched");
  res.send(products);
});

app.listen(port, (error) => {
  if (!error) {
    console.log("The server is running on port :" + port);
  } else {
    console.log("ERROR : " + error);
  }
});
