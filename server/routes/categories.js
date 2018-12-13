module.exports = (app) => {
    const Category = require('../models/Category');

    app.route('/api/categories')
    .get( (req, res) =>{
        console.log(req);
        Category.find().populate('cheat').then( ( categories, err) => {
            res.send(categories);
        })
    });
}