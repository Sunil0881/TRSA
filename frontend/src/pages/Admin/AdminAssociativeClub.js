import React, { useState, useEffect } from "react";
import { BACKEND_URL } from "../../constants";
import AdminNavbar from "../../components/AdminNavbar";

const urlvar = `${BACKEND_URL}`;

const AdminAssociativeClub = () => {
  const [formData, setFormData] = useState({
    clubName: "",
    district: "",
    members: [{ memberName: "", role: "", profileImage: "", mobileNumber: "" }],
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [clubs, setClubs] = useState([]);
  const [editFormData, setEditFormData] = useState(null);
  const [toggle, setToggle] = useState(false); // Added toggle state

  useEffect(() => {
    fetchClubs();
  }, []);

  const fetchClubs = async () => {
    try {
      const response = await fetch(`${urlvar}/api/associative-club`);
      if (!response.ok) throw new Error("Failed to fetch clubs");
      const data = await response.json();
      setClubs(data);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleAddMember = () => {
    setFormData((prevData) => ({
      ...prevData,
      members: [
        ...prevData.members,
        { memberName: "", role: "", profileImage: "", mobileNumber: "" },
      ],
    }));
  };

  const handleRemoveMember = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      members: prevData.members.filter((_, i) => i !== index),
    }));
  };

  const handleMemberChange = (index, field, value) => {
    setFormData((prevData) => {
      const updatedMembers = [...prevData.members];
      updatedMembers[index][field] = value;
      return { ...prevData, members: updatedMembers };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await fetch(`${urlvar}/api/associative-club`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to save club data");

      setSuccess("Club created successfully!");
      setFormData({
        clubName: "",
        district: "",
        members: [
          { memberName: "", role: "", profileImage: "", mobileNumber: "" },
        ],
      });
      fetchClubs();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEditSubmit = async (e, id) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await fetch(`${urlvar}/api/associative-club/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editFormData),
      });

      if (!response.ok) throw new Error("Failed to update club data");

      setSuccess("Club updated successfully!");
      setEditFormData(null);
      fetchClubs();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDeleteClub = async (id) => {
    try {
      const response = await fetch(`${urlvar}/api/associative-club/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete club");
      setSuccess("Club deleted successfully!");
      fetchClubs();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleToggleChange = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <AdminNavbar />
      <div className="relative px-4 pt-20 md:px-6 lg:px-72">
        {/* Toggle Button */}
        <div className="absolute top-0 right-0 mt-5 mr-5">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              checked={toggle}
              onChange={handleToggleChange}
            />
            <div className="relative">
              <div className="block h-8 bg-gray-600 rounded-full w-14"></div>
              <div
                className={`absolute left-1 top-1 w-6 h-6 rounded-full transition-transform transform ${
                  toggle ? "translate-x-full bg-red-500" : "bg-green-500"
                }`}
              >
                {toggle ? (
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    ></path>
                  </svg>
                )}
              </div>
            </div>
          </label>
        </div>
        <h1 className="pb-10 text-2xl font-semibold text-center text-blue-800 md:text-4xl">
          {toggle ? "Delete Update" : "Add New Update"}
        </h1>
        <div>
          {!toggle ? (
            <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Create New Club</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Club Name
                    <input
                      type="text"
                      value={formData.clubName}
                      onChange={(e) =>
                        setFormData({ ...formData, clubName: e.target.value })
                      }
                      required
                      className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter club name"
                    />
                  </label>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    District
                    <input
                      type="text"
                      value={formData.district}
                      onChange={(e) =>
                        setFormData({ ...formData, district: e.target.value })
                      }
                      required
                      className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter district"
                    />
                  </label>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Members</span>
                    <button
                      type="button"
                      onClick={handleAddMember}
                      className="px-4 py-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      Add Member
                    </button>
                  </div>

                  {formData.members.map((member, index) => (
                    <div
                      key={index}
                      className="p-4 border rounded-lg space-y-3"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Member {index + 1}</span>
                        {formData.members.length > 1 && (
                          <button
                            type="button"
                            onClick={() => handleRemoveMember(index)}
                            className="text-red-500 hover:text-red-700 p-1"
                          >
                            Remove
                          </button>
                        )}
                      </div>
                      <div className="space-y-3">
                        <input
                          type="text"
                          placeholder="Member name"
                          value={member.memberName}
                          onChange={(e) =>
                            handleMemberChange(
                              index,
                              "memberName",
                              e.target.value
                            )
                          }
                          required
                          className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                          type="text"
                          placeholder="Role"
                          value={member.role}
                          onChange={(e) =>
                            handleMemberChange(index, "role", e.target.value)
                          }
                          required
                          className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                          type="text"
                          placeholder="Profile Image URL"
                          value={member.profileImage}
                          onChange={(e) =>
                            handleMemberChange(
                              index,
                              "profileImage",
                              e.target.value
                            )
                          }
                          className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                          type="text"
                          placeholder="Mobile Number"
                          value={member.mobileNumber}
                          onChange={(e) =>
                            handleMemberChange(
                              index,
                              "mobileNumber",
                              e.target.value
                            )
                          }
                          className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Create Club
                </button>
              </form>
              {error && <p className="text-red-500 mt-4">{error}</p>}
              {success && <p className="text-green-500 mt-4">{success}</p>}
            </div>
          ) : (
            <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mt-8 mb-4">Clubs</h2>
              <ul className="space-y-4">
                {clubs.map((club) => (
                  <li key={club._id} className="p-4 border rounded-lg">
                    <h3 className="font-bold">{club.clubName}</h3>
                    <p>{club.district}</p>
                    <button
                      onClick={() => setEditFormData(club)}
                      className="mr-4 text-blue-500 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteClub(club._id)}
                      className="text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                    {editFormData && editFormData._id === club._id && (
                      <form
                        onSubmit={(e) => handleEditSubmit(e, club._id)}
                        className="mt-4 space-y-6"
                      >
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Club Name
                            <input
                              type="text"
                              value={editFormData.clubName}
                              onChange={(e) =>
                                setEditFormData({
                                  ...editFormData,
                                  clubName: e.target.value,
                                })
                              }
                              required
                              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Enter club name"
                            />
                          </label>
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">
                            District
                            <input
                              type="text"
                              value={editFormData.district}
                              onChange={(e) =>
                                setEditFormData({
                                  ...editFormData,
                                  district: e.target.value,
                                })
                              }
                              required
                              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Enter district"
                            />
                          </label>
                        </div>

                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">Members</span>
                            <button
                              type="button"
                              onClick={() =>
                                setEditFormData((prevData) => ({
                                  ...prevData,
                                  members: [
                                    ...prevData.members,
                                    {
                                      memberName: "",
                                      role: "",
                                      profileImage: "",
                                      mobileNumber: "",
                                    },
                                  ],
                                }))
                              }
                              className="px-4 py-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                              Add Member
                            </button>
                          </div>

                          {editFormData.members.map((member, index) => (
                            <div
                              key={index}
                              className="p-4 border rounded-lg space-y-3"
                            >
                              <div className="flex justify-between items-center">
                                <span className="font-medium">
                                  Member {index + 1}
                                </span>
                                {editFormData.members.length > 1 && (
                                  <button
                                    type="button"
                                    onClick={() =>
                                      setEditFormData((prevData) => ({
                                        ...prevData,
                                        members: prevData.members.filter(
                                          (_, i) => i !== index
                                        ),
                                      }))
                                    }
                                    className="text-red-500 hover:text-red-700 p-1"
                                  >
                                    Remove
                                  </button>
                                )}
                              </div>
                              <div className="space-y-3">
                                <input
                                  type="text"
                                  placeholder="Member name"
                                  value={member.memberName}
                                  onChange={(e) =>
                                    setEditFormData((prevData) => {
                                      const updatedMembers = [
                                        ...prevData.members,
                                      ];
                                      updatedMembers[index].memberName =
                                        e.target.value;
                                      return {
                                        ...prevData,
                                        members: updatedMembers,
                                      };
                                    })
                                  }
                                  required
                                  className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                  type="text"
                                  placeholder="Role"
                                  value={member.role}
                                  onChange={(e) =>
                                    setEditFormData((prevData) => {
                                      const updatedMembers = [
                                        ...prevData.members,
                                      ];
                                      updatedMembers[index].role =
                                        e.target.value;
                                      return {
                                        ...prevData,
                                        members: updatedMembers,
                                      };
                                    })
                                  }
                                  required
                                  className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                  type="text"
                                  placeholder="Profile Image URL"
                                  value={member.profileImage}
                                  onChange={(e) =>
                                    setEditFormData((prevData) => {
                                      const updatedMembers = [
                                        ...prevData.members,
                                      ];
                                      updatedMembers[index].profileImage =
                                        e.target.value;
                                      return {
                                        ...prevData,
                                        members: updatedMembers,
                                      };
                                    })
                                  }
                                  className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                  type="text"
                                  placeholder="Mobile Number"
                                  value={member.mobileNumber}
                                  onChange={(e) =>
                                    setEditFormData((prevData) => {
                                      const updatedMembers = [
                                        ...prevData.members,
                                      ];
                                      updatedMembers[index].mobileNumber =
                                        e.target.value;
                                      return {
                                        ...prevData,
                                        members: updatedMembers,
                                      };
                                    })
                                  }
                                  className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                              </div>
                            </div>
                          ))}
                        </div>

                        <button
                          type="submit"
                          className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                          Update Club
                        </button>
                      </form>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminAssociativeClub;