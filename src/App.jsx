import { useState } from "react";
import LeftContainer from "./components/LeftContainer";
import RightContainer from "./components/RightContainer";

const App = () => {

  const [task, setTask] = useState([]);

   const addNote = (title, details) => {
    const copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask);
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <div className="h-screen w-screen bg-[#44444E] flex items-center justify-center">
      <div className="h-[97%] w-[95%] flex flex-col md:flex-row rounded-2xl shadow-2xl overflow-hidden bg-white p-6 gap-6">
      
        <LeftContainer addNote={addNote}/>
        <RightContainer task={task} deleteNote={deleteNote}/>
      
      </div>
    </div>
  );
};

export default App;
