import React, { useState, useEffect } from "react";

export default function Dashboard({ updateSignUpStatus, updateToken }) {
  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);

  const userProfile = {
    name: "John Doe",
    mobile: "+1234567890",
    email: "johndoe@example.com",
    createdAt: "2024-01-01",
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const response = [
        { id: 1, name: "Jane Smith", email: "janesmith@example.com" },
        { id: 2, name: "Mike Johnson", email: "mikejohnson@example.com" },
        { id: 3, name: "Sarah Connor", email: "sarahconnor@example.com" },
      ];
      setUsers(response);
      setTotalUsers(response.length);
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-4 flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/3 bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between mb-4 lg:mb-0">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Profile Information
          </h2>
          <div className="mb-4">
            <span className="font-bold text-gray-700">Name:</span>{" "}
            <span className="text-gray-600">{userProfile.name}</span>
          </div>
          <div className="mb-4">
            <span className="font-bold text-gray-700">Mobile:</span>{" "}
            <span className="text-gray-600">{userProfile.mobile}</span>
          </div>
          <div className="mb-4">
            <span className="font-bold text-gray-700">Email ID:</span>{" "}
            <span className="text-gray-600">{userProfile.email}</span>
          </div>
          <div className="mb-4">
            <span className="font-bold text-gray-700">Created At:</span>{" "}
            <span className="text-gray-600">{userProfile.createdAt}</span>
          </div>
        </div>
        <button
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 mt-4"
          onClick={() => {
            updateToken(null);
            updateSignUpStatus(true);
          }}
        >
          Logout
        </button>
      </div>

      <div className="flex-1 flex flex-col lg:ml-4">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="w-full lg:w-1/3 bg-white rounded-lg shadow-lg p-6 mb-4 lg:mb-0 lg:mr-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Statistics
            </h3>
            <div className="mb-2">
              <span className="font-bold text-gray-700">Total Users:</span>{" "}
              <span className="text-gray-600">{totalUsers}</span>
            </div>
          </div>
          <div className="w-full lg:w-1/3 bg-white rounded-lg shadow-lg p-6 mb-4 lg:mb-0 lg:mr-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Statistics
            </h3>
            <div className="mb-2">
              <span className="font-bold text-gray-700">Total Users:</span>{" "}
              <span className="text-gray-600">{totalUsers}</span>
            </div>
          </div>
          <div className="w-full lg:w-1/3 bg-white rounded-lg shadow-lg p-6 mb-4 lg:mb-0">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Statistics
            </h3>
            <div className="mb-2">
              <span className="font-bold text-gray-700">Total Users:</span>{" "}
              <span className="text-gray-600">{totalUsers}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 flex-1 overflow-y-auto mt-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            User List
          </h3>
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border-b text-left text-gray-600">
                  Name
                </th>
                <th className="py-2 px-4 border-b text-left text-gray-600">
                  Email
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={user.id}
                  className={`hover:bg-gray-50 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="py-2 px-4 border-b">{user.name}</td>
                  <td className="py-2 px-4 border-b">{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
