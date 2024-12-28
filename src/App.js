import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/userRegister";
import Navbar from "./component/Navbar";
// import Sidebar from "./component/Sidebar";
import CourseCard from "./component/CourseCard";
import CoursesForm from "./component/CoursesForm";
import MainLayout from "./component/MainLayout";
import Notes from "./component/Notes";

// import PrivateRoute from "./pages/privateRoute";

// Pages
import Settings from "./pages/Settings";
import Students from "./pages/Students";
import CreateCourses from "./pages/CreateCourses";

// Sample Course Data

const coursesData = [
  
 
  {

    // id: 1,
    title: "Web Development",
    // description: "Data analyzes,Data management,Data mining, <br/>Data model,Data visulaization,Extract,<br/>Transform,Load,Microsoft,Excel,Power",
    // duration: "6 Weeks",
    // image: "/images/cards.png", // Path to the image
  },
  {
    // id: 2,
    title: "Frontend Development",
    // description: "Data analyzes,Data management,Data mining, <br/>Data model,Data visulaization,Extract,<br/>Transform,Load,Microsoft,Excel,Power",
    // duration: "6 Weeks",
    // image: "/images/cards.png", // Path to the image
  },
  {
    // id: 3,
    title: "App Development",
    // description: "Data analyzes,Data management,Data mining, <br/>Data model,Data visulaization,Extract,<br/>Transform,Load,Microsoft,Excel,Power",
    // duration: "8 Weeks",
    // image: "/images/cards.png", // Path to the image
  },
];


        

// Hero Section for Home Page
const HeroSection = () => (
  <div className="h-screen bg-gradient-to-b from-green-200 to-white flex items-center justify-center">
    <div className="text-center px-4">
    <h1 className="text-6xl font-bold mb-4">
  <span className="text-blue-500">Learn without</span> <br/><span className="text-green-500">limits</span>
</h1>

<p className="text-lg text-blue-800 mb-6 max-w-3xl mx-auto">
  Start, switch, or advance your career with<br/> more than{" "}
  <strong>7,000 courses</strong>, Professional<br/> Certificates, and degrees
  from world-class<br/> universities and companies.
</p>

<Link
  to="/courses"
  className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-lg hover:bg-gradient-to-r hover:from-green-600 hover:to-blue-600 transition duration-300"
>
  Get Started
</Link>

    </div>
    <div className="hidden md:block w-1/2 ml-40">
  <img
    src="/images/learning-image.png"
    alt="Learning Image"
    className="w-4/5 h-auto object-cover rounded-lg shadow-lg"
  />
</div>


  </div>
);




// Logout Page
const Logout = () => (
  <div className="h-screen flex items-center justify-center">
    <h1 className="text-3xl font-bold text-red-500">You have been logged out!</h1>
  </div>
);

// App Component
function App() {
  return (
    <Router>
      {/* Navbar */}
      <Navbar />

      {/* Routes */}
      <Routes>
        {/* Routes without Sidebar */}
        <Route path="/" element={<HeroSection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/cc" element={<CreateCourses />} />
        
        {/* Routes with Sidebar */}
        <Route
          path="/courses"
          element={
            <MainLayout>
              {/* <MyCourses /> */}
            </MainLayout>
          }
        />
        <Route
          path="/students"
          element={
            <MainLayout>
              <Students />
            </MainLayout>
          }
        />
        <Route
          path="/settings"
          element={
            <MainLayout>
              <Settings />
            </MainLayout>
          }
        />
        <Route
          path="/courses-form"
          element={
            <MainLayout>
              <CoursesForm />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
