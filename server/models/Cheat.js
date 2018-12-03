import mongoose from 'mongoose';

const CheatSchema = {
    title: {type: String, required: true},
    code: {type: String, required: true},
    id: String,
    category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
}

const Cheat = mongoose.model(
    'Cheat', CheatSchema, "cheats"
    );

module.exports = Cheat;