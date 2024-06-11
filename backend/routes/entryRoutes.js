const express = require('express');
const { addEntry, getEntries } = require('../controllers/entryController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect, addEntry);
router.get('/', protect, getEntries);

module.exports = router;
