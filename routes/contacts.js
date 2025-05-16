const express = require('express');
const router = express.Router();

const cotactsController = require('../controllers/contacts');

router.get('/', cotactsController.getAll);

router.get('/:id', cotactsController.getSingle);

router.post('/', cotactsController.createContact);

router.put('/:id', cotactsController.updateContact);

router.delete('/:id', cotactsController.deleteContact);

module.exports = router;