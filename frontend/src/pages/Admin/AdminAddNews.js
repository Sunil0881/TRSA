import React, { useState } from "react";
import axios from "axios";
import AdminNavbar from "../../components/AdminNavbar";
import Footer from "../../components/Footer";
import "../../Styles/AdminAddNews.css"

const AdminAddNews = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send title and description to the backend
    axios
      .post("https://trsabackend.vercel.app/api/news", { title, description })
      .then(() => {
        alert("News added successfully!");
        setTitle("");
        setDescription("");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
    <AdminNavbar />
   <div className="admin-add-news">
     
     <h2>Add Breaking News</h2>
     <form onSubmit={handleSubmit} className="add-news-form">
       <div className="form-group">
         <label htmlFor="title">Title:</label>
         <input
           type="text"
           id="title"
           value={title}
           onChange={(e) => setTitle(e.target.value)}
           placeholder="Enter news title"
           required
         />
       </div>
       <div className="form-group">
         <label htmlFor="description">Description:</label>
         <textarea
           id="description"
           value={description}
           onChange={(e) => setDescription(e.target.value)}
           placeholder="Enter news description"
           required
         ></textarea>
       </div>
       <button type="submit" className="submit-button">
         Submit
       </button>
     </form>
   </div>
   <Footer />
   </div>
  );
};

export default AdminAddNews;
