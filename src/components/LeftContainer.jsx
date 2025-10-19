import React from "react";
import NotesForm from "./NotesForm";

const LeftContainer = ({ addNote }) => {
  return (
    <div className="w-full md:w-3/12 bg-gray-100 shadow-inner rounded-xl flex flex-col items-start justify-start p-6 text-white">
      <h2 className="text-2xl font-bold mb-4 text-black">Add a Note</h2>
      <NotesForm addNote={addNote} />
    </div>
  );
};

export default LeftContainer;
