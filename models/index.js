const mongoose = require('mongoose');
const Post = require('./Post');
const PostComment = require('./PostComment');


if(process.env.NODE_ENV == 'production' || process.env.NODE_ENV == 'staging') {
    const DB_USERNAME = process.env.DB_USERNAME;
    const DB_PASSWORD = process.env.DB_PASSWORD;
    const DB_URL = process.env.DB_URL;
    var dbURL = 'mongodb+srv://'+DB_USERNAME+':'+DB_PASSWORD+'@'+DB_URL;
}
else {
    var dbURL = 'mongodb://localhost:27017/whitecollardb'
}
function connect() {
    return mongoose.connect(dbURL, {
        useNewUrlParser : true,
        useUnifiedTopology: true
    });
}

module.exports = {
    models : {
        Post : Post,
        PostComment : PostComment
    },
    connect: connect
};
