var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var AutoIncrement = require('mongoose-sequence')(mongoose);

// Mongoose promises are depricated use global
mongoose.Promise = global.Promise;

var PinSchema = new Schema({
    owner_id: Number,
    title: String,
    text: String,
    image_href: String,
    voter_id: [Number]
}, {
    //timestamps: true,
    versionKey: false
});

PinSchema.plugin(AutoIncrement, {
    inc_field: 'pid'
});

module.exports = mongoose.model('Pin', PinSchema);
