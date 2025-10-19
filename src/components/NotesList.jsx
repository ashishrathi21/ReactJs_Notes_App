import React from "react";

const NotesList = ({ task, deleteNote }) => {
  return (
    <div className="flex gap-6 flex-wrap overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 flex-1">
      {task.length === 0 ? (
        <p className="text-gray-500 px-3">No notes yet...</p>
      ) : (
        task.map((elem, idx) => (
          <div
            key={idx}
            className="h-52 w-full sm:w-64 bg-[#E8CBFB] rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer flex flex-col justify-between p-5"
          >
            <h3 className="text-lg font-semibold text-gray-800 break-words">
              {elem.title}
            </h3>
            <p className="text-sm text-gray-600 leading-snug break-words mt-2 flex-1">
              {elem.details}
            </p>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => deleteNote(idx)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-md text-sm transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default NotesList;
