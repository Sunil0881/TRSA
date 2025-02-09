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
import News from './pages/News';
import AddEvents from './pages/Admin/AddEvents';
import SkaterProfile from './pages/SkatersProfile';
import Gallary from './pages/Gallary';
import AddImages from './pages/Admin/AddImages';
import EventDetails from './pages/EventDetail';
import RegistrationList from './pages/Admin/RegistrationData';
import Club from './pages/Club';
import PageTransition from './components/PageTransition'; // Import the transition component
import ClubDetail from './pages/ClubDetail';
import DeleteAchi from './pages/Admin/DeleteAchi';
import Team from "./components/Team";
import "@fortawesome/fontawesome-free/css/all.min.css";
import DeleteNews from './pages/Admin/DeleteNews';
import AddNews from './pages/Admin/AddNews';
import SkaterForm from "./components/SkaterForm";
import NewAbout from './pages/NewAbout';
import State from './pages/State';
import National from './pages/National';
import MessageSender from './components/MessageSender';
import AdminAddNews from "./pages/Admin/AdminAddNews"
import AdminAbout from "./pages/Admin/AdminAbout";
import International from './pages/International';
import District from './pages/District';
import ContactUs from './pages/ContactUs';
import DeleteSkaters from './pages/Admin/DeleteSkaters';
import AdminAssociativeClub from './pages/Admin/AdminAssociativeClub';


// Component to use location hook within Router context
const AppRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route
        path="/"
        element={
          <PageTransition>
            <NewAbout />
          </PageTransition>
        }
      />
      <Route
        path="/team"
        element={
          <PageTransition>
            <Team />
          </PageTransition>
        }
      />
      <Route
        path="/club/:id"
        element={
          <PageTransition>
            <ClubDetail />
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
        path="/message"
        element={
          <PageTransition>
            <MessageSender />
          </PageTransition>
        }
      />
      <Route
        path="/state"
        element={
          <PageTransition>
            <State />
          </PageTransition>
        }
      />
      <Route
        path="/national"
        element={
          <PageTransition>
            <National />
          </PageTransition>
        }
      />
      <Route
        path="/international"
        element={
          <PageTransition>
            <International />
          </PageTransition>
        }
      />
      <Route
        path="/district"
        element={
          <PageTransition>
            <District />
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
        path="/skaterform"
        element={
          <PageTransition>
            <SkaterForm />
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
        path="/newabout"
        element={
          <PageTransition>
            <NewAbout />
          </PageTransition>
        }
      />
      <Route
        path="/news"
        element={
          <PageTransition>
            <News />
          </PageTransition>
        }
      />
      <Route
        path="/admin"
        element={
          localStorage.getItem("authenticated") === "true" ? (
            <PageTransition>
              <AdminAbout />
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
          localStorage.getItem("authenticated") === "true" ? (
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
          localStorage.getItem("authenticated") === "true" ? (
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
          localStorage.getItem("authenticated") === "true" ? (
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
        path="/deleteskaters"
        element={
          localStorage.getItem("authenticated") === "true" ? (
            <PageTransition>
              <DeleteSkaters />
            </PageTransition>
          ) : (
            <PageTransition>
              <Login />
            </PageTransition>
          )
        }
      />

      <Route
        path="/admin-associativeclub"
        element={
          localStorage.getItem("authenticated") === "true" ? (
            <PageTransition>
              <AdminAssociativeClub />
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
          localStorage.getItem("authenticated") === "true" ? (
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
        path="/addnews"
        element={
          localStorage.getItem("authenticated") === "true" ? (
            <PageTransition>
              <AddNews />
            </PageTransition>
          ) : (
            <PageTransition>
              <Login />
            </PageTransition>
          )
        }
      />

      <Route
        path="/deletenews"
        element={
          localStorage.getItem("authenticated") === "true" ? (
            <PageTransition>
              <DeleteNews />
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
          localStorage.getItem("authenticated") === "true" ? (
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
          localStorage.getItem("authenticated") === "true" ? (
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
      <Route path="/admin-add-news" element={<AdminAddNews />} />
      <Route
        path="/admin/adminabout"
        element={
          localStorage.getItem("authenticated") === "true" ? (
            <PageTransition>
              <AdminAbout />
            </PageTransition>
          ) : (
            <PageTransition>
              <Login />
            </PageTransition>
          )
        }
      />

      <Route
        path="/contactus"
        element={
          <PageTransition>
            <ContactUs />
          </PageTransition>
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
