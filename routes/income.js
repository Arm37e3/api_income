const express = require('express');
var router = express.Router();
const incomeContainer = require('../controller/incomeContainer')



router.get('/', incomeContainer.index); 
router.delete('/:id', incomeContainer.delete);
router.post('/', incomeContainer.insert);

module.exports = router;