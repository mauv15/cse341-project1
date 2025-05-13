const express = require('express');
const router = express.Router();

const cotactsController = require('../controllers/contacts');

router.get('/', cotactsController.getAll);

router.get('/', cotactsController.getSingle);

module.exports = router;