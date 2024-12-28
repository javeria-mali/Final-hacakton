
import React, { useState, useEffect } from "react";
import axios from "axios";

const NotesForm = () => {
  const [note, setNote] = useState({
    title: "",
    content: "",
    subject: "",
    createdBy: "",
    collaborators: [],
  });
  const [notes, setNotes] = useState([]); // State for fetched notes
  const [statusMessage, setStatusMessage] = useState("");
  const [isEditing, setIsEditing] = useState(false); // Flag to check if editing
  const [editNoteId, setEditNoteId] = useState(null); // ID of the note being edited

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  };

  const handleAddCollaborator = () => {
    setNote((prevNote) => ({
      ...prevNote,
      collaborators: [...prevNote.collaborators, ""], // Add empty string for new collaborator input
    }));
  };

  const handleCollaboratorChange = (index, value) => {
    const updatedCollaborators = [...note.collaborators];
    updatedCollaborators[index] = value; // Update the collaborator at the given index
    setNote((prevNote) => ({
      ...prevNote,
      collaborators: updatedCollaborators, // Update the state with new collaborators
    }));
  };

  const fetchNotes = async () => {
    try {
      const response = await axios.get("http://localhost:3002/api/notes");
      setNotes(response.data); // Set the fetched notes in the state
    } catch (error) {
      console.error("Error fetching notes:", error.message);
    }
  };

  useEffect(() => {
    fetchNotes(); // Fetch notes when the component mounts
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Filter out empty collaborators (if any)
    const collaborators = note.collaborators.filter(
      (collaborator) => collaborator.trim() !== ""
    );

    // Construct the new note object
    const newNote = {
      ...note,
      collaborators,
      lastEditedAt: new Date(),
    };

    try {
      setStatusMessage(isEditing ? "Updating note..." : "Submitting...");
      if (isEditing) {
        // Update the existing note in MongoDB
        await axios.put(`http://localhost:3002/api/notes/${editNoteId}`, newNote);
        setIsEditing(false);
        setEditNoteId(null);
      } else {
        // Create a new note in MongoDB
        newNote.createdAt = new Date();
        await axios.post("http://localhost:3002/api/notes", newNote);
      }

      // Clear the form and refresh notes
      setNote({
        title: "",
        content: "",
        subject: "",
        createdBy: "",
        collaborators: [], // Clear the collaborators after submission
      });
      setStatusMessage(isEditing ? "Note updated successfully!" : "Note created successfully!");
      fetchNotes(); // Refresh notes after submission or update
    } catch (error) {
      console.error("Error submitting note:", error.message);
      setStatusMessage("Error submitting note. Please try again.");
    }
  };

  const handleEdit = (note) => {
    setNote({
      title: note.title,
      content: note.content,
      subject: note.subject,
      createdBy: note.createdBy,
      collaborators: note.collaborators,
    });
    setIsEditing(true);
    setEditNoteId(note._id); // Store the ID of the note being edited
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3002/api/notes/${id}`);
      fetchNotes(); // Refresh notes after deletion
    } catch (error) {
      console.error("Error deleting note:", error.message);
    }
  };

  const handleCollaboratorClick = (collaborator) => {
    alert(`Collaborator: ${collaborator}`);
    // Add any logic you want when clicking on a collaborator's name.
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-gradient-to-r from-green-400 to-blue-500 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-white text-center">
        {isEditing ? "Edit Note" : "Create a New Note"}
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-semibold mb-2 text-white">Title</label>
          <input
            type="text"
            name="title"
            value={note.title}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2 text-white">Content</label>
          <textarea
            name="content"
            value={note.content}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-lg"
            rows="4"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2 text-white">Subject</label>
          <input
            type="text"
            name="subject"
            value={note.subject}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2 text-white">Created By</label>
          <input
            type="text"
            name="createdBy"
            value={note.createdBy}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2 text-white">Collaborators</label>
          {note.collaborators.map((collaborator, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="text"
                value={collaborator}
                onChange={(e) => handleCollaboratorChange(index, e.target.value)}
                className="w-full border px-3 py-2 rounded-lg"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddCollaborator}
            className="bg-gray-200 text-gray-800 px-3 py-2 rounded-lg"
          >
            Add Collaborator
          </button>
        </div>
        {/* Display list of collaborators below input fields */}
        <div className="mb-4">
          <label className="block font-semibold mb-2 text-white">Collaborators List</label>
          <ul className="list-disc pl-5 text-white">
            {note.collaborators.map((collaborator, index) => (
              <li
                key={index}
                className="cursor-pointer hover:text-yellow-300"
                onClick={() => handleCollaboratorClick(collaborator)}
              >
                {collaborator}
              </li>
            ))}
          </ul>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
        >
          {isEditing ? "Update Note" : "Create Note"}
        </button>
      </form>
      {statusMessage && (
        <p className="mt-4 text-center text-gray-700">{statusMessage}</p>
      )}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4 text-white">Notes</h2>
        {notes.length > 0 ? (
          notes.map((note) => (
            <div key={note._id} className="border p-4 rounded-lg mb-4 bg-white">
              <h3 className="font-semibold text-lg">{note.title}</h3>
              <p>{note.content}</p>
              <p className="text-sm text-gray-500">Subject: {note.subject}</p>
              <p className="text-sm text-gray-500">Created By: {note.createdBy}</p>
              <p className="text-sm text-gray-500">
                Collaborators: {note.collaborators.join(", ")}
              </p>
              <div className="mt-2">
                <button
                  onClick={() => handleEdit(note)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(note._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No notes available.</p>
        )}
      </div>
    </div>
  );
};

export default NotesForm;

