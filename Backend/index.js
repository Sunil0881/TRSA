const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();

const app = express();

const corsOptions = {
    origin: ['http://localhost:3000'],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
  };

  app.use(cors(corsOptions));
  app.use(express.json());
  


  const dbURI = process.env.MONGODB;
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });






  const achievementSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    year: { type: String, required: true },
    level: { type: String, required: true },
    image: { type: String },
    createdAt: { type: Date, default: Date.now },
  });
  
  const Achievement = mongoose.model('Achievement', achievementSchema);

  app.post('/api/achievementspost', async (req, res) => {
    const { title, description, year, level, image } = req.body;
  
    const newAchievement = new Achievement({
      title,
      description,
      year,
      level,
      image,
    });
  
    try {
      const savedAchievement = await newAchievement.save();
      res.status(201).json(savedAchievement);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });


  app.get('/api/achievements', async (req, res) => {
    try {
      const achievements = await Achievement.find();
      res.status(200).json(achievements);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });


  app.get('/api/achievements/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const achievement = await Achievement.findById(id);

        if (!achievement) {
            return res.status(404).json({ message: 'Achievement not found' });
        }

        res.json(achievement);
    } catch (error) {
        console.error('Error fetching achievement:', error);
        res.status(500).json({ message: 'Server error' });
    }
});



  const updateSchema = new mongoose.Schema({
    text: String,
  });
  
  const Update = mongoose.model('Update', updateSchema);


  app.get('/api/updates', async (req, res) => {
    const updates = await Update.find();
    res.json(updates);
  });
  
  // Add a new update
  app.post('/api/updates', async (req, res) => {
    const newUpdate = new Update(req.body);
    await newUpdate.save();
    res.status(201).json(newUpdate);
  });


  app.delete('/api/updates/:id', async (req, res) => {
    const { id } = req.params;
    await Update.findByIdAndDelete(id);
    res.status(204).end();
  });
  





const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});