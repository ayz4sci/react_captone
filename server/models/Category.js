import mongoose from 'mongoose';

const CategorySchema = {
    name: {type: String, required: true},
}

const Category = mongoose.model(
    'Category', CategorySchema, "Categories"
    );

module.exports = Category;