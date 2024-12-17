import React, { useState, useEffect } from "react";

const MessageSender = () => {
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({
    show: false,
    type: "",
    message: "",
  });

  // Fetch users from your backend API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://trsabackend.vercel.app/api/skaterprofiles" // Replace with your API endpoint
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setUsers(data.profiles); // Assumes API returns `{ profiles: [...] }`
      } catch (error) {
        console.error("Error fetching users:", error);
        showNotification("error", "Failed to fetch users");
      }
    };

    fetchUsers();
  }, []);

  const showNotification = (type, message) => {
    setNotification({ show: true, type, message });
    setTimeout(
      () => setNotification({ show: false, type: "", message: "" }),
      5000
    );
  };

  const handleSelectAll = () => {
    if (selectedUsers.length === users.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(users.map((user) => user.email));
    }
  };

  const handleUserSelect = (email) => {
    if (selectedUsers.includes(email)) {
      setSelectedUsers(selectedUsers.filter((e) => e !== email));
    } else {
      setSelectedUsers([...selectedUsers, email]);
    }
  };

  const sendEmails = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send the selected users' emails to the backend
      const response = await fetch("https://trsabackend.vercel.app/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          selectedUsers,
          subject,
          message,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        showNotification("success", "Messages sent successfully!");
        setMessage("");
        setSubject("");
        setSelectedUsers([]);
      } else {
        showNotification("error", data.message || "Failed to send messages");
      }
    } catch (error) {
      console.error("Error sending emails:", error);
      showNotification("error", "Failed to send messages");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h2 className="text-2xl font-bold mb-6">Send Messages to Skaters</h2>

      {notification.show && (
        <div
          className={`p-4 mb-4 rounded-lg ${
            notification.type === "success"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {notification.message}
        </div>
      )}

      <form onSubmit={sendEmails} className="space-y-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Select Recipients
            </label>
            <div className="mb-2">
              <button
                type="button"
                onClick={handleSelectAll}
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                {selectedUsers.length === users.length
                  ? "Deselect All"
                  : "Select All"}
              </button>
            </div>
            <div className="max-h-48 overflow-y-auto border rounded-lg p-2">
              {users.map((user) => (
                <label
                  key={user.email}
                  className="flex items-center space-x-2 p-2 hover:bg-gray-50"
                >
                  <input
                    type="checkbox"
                    checked={selectedUsers.includes(user.email)}
                    onChange={() => handleUserSelect(user.email)}
                    className="rounded border-gray-300"
                  />
                  <span>
                    {user.name} - {user.email}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="subject">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 border rounded-lg h-32"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading || selectedUsers.length === 0}
          className={`w-full py-2 px-4 rounded-lg text-white 
                        ${
                          loading || selectedUsers.length === 0
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-blue-600 hover:bg-blue-700"
                        }`}
        >
          {loading ? "Sending..." : "Send Messages"}
        </button>
      </form>
    </div>
  );
};

export default MessageSender;