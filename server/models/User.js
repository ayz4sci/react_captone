import mongoose from 'mongoose';

const UserSchema = {
    firstName: String,
    lastName: String,
    username: {type: String, required: true},
    password: {type: String, required: true},
    userType: String,
}

const User = mongoose.model(
    'User', UserSchema, "users"
    );

module.exports = User;