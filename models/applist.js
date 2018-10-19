const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const applistSchema = new Schema({

    docTitle: {
        type: String
        // unique: true,
        // required: [true, 'Enter item']
    },
    docContent: {
        type: String
        // unique: true,
    }

});

// Creates schema with Mongoose
let applist = mongoose.model('applist', applistSchema);

module.exports = applist;

