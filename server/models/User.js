import mongoose from 'mongoose';

const UserSchema = {
    username: {type: String, required: true},
    password: {type: String, required: true},
}

const User = mongoose.model(
    'User', UserSchema, "users"
    );

module.exports = User;