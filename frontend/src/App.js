import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
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
import Club from './pages/Club';
import PageTransition from './components/PageTransition'; // Import the transition component
import ClubDetail from './pages/ClubDetail';
import DeleteAchi from './pages/Admin/DeleteAchi';

// Component to use location hook within Router context
const AppRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route
        path="/"
        element={
          <PageTransition>
            <Home />
          </PageTransition>
        }
      />
       <Route 
         path="/clubs/:stateName" 
         element={
          <PageTransition>
            <ClubDetail />
            </PageTransition>
          } />
      <Route
        path="/about"
        element={
          <PageTransition>
            <About />
          </PageTransition>
        }
      />
      <Route
        path="/membership"
        element={
          <PageTransition>
            <Membership />
          </PageTransition>
        }
      />
      <Route
        path="/achievements"
        element={
          <PageTransition>
            <Achievements />
          </PageTransition>
        }
      />
      <Route
        path="/achievement/:id"
        element={
          <PageTransition>
            <AchievementsDetails />
          </PageTransition>
        }
      />
      <Route
        path="/club"
        element={
          <PageTransition>
            <Club />
          </PageTransition>
        }
      />
      <Route
        path="/events/:id"
        element={
          <PageTransition>
            <EventDetails />
          </PageTransition>
        }
      />
      <Route
        path="/events"
        element={
          <PageTransition>
            <Events />
          </PageTransition>
        }
      />
      <Route
        path="/skatersprofile"
        element={
          <PageTransition>
            <SkaterProfile />
          </PageTransition>
        }
      />
      <Route
        path="/gallery"
        element={
          <PageTransition>
            <Gallary />
          </PageTransition>
        }
      />
      <Route
        path="/login"
        element={
          <PageTransition>
            <Login />
          </PageTransition>
        }
      />
      <Route
        path="/admin"
        element={
          localStorage.getItem('authenticated') === 'true' ? (
            <PageTransition>
              <AdminHome />
            </PageTransition>
          ) : (
            <PageTransition>
              <Login />
            </PageTransition>
          )
        }
      />
      <Route
        path="/achievementspost"
        element={
          localStorage.getItem('authenticated') === 'true' ? (
            <PageTransition>
              <AchievementsPost />
            </PageTransition>
          ) : (
            <PageTransition>
              <Login />
            </PageTransition>
          )
        }
      />
      <Route
        path="/addupdates"
        element={
          localStorage.getItem('authenticated') === 'true' ? (
            <PageTransition>
              <AddUpdates />
            </PageTransition>
          ) : (
            <PageTransition>
              <Login />
            </PageTransition>
          )
        }
      />
      <Route
        path="/addevents"
        element={
          localStorage.getItem('authenticated') === 'true' ? (
            <PageTransition>
              <AddEvents />
            </PageTransition>
          ) : (
            <PageTransition>
              <Login />
            </PageTransition>
          )
        }
      />
      <Route
        path="/addskaters"
        element={
          localStorage.getItem('authenticated') === 'true' ? (
            <PageTransition>
              <AddSkaters />
            </PageTransition>
          ) : (
            <PageTransition>
              <Login />
            </PageTransition>
          )
        }
      />
      <Route
        path="/addimage"
        element={
          localStorage.getItem('authenticated') === 'true' ? (
            <PageTransition>
              <AddImages />
            </PageTransition>
          ) : (
            <PageTransition>
              <Login />
            </PageTransition>
          )
        }
      />
      <Route
        path="/deleteachi"
        element={
          localStorage.getItem('authenticated') === 'true' ? (
            <PageTransition>
              <DeleteAchi />
            </PageTransition>
          ) : (
            <PageTransition>
              <Login />
            </PageTransition>
          )
        }
      />
      <Route
        path="/registrations"
        element={
          localStorage.getItem('authenticated') === 'true' ? (
            <PageTransition>
              <RegistrationList />
            </PageTransition>
          ) : (
            <PageTransition>
              <Login />
            </PageTransition>
          )
        }
      />
    </Routes>
  );
};


function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
