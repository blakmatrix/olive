// Friends Schema

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
    
var Friends = new Schema({
    username : String,
    created_at: {
        type: Date
        , default: Date.now
    }
});

exports.Friends = mongoose.model('Friends', Friends);