import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../src/pages/Home"
import Membership from './pages/Membership';
import Navbar from './components/Navbar';
import Achievements from './pages/Achievements';
import AchievementsPost from './pages/Admin/AchievementsPost';
import About from './pages/About';
import AddUpdates from './pages/Admin/AddUpdates';

function App() {
  return (
    <div>
    <Router>
    <Navbar />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/membership" element={<Membership />} />
         <Route path="/achievements" element={<Achievements />} />
         <Route path="/achievementspost" element={<AchievementsPost />} />
         <Route path="/addupdates" element={<AddUpdates />} />

         
       </Routes>
     </Router>

</div>
  );
}

export default App;
