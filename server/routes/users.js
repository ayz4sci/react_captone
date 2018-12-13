module.exports = (app) => {
    const User = require('../models/User');

    app.route('/api/user')
    .post((req, res) => {
        const user = req.body;
        User.findOne({ 
            username: user.username,
            password: user.password
        }, (err, doc) => {
            if(doc){
                res.send(doc);
            } else {
                new User(user).save( (err, doc) => {
                    res.send(doc);
                })
            }
        });
    });
}