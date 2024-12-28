

import React from "react";
import Notes from "./Notes"; // Ensure you import the Notes component

const MainLayout = ({ children }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      {/* Uncomment the following line if Sidebar is implemented */}
      {/* <Sidebar /> */}

      {/* Main Content Area */}
      <div className="flex-1 min-h-screen bg-gray-100">
        <div className="p-6">
          {/* Notes Component */}
          <Notes />

          {/* Children Passed to Layout */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;


