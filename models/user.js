var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");
var VideoModel = require("./video");

var UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  favorite: [VideoModel.schema]
});

UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", UserSchema);
