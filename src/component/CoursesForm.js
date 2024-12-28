// mara wla 
// import React, { useState } from "react";

// const CoursesForm = () => {
//   const [courseData, setCourseData] = useState({
//     title: "",
//     description: "",
//   });

//   // Handle form changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCourseData({
//       ...courseData,
//       [name]: value,
//     });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Simulate a submit action (you can later connect this to an API)
//     console.log("Course Submitted", courseData);
//     // Reset form after submission
//     setCourseData({
//       title: "",
//       description: "",
//     });
//   };

//   return (
   
//     <div className="flex p-6 bg-green-500 shadow-md rounded-lg max-w-4xl mx-auto">
//     {/* Left side: Form */}
//     <div className="w-full md:w-1/2 pr-4">
//       <h2 className="text-2xl font-bold mb-4 text-center text-blue-500">Create Courses</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-gray-700">Course Title</label>
//           <input
//             type="text"
//             name="title"
//             value={courseData.title}
//             onChange={handleChange}
//             className="border p-2 rounded w-full"
//             placeholder="Enter Course Title"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Description</label>
//           <textarea
//             name="description"
//             value={courseData.description}
//             onChange={handleChange}
//             className="border p-2 rounded w-full"
//             placeholder="Enter Course Description"
//           />
//         </div>
  
//         <div className="flex justify-center">
//           <button
//             type="submit"
//             className="bg-blue-200 text-green-700 px-4 py-2 rounded-lg hover:bg-green-600">
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
  
//     {/* Right side: Image */}
//     <div className="w-full md:w-1/2 flex justify-center items-center">
//   <img
//     src="/images/Online Education Experience 3D Scene.png"
//     alt="Course Preview"
//     className="w-4/5 rounded-lg shadow-md"
//   />
// </div>

//   </div>
  
//   );
// };

// export default CoursesForm;

