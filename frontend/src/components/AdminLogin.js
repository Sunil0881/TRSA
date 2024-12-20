// src/components/AdminLoginPage.js
import React, { useState } from 'react';
import { BACKEND_URL } from '../constants';
const AdminLogin = () => {
    const [admin, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const urlvar = `${BACKEND_URL}`;
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${urlvar}/api/login`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ admin, password }),
            });
            const data = await response.json();
            console.log(data);
            if (response.ok) {
              console.log(data.message);
              window.localStorage.setItem("authenticated", true);
              window.location.href = "./admin";
            } else {
              alert("Authentication failed. Please check your credentials.");
            }
          } catch (error) {
            console.error("Error logging in:", error);
            alert("Error logging in. Please try again.");
          }
        
  
        
       
        
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white border border-gray-300 shadow-md rounded-lg">
                <h1 className="text-2xl font-semibold mb-6 text-center">Admin Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="admin" className="block text-gray-700 font-medium mb-2">Name</label>
                        <input
                            id="admin"
                            type="text"
                            placeholder="Enter your name"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={admin}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
