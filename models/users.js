const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Users', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

const Schema = mongoose.Schema;

const userSchema = new Schema({
    title: { type: String },
    comment_count: { type: Number },
    comments: { type: Array, "default": [] },
    likes: { type: Number },
    user: {
        name: { type: String },
        uid: { type: String }
    }
});

exports.User = mongoose.model('Userpost', userSchema);
