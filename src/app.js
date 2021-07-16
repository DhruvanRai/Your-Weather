const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");
const port = process.env.PORT || 3000;

// public static path
const static_path = path.join(__dirname, "../public");
const templates_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

hbs.registerPartials(partials_path);
app.set("view engine", "hbs");
app.set("views", templates_path);

app.use(express.static(static_path));

// routing
app.get("/", (req, res) => {
  res.status(200).render("index");
});

app.get("/about", (req, res) => {
  res.status(200).render("about");
});

app.get("/weather", (req, res) => {
  res.status(200).render("weather");
});

app.get("*", (req, res) => {
  res.status(404).render("404error");
});
app.listen(port, () => {
  console.log("listning on port " + port);
});
