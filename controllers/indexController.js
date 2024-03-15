const asyncHandler = require('express-async-handler');
const Category = require('../models/category');
const Item = require('../models/item');

exports.index_page_get = asyncHandler(async (req,res,next)=>{

    const categories = await Category.find().sort({name: 1}).exec();
    const categoryAndItemCount = [];
    for(const category of categories){
        const items = await Item.countDocuments({ category: category.name }).exec();
        categoryAndItemCount.push({name: category.name, itemCount : items, url: category.url})
    }
    
    // console.log(categoryAndItemCount);
    res.render('index', {title: "StockHawk | Homepage", categoryAndItemCount});
})