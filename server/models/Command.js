import mongoose from 'mongoose';

const CommandSchema = {
    title: {type: String, required: true},
    code: {type: String, required: true},
    id: String,
    category: {type: mongoose.Schema.Types.ObjectId, ref: 'Command'},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
}

const Command = mongoose.model(
    'Command', CommandSchema, "commands"
    );

module.exports = Command;