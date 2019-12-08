const mongoose = require("mongoose"); // require mongo

/******setup mongoose******** */
const mongoDb = "mongodb://localhost:27017/hello"; //Set mongo url
mongoose.connect(mongoDb, { useNewUrlParser: true }); // Connect to mongoDb
mongoose.Promise = global.Promise; //force mongo to use global Promise
const db = mongoose.connection; // set default mongo db connention
db.on("error", console.error.bind(console, "MongoDB connection errors")); //set action when errors
/*********end setup************* */

db.once("open", function() {
  // we're connected!
  /******create Schema*******/
  const Schema = mongoose.Schema;

  var userSchema = new Schema({
    username: {
      type: String,
      minlength: 6,
      maxlength: 256
    },
    password: {
      type: String,
      minlength: 6,
      maxlength: 256
    },
    age: {
      type: Number,
      min: 6,
      max: 200
    }
  });

  var UserModal = mongoose.model("users", userSchema);
  /******end create Schema*******/
  var query = UserModal.find({ username: "tranhoang" });
  query.exec((err, result) => {
    if (err) return console.error(err);
    console.log(result);
  });
});
