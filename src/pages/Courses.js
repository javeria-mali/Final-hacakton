// idk yh kon sa page chl rha ha 
// import React, { useState, useEffect } from "react";
// import Sidebar from "../components/Sidebar";
// import CourseCard from "../components/CourseCard";

// import axios from "axios";  

// const MyCourses = () => {
//   const [courses, setCourses] = useState([]); 
//   const [searchTerm, setSearchTerm] = useState(""); 
//   const [loading, setLoading] = useState(true); 

//   // Fetch courses from backend
//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const response = await axios.get("http:g//localhost:3002/api/courses"); 
//         setCourses(response.data);
//         setLoading(false);  // Stop loading once data is fetched
//       } catch (error) {
//         console.error("Error fetching courses:", error);
//         setLoading(false); // Stop loading if there's an error
//       }
//     };

//     fetchCourses();
//   }, []); // Run once when the component mounts

//   // Filtered courses based on search
//   const filteredCourses = courses.filter((course) =>
//     course.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="flex bg-gradient-to-b from-green-500 to-blue-500">

//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <div className="flex-1 p-6 bg-gradient-to-b from-primary to-white">
//         <h2 className="text-3xl font-bold text-primary mb-4">My Courses</h2>

//         {/* Search Bar */}
//         <input
//           type="text"
//           placeholder="Search"
//           className="border p-2 rounded mb-6 w-full max-w-md"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />

//         {/* Loading Indicator */}
//         {loading && <p>Loading courses...</p>}

//         {/* Courses Grid */}
//         <div className="grid grid-cols-3 gap-6">
//           {filteredCourses.length > 0 ? (
//             filteredCourses.map((course) => (
//               <CourseCard key={course._id} {...course} />
//             ))
//           ) : (
//             <p className="col-span-3 text-gray-500">No courses found</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyCourses;
