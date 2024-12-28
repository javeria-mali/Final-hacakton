import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  // State to manage the form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Handle form submission (Save)
  const handleSave = (e) => {
    e.preventDefault();
    console.log("Saving user settings:", { name, email, studentId, password });
    // Save settings logic (e.g., make an API call here)
    // Redirect to Courses Page after saving
    navigate("/courses");
  };

  // Handle cancel (go back to previous page)
  const handleCancel = () => {
    navigate("/courses"); // Redirect to the Courses page
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-green-100">

  {/* Settings Heading */}
  <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-600 mb-8">
    Settings
  </h2>

  {/* Image Above the Form */}


  {/* Form */}

  <form className="bg-green-500 p-8 rounded shadow-md w-96" onSubmit={handleSave}>
  <div className="flex justify-center mb-6">
    <img
      src="/images/logo.png" // Replace with your image path
      alt="Settings Image"
      className="w-1/3 rounded-lg shadow-md"
    />
  </div>
    {/* Name Field */}
    <input
      type="text"
      placeholder="Name"
      className="w-full p-2 mb-4 border rounded"
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
    />

    {/* Email Field */}
    <input
      type="email"
      placeholder="Email"
      className="w-full p-2 mb-4 border rounded"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />

    {/* Student ID Field */}
    <input
      type="text"
      placeholder="Student ID"
      className="w-full p-2 mb-4 border rounded"
      value={studentId}
      onChange={(e) => setStudentId(e.target.value)}
      required
    />

    {/* Password Field */}
    <input
      type="password"
      placeholder="Password"
      className="w-full p-2 mb-4 border rounded"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />

    {/* Save Button */}
    <button
      type="submit"
      className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
    >
      Save
    </button>

    {/* Cancel Button */}
    <button
      type="button"
      onClick={handleCancel}
      className="w-full bg-gray-500 text-white py-2 rounded mt-4 hover:bg-gray-600 transition duration-300"
    >
      Cancel
    </button>
  </form>

</div>

  );
};

export default Settings;
