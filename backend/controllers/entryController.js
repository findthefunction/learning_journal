const Entry = require('../models/Entry');

const addEntry = async (req, res) => {
  const { content, tags, links } = req.body;
  const userId = req.user.id;

  try {
    const entry = await Entry.create({ user: userId, date: new Date(), content, tags, links });
    res.status(201).json(entry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getEntries = async (req, res) => {
  const userId = req.user.id;

  try {
    const entries = await Entry.find({ user: userId }).sort({ date: -1 });
    res.json(entries);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { addEntry, getEntries };
