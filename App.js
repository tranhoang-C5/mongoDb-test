const mongoose = require("mongoose");
const pug = require("pug");
const express = require("express");
const bodyParser = require("body-parser");
/* Connect to my batabase */
mongoose.connect("mongodb://localhost:27017/test", { useNewUrlParser: true });
const db = mongoose.connection;
mongoose.Promise = global.Promise;
db.on("error", console.error.bind(console, "MongoDB connection errors"));
/*  Setup express*/
const app = express();
const port = 3000;

/* Setup View engine */
app.set("views", "./views");
app.set("view engine", "pug");
/*  static file */
app.use("/public", express.static("public"));
/*body parser */
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

/*Require Router*/
const homePage = require("./controllers/Route.home");
const userPage = require("./controllers/Route.user");

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/home", homePage);
app.use("/user", userPage);

app.listen(port, console.log("Your app is open on port 3000"));
