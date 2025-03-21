import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: String,
    phoneNumber: String,
    email: String,
    password: String,
    companyName: String,
    agency: String

},{
    timestamps: true
});

const User = mongoose.model("User", userSchema);

export default User;