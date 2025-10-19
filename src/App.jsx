import { useState, useEffect } from "react";
import LeftContainer from "./components/LeftContainer";
import RightContainer from "./components/RightContainer";
import { FiEdit } from "react-icons/fi";

const App = () => {
  // Load initial notes from localStorage
  const [task, setTask] = useState(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });

  const [showForm, setShowForm] = useState(false);

  // Save to localStorage whenever task changes
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(task));
  }, [task]);

  const addNote = (title, details) => {
    setTask(prev => [...prev, { title, details }]);
    setShowForm(false);
  };

  const deleteNote = (idx) => {
    setTask(prev => prev.filter((_, i) => i !== idx));
  };

  return (
    <div className="h-screen w-screen bg-[#44444E] flex items-center justify-center relative">
      {/* Desktop/Tablet Layout */}
      <div className="hidden md:flex h-[97%] w-[95%] flex-row rounded-2xl shadow-2xl overflow-hidden bg-white p-6 gap-6">
        <LeftContainer addNote={addNote} />
        <RightContainer task={task} deleteNote={deleteNote} />
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden h-full w-full bg-white relative">
        {showForm ? (
          <div className="p-4">
            <LeftContainer addNote={addNote} />
          </div>
        ) : (
          <RightContainer task={task} deleteNote={deleteNote} />
        )}

        {/* Floating Pencil Button */}
        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="fixed bottom-6 right-6 bg-purple-500 text-white p-4 rounded-full shadow-lg hover:bg-purple-600 transition"
          >
            <FiEdit size={24} />
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
