import mongoose from 'mongoose';

const CheatSchema = {
    title: {type: String, required: true},
    code: {type: String, required: true},
    category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'}
}

const Cheat = mongoose.model(
    'Cheat', CheatSchema, "cheats"
    );

module.exports = Cheat;