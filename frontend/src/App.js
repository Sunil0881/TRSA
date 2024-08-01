import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../src/pages/Home"
import Membership from './pages/Membership';
import Navbar from './components/Navbar';
import Achievements from './pages/Achievements';

function App() {
  return (
    <div>
    <Router>
    <Navbar />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/membership" element={<Membership />} />
         <Route path="/achievements" element={<Achievements />} />
         
       </Routes>
     </Router>

</div>
  );
}

export default App;
