const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");

const Photo = require("./models/Photo");

const app = express();

//connect db

mongoose.connect("mongodb://localhost/pcat-test-db");

//TEMPLATE ENGINE

app.set("view engine", "ejs");

//MIDDLEWARES

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTES

app.get("/", async (req, res) => {
  const photos = await Photo.find({});
  res.render("index", { photos });
});

app.get("/photos/:id", async (req, res) => {
  // console.log(req.params.id);
  // res.render("about");

  const photo = await Photo.findById(req.params.id);

  res.render("photo", { photo });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/add", (req, res) => {
  res.render("add");
});

app.post("/photos", async (req, res) => {
  await Photo.create(req.body);
  res.redirect("/");
});

const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu port ${port} de çalışıyor.`);
});
