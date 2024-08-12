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

function App() {
  return (
    <div>
    <Router>
   
    
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/membership" element={<Membership />} />
         <Route path="/achievements" element={<Achievements />} />
         <Route path="/achievement/:id" element={<AchievementsDetails />} />

         <Route path="/login" element={<Login />} />
         <Route path="/admin" element={<AdminHome />} />
         <Route path="/achievementspost" element={<AchievementsPost />} />
         <Route path="/addupdates" element={<AddUpdates />} />
         

         
       </Routes>
     </Router>

</div>
  );
}

export default App;
