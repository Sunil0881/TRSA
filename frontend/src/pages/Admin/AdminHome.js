import React from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import axios from 'axios';
import "../../Styles/Home.css"

const AdminHome = () => {
  const [news, setNews] = useState({ title: "", description: "" });

  useEffect(() => {
    // Fetch the latest news
    axios
      .get("http://localhost:5000/news")
      .then((response) => setNews(response.data.news))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <AdminNavbar />
      <div>
      <div className="breaking-news">
        <marquee>
          <strong>{news.title || "No Breaking News"}</strong>:{" "}
          {news.description || ""}
        </marquee>
      </div>
    </div>
      <main className="flex-grow p-6">
        <div className="max-w-4xl mx-auto py-28"> 
          {/* Welcome Section */}
          <section className="mb-12"> 
            <motion.h1
              className="text-4xl font-bold text-gray-800"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              🎉 Welcome, Admin! 🎉
            </motion.h1>
            <motion.p
              className="mt-4 text-lg text-gray-600" 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
            >
              We're thrilled to have you on board. This is your dashboard where you can manage the system, view statistics, and perform various administrative tasks.
            </motion.p>
          </section>

          {/* Additional Information or Actions */}
          <section>
            <motion.p
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
            >
              Use the navigation menu to access different sections of the admin panel, such as managing events, viewing registrations, and handling user profiles.
            </motion.p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminHome;
