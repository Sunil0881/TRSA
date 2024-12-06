const express = require("express");
const News = require("../models/News");
const router = express.Router();

// Get the latest news
router.get("/", async (req, res) => {
  try {
    const latestNews = await News.findOne().sort({ _id: -1 });
    res.json({ news: latestNews || { title: "", description: "" } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add news
router.post("/", async (req, res) => {
  const { title, description } = req.body;
  try {
    await News.deleteMany(); // Remove old news
    const newNews = new News({ title, description });
    await newNews.save();
    res.json({ message: "News added successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
