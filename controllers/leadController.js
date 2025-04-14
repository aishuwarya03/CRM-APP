const Lead = require('../models/Lead');

const getLeads = async (req, res) => {
  try {
    const leads = await Lead.find().populate('assignedTo', 'username');
    res.json(leads);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

const createLead = async (req, res) => {
  const { name, email, phone, status, assignedTo } = req.body;

  try {
    const lead = new Lead({ name, email, phone, status, assignedTo });
    await lead.save();
    res.status(201).json(lead);
  } catch (err) {
    res.status(500).json({ message: 'Error creating lead' });
  }
};

const updateLead = async (req, res) => {
  const { name, email, phone, status, assignedTo } = req.body;
  const leadId = req.params.id;

  try {
    const lead = await Lead.findByIdAndUpdate(leadId, { name, email, phone, status, assignedTo }, { new: true });
    if (!lead) {
      return res.status(404).json({ message: 'Lead not found' });
    }
    res.json(lead);
  } catch (err) {
    res.status(500).json({ message: 'Error updating lead' });
  }
};

const deleteLead = async (req, res) => {
  const leadId = req.params.id;

  try {
    const lead = await Lead.findByIdAndDelete(leadId);
    if (!lead) {
      return res.status(404).json({ message: 'Lead not found' });
    }
    res.json({ message: 'Lead deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting lead' });
  }
};

module.exports = { getLeads, createLead, updateLead, deleteLead };
