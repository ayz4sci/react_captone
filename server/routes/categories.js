module.exports = (app) => {
    const Category = require('../models/Category');

    app.route('/api/categories')
    .get( (req, res) =>{
        Category.find().populate('cheats').then( (categories, err) => {
            res.send(categories);
        })
    });
}