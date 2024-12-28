// import React from "react";
// import { Link } from "react-router-dom";

// const Sidebar = () => {
//   return (
//     <div className="w-64 bg-green-700 text-black p-6">
//      <img
//   src="/images/saylani.png" // Update with the correct path to your image
//   alt="Profile"
//   className="w-30 h-38 object-cover rounded-lg mb-4" // Adjusted width and height for a longer image
// />

//         <img
//     src="/images/logo.png" // Update with the correct path to your image
//     alt="Profile"
//     className="w-24 h-24 object-cover rounded-full mb-4"
//   />
//         <h1  className="text-xl mb-6">Javeria malik</h1>
//       {/* <h2 className="text-xl mb-6">Dashboard</h2> */}
     
//       <ul>
//         <li className="mb-4">
//           <Link to="/courses-form" className="hover:text-green-400">
//             Add Course
//           </Link>
//         </li>
//         <li className="mb-4">
//           <Link to="/students" className="hover:text-green-400">
//             Students
//   {/* AllCourses */}
//           </Link>
//         </li>
//         <li className="mb-4">
//           <Link to="/settings" className="hover:text-green-400">
//             Settings
//             {/* AllUsers */}
//           </Link>
//         </li>
       
//         {/* <li className="mb-4">
//           <Link to="/settings" className="hover:text-green-400">
//           Logout
//           </Link>
//         </li> */}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

// .............................mam wla github 

// import React, { useState } from 'react';
// import { Link, Routes, Route } from 'react-router-dom';
// import CreateCourse from './createCourse'; 
// import CoursesForm from './CoursesForm';
// import AllUser from './AllUser'

// const Dashboard = () => {
//     const [sidebarOpen, setSidebarOpen] = useState(true);

//     const toggleSidebar = () => {
//         setSidebarOpen(!sidebarOpen);
//     };

//     return (
//         <div className="flex">
//             <div
//                 className={`bg-[#1E293B] text-white h-screen p-4 transition-transform duration-300 ${sidebarOpen ? 'w-48' : 'w-20'
//                     }`}
//             >
//                 <button onClick={toggleSidebar} className="mb-4">
//                     {sidebarOpen ? 'Close' : 'Open'} Sidebar
//                 </button>
//                 <ul>
//                     <li className="hover:ml-4 transform ease-in-out duration-300">
//                         <Link to="/dashboard/create/course">Create Courses</Link>
//                     </li>
//                     <li className="hover:ml-4 transform ease-in-out duration-300">
//                         <Link to="/dashboard/course">All Courses</Link>
//                     </li>
//                     <li className="hover:ml-4 transform ease-in-out duration-300">
//                         <Link to="/dashboard/user">All User</Link>
//                     </li>
//                     <li className="hover:ml-4 transform ease-in-out duration-300">
//                         <Link to="/dashboard/setting">Settings</Link>
//                     </li>
//                     <li className="hover:ml-4 transform ease-in-out duration-300">
//                         <Link to="/">Back to Home</Link>
//                     </li>
//                 </ul>
//             </div>

//             {/* Main Content */}
//             <div className="flex-1 bg-gray-100 dark:bg-[#0F172A] transition-all duration-300">
//                 {/* Navbar */}
//                 <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-cyan-500 to-blue-500 p-4 flex justify-between items-center">
//                     <div className="text-white">Brand</div>
//                     <div>
//                         <button>Hello</button>
//                     </div>
//                 </nav>

//                 {/* Content Area */}
//                 <div className="mt-16 p-6">
//                     <Routes>
//                         <Route path="/create/course" element={<CreateCourse />} />
//                         <Route path="/course" element={<Course />} />
//                         <Route path="/user" element={<AllUser />} />
//                     </Routes>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Dashboard;