import mongoose from 'mongoose';

const CategorySchema = {
    name: {type: String, required: true},
    cheats : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cheat' }]
}

const Category = mongoose.model(
    'Category', CategorySchema, "Categories"
    );

module.exports = Category;