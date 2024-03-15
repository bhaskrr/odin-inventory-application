const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: { type: String, required: true, minLength: 1 },
    description: { type: String, minLength: 5, required: true },
    category: {
        type: String,
        required: true,
        enum: [
            "Beauty",
            "Books",
            "Electronics",
            "Clothing",
            "Furniture",
            "Health",
            "Sports",
            "Toys"
        ]
    },
    price: { type: Number, required: true },
    num_in_stock: { type: Number, required: true },
})

itemSchema.virtual('url').get(function(){
    return `/items/${this._id}`;
})

module.exports = mongoose.model('item', itemSchema);