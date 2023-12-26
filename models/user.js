const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  
});

// Apply the passport-local-mongoose plugin to enable Passport support
userSchema.plugin(passportLocalMongoose);

// Create the User model
const User = mongoose.model("User", userSchema);

module.exports = User;
