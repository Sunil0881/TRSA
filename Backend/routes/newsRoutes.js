const express = require("express");
const router = express.Router();
const News = require("../models/newsModel");

// Fetch the latest news
router.get("/", async (req, res) => {
  try {
    const latestNews = await News.findOne().sort({ createdAt: -1 }); // Get the latest news
    if (!latestNews) {
      return res.status(404).json({ news: { title: "No Breaking News", description: "" } });
    }
    res.json({ news: latestNews });
  } catch (error) {
    res.status(500).json({ error: "Error fetching news" });
  }
});

module.exports = router;
