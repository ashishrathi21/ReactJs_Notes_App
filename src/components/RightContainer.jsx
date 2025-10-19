import NotesList from "./NotesList";

const RightContainer = ({ task, deleteNote }) => {
  return (
    <div className="w-full md:w-9/12 bg-gray-100 rounded-xl shadow-inner p-4 flex flex-col h-full">
      <div className="flex justify-between items-center mb-4 px-2">
        <h3 className="text-2xl font-bold text-gray-700">My Notes</h3>
        <p className="text-gray-500 text-sm">Recently Viewed</p>
      </div>

      <NotesList task={task} deleteNote={deleteNote} />
    </div>
  );
};

export default RightContainer;
