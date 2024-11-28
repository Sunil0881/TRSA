const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");

require('dotenv').config();

const app = express();

// const corsOptions = {
//     origin: ['https://trsafrontend.vercel.app'],
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     credentials: true,
//     optionsSuccessStatus: 204,
//   };

  app.use(cors());
 

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
  // bro this the section of code
  // for News BAckend operation
  const NewsSchema = new mongoose.Schema({
    title: { type:String, required: true},
    description: { type:String, required: true},
    image : { type:String, required: true}
  });


  //  created model code
    const News = mongoose.model('News',NewsSchema);


    // created code for post news by admin people 
  app.post('/api/news', async(res,req) =>{
    const {title,description,image} = req.body;
         const NewNews = new News({
          title,
          description,
          image
         });

    try {
      const SavedNews = await NewNews.save();
      res.status(201).json({ message: 'News added successfully' });
    } catch (error) {
      res.status(403).json({message: error.message})
      
    }
  });


  // created code for get all news by admin people
  app.delete('/api/news/:id', async (res,req) => {
    
    try {
      const {id} = req.params;

      const deletedNews = await News.findByIdAndDelete(id);
  if(!deletedNews){
    return res.status(404).json({ message: 'News not found' });
  }

      res.status(200).json({ message: 'News deleted successfully' });
      
    } catch (error) {
      res.status(403).json({message: error.message})
    }
   });


   // created code for get  news   (id) by admin people
   app.get('./api/news/:id', async(res,req) =>{
     try { 
         const {id} = req.params;
           const news = await News.findById(id);
           if(!News){
            return res.status(404).json({ message: 'News not found' });
           }
           res.status(200).json(News);
     } catch (error) {
      res.status(403).json({message: error.message})
     }
   })

   // created code for get all news by admin people
   app.get ('./api/news', async(res,req) =>{
               try {
               const news = await News.find();
               res.status(200).json(news);
               } catch (error) {
                res.status(403).json({message: error.message})
               }

   });
/////////////////
//////////
///
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


app.delete('/api/achievements/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAchievement = await Achievement.findByIdAndDelete(id);

    if (!deletedAchievement) {
      return res.status(404).json({ message: 'Achievement not found' });
    }

    res.status(200).json({ message: 'Achievement deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
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


// Delete an event by ID
app.delete('/api/events/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedEvent = await Event.findByIdAndDelete(id);

    if (!deletedEvent) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


const skaterProfileSchema = new mongoose.Schema(
  {
    rsfiNo: { 
      type: String, 
      required: false // Optional field
    },
    name: { 
      type: String, 
      required: true 
    },
    parentName: { 
      type: String, 
      required: true 
    },
    dob: { 
      type: Date, 
      required: true 
    },
    aadharNo: { 
      type: String, 
      required: true,
      validate: {
        validator: function (v) {
          return /^\d{12}$/.test(v); // Aadhar must be 12 digits
        },
        message: "Aadhar number must be 12 digits."
      }
    },
    phoneNo: { 
      type: String, 
      required: true,
      validate: {
        validator: function (v) {
          return /^\d{10}$/.test(v); // Phone number must be 10 digits
        },
        message: "Phone number must be 10 digits."
      }
    },
    email: { 
      type: String, 
      required: true,
      validate: {
        validator: function (v) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); // Basic email regex
        },
        message: "Invalid email format."
      }
    },
    eventCategory: { 
      type: String, 
      required: true,
      enum: ['Speed Skating', 'Figure Skating', 'Artistic Skating', 'Inline Hockey']
    },
    representativeClub: { 
      type: String, 
      required: true 
    },
    coachName: { 
      type: String, 
      required: true 
    },
    skaterPhoto: { 
      type: String, 
      required: true 
    },
    identityProof: {
      type: {
        proofType: {
          type: String,
          enum: ['Aadhar', 'Birth Certificate'],
          required: true
        },
        fileUrl: {
          type: String,
          required: true
        }
      },
      required: true // Ensure `identityProof` is a required field
    }
  },
  { timestamps: true }
);

const SkaterProfile = mongoose.model('SkaterProfile', skaterProfileSchema);





  

// Route to create skater profile
app.post('/api/skaterprofiles', async (req, res) => {
  try {
    // Create new skater profile from request body
    const newSkaterProfile = new SkaterProfile(req.body);
    
    // Save to database
    const savedSkaterProfile = await newSkaterProfile.save();
    
    // Respond with saved profile
    res.status(201).json(savedSkaterProfile);
  } catch (error) {
    // Handle validation errors
    res.status(400).json({ 
      message: 'Error creating skater profile', 
      error: error.message 
    });
  }
});

// Route to get all skater profiles
app.get('/api/skaterprofiles', async (req, res) => {
  try {
    // Fetch all skater profiles
    const skaterProfiles = await SkaterProfile.find();
    
    // Respond with profiles
    res.status(200).json(skaterProfiles);
  } catch (error) {
    // Handle errors
    res.status(500).json({ 
      message: 'Error fetching skater profiles', 
      error: error.message 
    });
  }
});

// Delete a skater profile by ID
app.delete('/api/skaterprofiles/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSkaterProfile = await SkaterProfile.findByIdAndDelete(id);

    if (!deletedSkaterProfile) {
      return res.status(404).json({ message: 'Skater profile not found' });
    }

    res.status(200).json({ message: 'Skater profile deleted successfully' });
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

// Delete a gallery image by ID
app.delete('/api/gallery/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedImage = await GalleryImage.findByIdAndDelete(id);

    if (!deletedImage) {
      return res.status(404).json({ message: 'Image not found' });
    }

    res.status(200).json({ message: 'Image deleted successfully' });
  } catch (error) {
    console.error('Error deleting image:', error);
    res.status(500).json({ message: 'Error deleting image' });
  }
});



const registrationSchema = new mongoose.Schema({
  eventId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Event', // Reference to the Event model if applicable
      required: true
  },
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
  email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true
  },
  phone: {
      type: String,
      required: true,
      trim: true
  },
  registeredAt: {
      type: Date,
      default: Date.now
  }
});

// Create the model from the schema
const Registration = mongoose.model('Registration', registrationSchema);



app.post('/api/registrations', async (req, res) => {
  const { eventId, name, age, email, phone } = req.body;

  // Validate the data if needed (you can add more validation rules here)
  if (!eventId || !name || !age || !email || !phone) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Create a new registration document
  const newRegistration = new Registration({
    eventId,
    name,
    age,
    email,
    phone
  });

  try {
    // Save the new registration to the database
    const savedRegistration = await newRegistration.save();
    res.status(201).json(savedRegistration);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


app.get('/api/registrations', async (req, res) => {
  try {
    const registrations = await Registration.find();
    res.status(200).json(registrations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET endpoint to fetch registration data by event ID
app.get('/api/registrations/:eventId', async (req, res) => {
  const { eventId } = req.params;

  try {
    const registrations = await Registration.find({ eventId });
    if (registrations.length === 0) {
      return res.status(404).json({ message: 'No registrations found for this event' });
    }
    res.status(200).json(registrations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Delete a registration by ID
app.delete('/api/registrations/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRegistration = await Registration.findByIdAndDelete(id);

    if (!deletedRegistration) {
      return res.status(404).json({ message: 'Registration not found' });
    }

    res.status(200).json({ message: 'Registration deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});





const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});