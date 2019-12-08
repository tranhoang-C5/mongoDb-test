const express = require("express");
const userModel = require("../models/model.user");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("user");
});

router.get("/search", (req, res) => {
  async function searchUser() {
    let search = req.query.search;
    let reg = new RegExp(search, "i");
    console.log(reg);

    let user = await userModel.find({ username: reg }, (err, res) => {
      if (!err) {
        console.res;
        return res;
      }
    });
    console.log(user);
    res.render("user", { user: user });
  }
  searchUser();
});

module.exports = router;
