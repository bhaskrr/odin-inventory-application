const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categoriesController');

router.get('/', categoriesController.all_categories);

router.get('/:id',  categoriesController.category_by_id)

module.exports = router;