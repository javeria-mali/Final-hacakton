// import React, { useState } from "react";
// import Sidebar from "../component/Sidebar";  
// import CoursesForm from "../component/CoursesForm";  
// import Students from "../pages/Students";  
// import Settings from "../pages/Settings";  

// const Dashboard = () => {
//   const [selectedPage, setSelectedPage] = useState("courses");

//   // Function to handle page selection
//   const handleSelect = (page) => {
//     setSelectedPage(page);
//   };

//   return (
//     <div className="flex">
//       {/* Pass handleSelect to Sidebar */}
//       <Sidebar onSelect={handleSelect} activeItem={selectedPage} />

//       <div className="flex-1 p-6">
//         {/* Conditionally render content based on selectedPage */}
//         {selectedPage === "courses" && <CoursesForm />}
//         {selectedPage === "students" && <Students />}
//         {selectedPage === "settings" && <Settings />}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
