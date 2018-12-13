module.exports = (app) => {
    const Category = require('../models/Category');

    app.route('/api/cheats')
    .get( (req, res) =>{
        Category.populate('cheat').find((error, categories) => {
            res.send(categories);
        })
    });
}