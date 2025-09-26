import Event from "../models/Event.js";

export const createEvent = async (req, res) => {
  try {
    const event = new Event({ ...req.body, userId: req.userId._id });
    await event.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getEvents = async (req, res) => {
  try {
      const userId = req.userId._id;    
      if (!userId) return res.status(401).json({ error: "Unauthorized" });
      const { filter } = req.query;
      const now = new Date();
      let query = { userId };
      
    if (filter === "upcoming") {
      query.dateTime = { $gte: now }; 
    } else if (filter === "past") {
      query.dateTime = { $lt: now }; 
      }
      
    const events = await Event.find(query).sort({ dateTime: 1 });
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
