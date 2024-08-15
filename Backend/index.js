const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");

require('dotenv').config();

const app = express();

const corsOptions = {
    origin: ['http://localhost:3000'],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
  };

  app.use(cors(corsOptions));
 

  app.use(express.json({ limit: '10mb' })); // Increase limit to 10MB
  app.use(express.urlencoded({ limit: '10mb', extended: true }));
  


  const dbURI = process.env.MONGODB;
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
    socketTimeoutMS: 45000, // Increase socket timeout to 45 seconds
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });


  const userSchema = new mongoose.Schema({
    admin: String,
    password: String
  });
  
  const User = mongoose.model('User', userSchema);
  

  app.post('/api/register', async (req, res) => {
    const { admin, password } = req.body;
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        admin,
        password: hashedPassword
      });
      await newUser.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });
  
  app.post('/api/login', async (req, res) => {
    const { admin, password } = req.body;
    try {
      const user = await User.findOne({ admin });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid password' });
      }
      res.status(200).json({ message: 'Login successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });


 
  



  const achievementSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    year: { type: String, required: true },
    level: { type: String, required: true },
    image: { type: String },
    image2: { type: String },
    createdAt: { type: Date, default: Date.now },
  });
  
  const Achievement = mongoose.model('Achievement', achievementSchema);

  app.post('/api/achievementspost', async (req, res) => {
    const { title, description, year, level, image, image2 } = req.body;
  
    const newAchievement = new Achievement({
      title,
      description,
      year,
      level,
      image,
      image2 
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
  


  const eventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    image: { type: String },
    location: { type: String },
    createdAt: { type: Date, default: Date.now },
  });
  
  const Event = mongoose.model('Event', eventSchema);
  

  app.post('/api/events', async (req, res) => {
    const { title, date, image, location, description } = req.body;
  
    const newEvent = new Event({
      title,
      date,
      image,
      location,
      description
    });
  
    try {
      const savedEvent = await newEvent.save();
      res.status(201).json(savedEvent);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });


  app.get('/api/events', async (req, res) => {
    try {
      const events = await Event.find();
      res.status(200).json(events);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  

  app.get('/api/events/:id', async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});




  const skaterProfileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        min: 0
    },
    gender: {
        type: String,
        required: true,
        enum: ['Male', 'Female', 'Other']  // Adjust the options as needed
    },
    level: {
        type: String,
        required: true,
        enum: ['Beginner', 'Intermediate', 'Advanced']  // Adjust the options as needed
    }
}, {
    timestamps: true  // Automatically add createdAt and updatedAt fields
});

const SkaterProfile = mongoose.model('SkaterProfile', skaterProfileSchema);

  

app.post('/api/skaterprofiles', async (req, res) => {
  const { name, age, gender, level } = req.body;

  const newSkaterProfile = new SkaterProfile({
      name,
      age,
      gender,
      level
  });

  try {
      const savedSkaterProfile = await newSkaterProfile.save();
      res.status(201).json(savedSkaterProfile);
  } catch (error) {
      res.status(400).json({ message: error.message });
  }
});


app.get('/api/skaterprofiles', async (req, res) => {
  try {
      const skaterProfiles = await SkaterProfile.find();
      res.status(200).json(skaterProfiles);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

const galleryImageSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
});

const GalleryImage = mongoose.model('GalleryImage', galleryImageSchema);

app.post('/api/gallery', async (req, res) => {
  try {
    const { images } = req.body;
    const savedImages = await GalleryImage.insertMany(images.map(url => ({ url })));
    res.status(200).json(savedImages);
  } catch (error) {
    console.error('Error saving images:', error);
    res.status(500).json({ message: 'Error saving images' });
  }
});

app.get('/api/gallery', async (req, res) => {
  try {
    const images = await GalleryImage.find({});
    res.json(images);
  } catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).send('Internal Server Error');
  }
});



const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});