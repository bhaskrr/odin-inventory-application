const asyncHandler = require('express-async-handler');
const Category = require('../models/category');
const Item = require('../models/item');

exports.all_categories = asyncHandler(async(req, res, next) => {

    const allCategories = await Category.find().sort({ name: 1}).exec();
    // console.log(allCategories);

    res.render('allCategories', { title: 'Categories', allCategories }
    )
})

exports.category_by_id = asyncHandler(async(req,res,next)=>{

    const category = await Category.findById(req.params.id).exec();
    const items = await Item.find({ category: category.name }).exec();
    // console.log(items);

    if(!category){
        res.status(200).send("Category not found");
    }
    else{
        res.render('categoryInstance', {title: category.name, items});
    }
})