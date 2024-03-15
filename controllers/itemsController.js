const asyncHandler = require('express-async-handler');
const Item = require('../models/item');

exports.all_items = asyncHandler(async(req, res, next) => {
    const allItems = await  Item.find({}).sort({name: 1}).exec();
    
    res.render('allitems', {title: "All items", allItems})
})

exports.single_item_get = asyncHandler(async(req,res,next)=>{
    const item = await Item.findById(req.params.id).exec();

    if(!item){
        res.status(200).send('Item not found')
    }
    else{
        res.render('itemInstance', {title: item.name, item})
    }
})