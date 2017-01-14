var mongoose = require('mongoose')
var Schema = mongoose.Schema

var NoticeSchema = new Schema({
    title: String,
    content: String,
    category: String,
    status: Boolean,
    url_img: String,
    created: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Notice', NoticeSchema)