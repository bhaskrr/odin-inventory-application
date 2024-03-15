const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: {type: String, required: true, minLength: 1},
    description: {type: String, required: true, minLength: 5},
    items: [{type : Schema.Types.ObjectId, ref : 'items'}]
})

categorySchema.virtual('url').get(function () {
    return `/categories/${this._id}`;
})

module.exports = mongoose.model('Category', categorySchema);