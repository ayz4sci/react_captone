module.exports = (app) => {

    const Cheat = require('../models/Cheat');

    app.route('/api/cheats')
    .get( (req, res) =>{
        Cheat.find((error, cheats) => {
            res.send(cheats);
        }).populate('category');
    })
    .post((req, res) => {
        const cheat = req.body;
        new Cheat(cheat).save((err, doc) => {
            res.status(200).send();
        })
    });

    app.route('/api/cheats/:id')
    .delete( (req, res) =>{
        Cheat.findByIdAndDelete(req.params.id);
    })
    .patch((req, res) => {
        Cheat.findOne({
            _id: req.body._id
        }, (err, cheat) => {
            for(let key in req.body){
                cheat[key] = req.body[key];
            }
            cheat.save();
            res.status(200).send();
        });
    });
}