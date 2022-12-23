import { useState } from "react";

export const ListEntryDialog = ({ className, isOpen, onClose }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = () => {
    // post new list
    onClose();
  };

  return (
    <div
      className={`${className}  ${
        !isOpen && "hidden"
      } bg-neutral-300 p-1 rounded-b-sm shadow-lg flex space-x-1 max-w-sm mx-auto`}
      onke
    >
      <input
        type="text"
        className="flex-[3] rounded-l-md pl-3"
        autoFocus
        required
        placeholder="Enter list title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button
        disabled={title.length < 1}
        className="p-1 bg-neutral-700 text-white disabled:bg-neutral-500 font-medium rounded-r-sm text-sm hover:bg-neutral-600"
        onClick={handleSubmit}
      >
        Done
      </button>
    </div>
  );
};
