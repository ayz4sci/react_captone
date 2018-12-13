import mongoose from 'mongoose';

const CheatSchema = {
    description: {type: String, required: true},
    command: {type: String, required: true},
    keywords: [{type: String}]
}

const Cheat = mongoose.model(
    'Cheat', CheatSchema, "cheats"
    );

module.exports = Cheat;