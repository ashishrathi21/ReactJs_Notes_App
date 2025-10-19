import { useState } from "react";
import LeftContainer from "./components/LeftContainer";
import RightContainer from "./components/RightContainer";
import { FiEdit } from "react-icons/fi";

const App = () => {
  const [task, setTask] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const addNote = (title, details) => {
    const copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask);
    setShowForm(false);
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <div className="h-screen w-screen bg-[#44444E] flex items-center justify-center relative">
      <div className="hidden md:flex h-[97%] w-[95%] flex-row rounded-2xl shadow-2xl overflow-hidden bg-white p-6 gap-6">
        <LeftContainer addNote={addNote} />
        <RightContainer task={task} deleteNote={deleteNote} />
      </div>
      <div className="md:hidden h-full w-full bg-white relative">
        {showForm ? (
          <div className="p-4">
            <LeftContainer addNote={addNote} />
          </div>
        ) : (
          <RightContainer task={task} deleteNote={deleteNote} />
        )}
        
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
