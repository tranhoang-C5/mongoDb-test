const express = require("express");
const userModel = require("../models/model.user");

var router = express.Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.post("/", (req, res) => {
  let user = new userModel({
    username: req.body.name,
    hobby: req.body.hobby
  });

  user.save(err => {
    if (err) {
      console.log(err);
    }
  });
  res.redirect("/home");
});

module.exports = router;
