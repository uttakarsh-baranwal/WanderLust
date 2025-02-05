const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    }
});

userSchema.plugin(passportLocalMongoose); //username, hashing, salting and hash password bana dega automatically kuchh methods bhi add kar dega like will be easy for future
module.exports = mongoose.model("User", userSchema);