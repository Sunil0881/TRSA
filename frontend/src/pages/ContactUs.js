import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactUs = () => {
  return (
    <div>
    <Navbar />
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg max-w-4xl w-full p-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions or inquiries, feel free to reach out to our secretary:
            </p>
            <div className="text-gray-700">
              <p className="font-medium">John Doe</p>
              <p>Phone: <a href="tel:+1234567890" className="text-blue-500 hover:underline">+1 (234) 567-890</a></p>
              <p>Email: <a href="mailto:john.doe@example.com" className="text-blue-500 hover:underline">john.doe@example.com</a></p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Subject"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="content" className="block text-gray-700 font-medium mb-2">
                Content
              </label>
              <textarea
                id="content"
                placeholder="Write your message here..."
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows="5"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default ContactUs;
