const express = require('express');
const router = express.Router();

const cotactsController = require('../controllers/contacts');

router.get('/', cotactsController.getAll);

router.get('/:id', cotactsController.getSingle);

module.exports = router;