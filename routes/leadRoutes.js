const express = require('express');
const { getLeads, createLead, updateLead, deleteLead } = require('../controllers/leadController');
const { protect, admin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', protect, getLeads);  // Get all leads
router.post('/', protect, admin, createLead);  // Create lead (only admin)
router.put('/:id', protect, admin, updateLead);  // Update lead (only admin)
router.delete('/:id', protect, admin, deleteLead);  // Delete lead (only admin)

module.exports = router;
