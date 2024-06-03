const express = require('express');
const { getData, createRow } = require('../controllers/sheetController');

const router = express.Router();

router.get('/data', getData);
router.post('/addRow', createRow);

module.exports = router;
