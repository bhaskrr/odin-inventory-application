var express = require('express');
var router = express.Router();
const itemsController = require('../controllers/itemsController')

router.get('/', itemsController.all_items);

router.get('/:id', itemsController.single_item_get);

module.exports = router;