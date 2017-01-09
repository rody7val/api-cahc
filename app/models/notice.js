var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ItemSchema = new Schema({
    title: String,
    content: String,
    category: String,
    status: Boolean,
    url_img: String,
    created: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Item', ItemSchema)