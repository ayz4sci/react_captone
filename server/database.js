import mongoose from 'mongoose';
import Category from './models/Category';
import Cheat from './models/Cheat';

const json = require('./data/git-cheat-sheet.json');

mongoose.connect('mongodb://localhost/captone', () => {

    mongoose.connection.db.dropDatabase();
    
    // new Category({name: json[0].name}).save((err, doc) => {
    //     console.log(err);
    // });

    
    json.forEach( item => {
        new Category({ name: item.name }).save((err, category) => {
            if(category){
                item.cheats.forEach( cheat => {
                    new Cheat(cheat).save( (err, doc) => {
                        if(doc){
                            category.update({ cheats: doc});
                        }
                    });
                });
            }
        });
    });
});



