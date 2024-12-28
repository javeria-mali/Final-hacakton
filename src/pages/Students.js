import React, { useState } from "react";
import axios from 'axios'

const Students = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Ali Khan", course: "Web Development" },
    { id: 2, name: "Sara Ahmed", course: "App Development" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [newStudent, setNewStudent] = useState({ name: "", course: "" });

  // State for editing a student
  const [editStudent, setEditStudent] = useState(null); // Holds the student being edited

  // Add a new student to the list
  const handleAddStudent = () => {
    if (newStudent.name && newStudent.course) {
      const updatedStudents = [
        ...students,
        { id: students.length + 1, ...newStudent },
      ];
      setStudents(updatedStudents);
      setNewStudent({ name: "", course: "" }); // Reset input fields
    } else {
      alert("Please fill in both Name and Course fields.");
    }
  };

  // Delete a student
  const handleDeleteStudent = (id) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
  };

  // Start editing a student
  const handleEditStudent = (student) => {
    setEditStudent(student);
  };
 

  // Save changes after editing
  const handleSaveStudent = () => {
    const updatedStudents = students.map((student) =>
      student.id === editStudent.id ? editStudent : student
    );
    setStudents(updatedStudents);
    setEditStudent(null); // Close the edit form
  };

  // Filter students based on search input
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gradient-to-b from-white to-green-100 min-h-screen">
      <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-blue-600 mb-6 text-center">
        All Students
      </h1>


      {/* Add Student Form */}
      <div className="flex mb-6">
        <input
          type="text"
          placeholder="Student Name"
          value={newStudent.name}
          onChange={(e) =>
            setNewStudent({ ...newStudent, name: e.target.value })
          }
          className="border p-2 rounded mr-4"
        />
        <input
          type="text"
          placeholder="Course"
          value={newStudent.course}
          onChange={(e) =>
            setNewStudent({ ...newStudent, course: e.target.value })
          }
          className="border p-2 rounded mr-4"
        />
        <button
          onClick={handleAddStudent}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add Student
        </button>
      </div>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by Name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 rounded w-full max-w-md mb-6"
      />

      {/* Students Table */}
      <table className="w-full bg-white rounded shadow">
        <thead>
          <tr className="bg-green-600 text-white">
            <th className="py-2 px-4 text-left">ID</th>
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Course</th>
            <th className="py-2 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student) => (
              <tr
                key={student.id}
                className="hover:bg-green-50 transition duration-200"
              >
                <td className="py-2 px-4">{student.id}</td>
                <td className="py-2 px-4">{student.name}</td>
                <td className="py-2 px-4">{student.course}</td>
                <td className="py-2 px-4 space-x-2">
                  <div className="flex justify-center gap-4">
                    <button
                      onClick={() => handleEditStudent(student)}
                      className="text-white px-3 py-1 rounded bg-gradient-to-r from-green-500 to-blue-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-500"
                    >
                      Update
                    </button>

                    <button
                      onClick={() => handleDeleteStudent(student.id)}
                      className="text-white px-3 py-1 rounded hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-500 bg-gradient-to-r from-green-500 to-blue-500"
                    >
                      Delete
                    </button>
                  </div>


                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="4"
                className="py-4 px-4 text-center text-gray-500 italic"
              >
                No students found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Edit Form */}
      {editStudent && (
        <div className="mt-6 p-4 border rounded bg-white shadow">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Edit Student</h2>
          <div className="flex">
            <input
              type="text"
              placeholder="Student Name"
              value={editStudent.name}
              onChange={(e) =>
                setEditStudent({ ...editStudent, name: e.target.value })
              }
              className="border p-2 rounded mr-4"
            />
            <input
              type="text"
              placeholder="Course"
              value={editStudent.course}
              onChange={(e) =>
                setEditStudent({ ...editStudent, course: e.target.value })
              }
              className="border p-2 rounded mr-4"
            />
            <button
              onClick={handleSaveStudent}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Save
            </button>
            <button
              onClick={() => setEditStudent(null)}
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 ml-2"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Students;

