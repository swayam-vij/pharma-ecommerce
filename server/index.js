const port = 3000;
const express = require("express");

const app = express();

const mongoose = require("mongoose");

const jwt = require("jsonwebtoken");

const path = require("path");

const cors = require("cors");
const { type } = require("os");

app.use(express.json());
app.use(cors());

// connect db
mongoose.connect(
  "mongodb+srv://svrusty:gLsKKJd1QbgccPrN@cluster0.thyu2su.mongodb.net/pharma-e-commerce"
);

app.get("/", (req, res) => {
  res.send("Express OK");
});

app.listen(port, (error) => {
  if (!error) {
    console.log("Server running on Port" + port);
  } else {
    console.log("Error" + error);
  }
});

// schema for users

const Users = mongoose.model("Users", {
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  number: {
    type: Number,
    unique: true,
  },
  password: {
    type: String,
  },
  cartData: {
    type: Object,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// register user
app.post("/signup", async (req, res) => {
  let check = await Users.findOne({ email: req.body.email });
  if (check) {
    return res
      .status(400)
      .json({ success: false, errors: "E-mail id already exists" });
  }
  let cart = {};
  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }
  const user = new Users({
    name: req.body.username,
    email: req.body.email,
    number: req.body.number,
    password: req.body.password,
    cartData: cart,
  });
  await user.save();

  const data = {
    user: { id: user.id },
  };

  const token = jwt.sign(data, "secret_ecom");
  res.json({ success: true, token });
});

// user login

app.post("/login", async (req, res) => {
  let user = await Users.findOne({ email: req.body.email });
  if (user) {
    const pswdCompare = req.body.password === user.password;

    if (pswdCompare) {
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, "secret_ecom");
      res.json({ success: true, token });
    } else {
      res.json({ success: false, errors: "User and pswd do not match" });
    }
  } else {
    res.json({ success: false, error: "Not a new user, Sign up Now!" });
  }
});
