import React from "react";
import { useState } from "react";

const NotesForm = ({addNote}) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const titleHandling = (e) => {
    e.preventDefault();
    if (title.trim() === "" && details.trim() === "") return;
    addNote(title, details);
    setTitle("");
    setDetails("");
  };
  return (
    <form onSubmit={titleHandling} className="w-full flex flex-col gap-4">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 text-black shadow-sm"
      />
      <textarea
        placeholder="Take a note..."
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        className="w-full p-3 min-h-32 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 text-black shadow-sm resize-none"
      />
      <button
        type="submit"
        className="bg-[#E8CBFB] w-full text-black font-semibold px-6 py-2 rounded-lg shadow-md transform transition duration-300 hover:scale-105 active:scale-95 self-end"
      >
        Add Note
      </button>
    </form>
  );
};

export default NotesForm;
