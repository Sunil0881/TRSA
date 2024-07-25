import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../src/pages/Home"
import Membership from './pages/Membership';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
    <Router>
    <Navbar />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/membership" element={<Membership />} />
         
       </Routes>
     </Router>

</div>
  );
}

export default App;
