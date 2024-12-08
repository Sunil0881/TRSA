import React from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import "../../Styles/Home.css"

const AdminHome = () => {
  // Initialize state with content or split it into title/description based on your needs
  const [news, setNews] = useState({
    title: "No Breaking News",
    description: ""
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/breaking-news")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Option 1: If you want to keep the content as is
        setNews({
          title: "Breaking News",
          description: data?.content || "No Breaking News"
        });
        
        // Option 2: If your content follows a "Title: Description" format
        // const [title, ...descriptionParts] = (data?.content || "No Breaking News: ").split(":");
        // setNews({
        //   title: title.trim(),
        //   description: descriptionParts.join(":").trim() || ""
        // });
        
        console.log(data); // Log the received data
        console.log(news); // Note: This will show the previous state due to closure
      })
      .catch((error) => {
        console.error("Error fetching breaking news:", error);
        setNews({
          title: "No Breaking News",
          description: ""
        });
      });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <AdminNavbar />
      <div className="breaking-news">
        <marquee>
          <strong>{news.title}</strong>{news.description && `: ${news.description}`}
        </marquee>
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