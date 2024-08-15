import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../src/pages/Home"
import Membership from './pages/Membership';
import Achievements from './pages/Achievements';
import AchievementsPost from './pages/Admin/AchievementsPost';
import About from './pages/About';
import AddUpdates from './pages/Admin/AddUpdates';
import AchievementsDetails from './pages/AchievementsDetails';
import AdminHome from './pages/Admin/AdminHome';
import Login from './pages/Admin/Login';
import Events from './pages/Events';
import AddEvents from './pages/Admin/AddEvents';
import AddSkaters from './pages/Admin/AddSkaters';
import SkaterProfile from './pages/SkatersProfile';
import Gallary from './pages/Gallary';
import AddImages from './pages/Admin/AddImages';
import EventDetails from './pages/EventDetail';
import RegistrationList from './pages/Admin/RegistrationData';


function App() {
  const isLoggedIn = localStorage.getItem('authenticated');
  return (
    <div>
    <Router>
   
    
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/membership" element={<Membership />} />
         <Route path="/achievements" element={<Achievements />} />
         <Route path="/achievement/:id" element={<AchievementsDetails />} />
         <Route path="/events/:id" element={<EventDetails />} />
         <Route path="/events" element={<Events />} />
         <Route path="/skatersprofile" element={<SkaterProfile />} />
         <Route path="/gallery" element={<Gallary/>} />

         
         <Route path="/login" element={<Login />} />
         <Route path='/admin' element={isLoggedIn === 'true'?<AdminHome />:<Login />} />
         <Route path="/achievementspost" element={isLoggedIn === 'true'?<AchievementsPost />:<Login />} />
         <Route path="/addupdates" element={isLoggedIn === 'true'?<AddUpdates />:<Login />} />
         <Route path="/addevents" element={isLoggedIn === 'true'?<AddEvents />:<Login />} />
         <Route path="/addskaters" element={isLoggedIn === 'true'?<AddSkaters />:<Login />} />
         <Route path="/addimage" element={isLoggedIn === 'true'?<AddImages />:<Login />} />
         <Route path="/registrations" element={isLoggedIn === 'true'?<RegistrationList />:<Login />} />
         

         
       </Routes>
     </Router>

</div>
  );
}

export default App;
