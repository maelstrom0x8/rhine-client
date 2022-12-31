import { useTask, useKey } from "~/context/Hooks";
import { useState } from "react";



export function ListModal({ className, isOpen, onClose = () => { } }) {

  const [title, setTitle] = useState("");

  const { addList} = useTask();

  const handleSubmit = () => {
    if (title) {
      addList(title);
      setTitle("");
      onClose();
    }
  };

  const closeModal = () => {
    setTitle("");
    onClose();
  }

  const handleKeyDown = (ev) => {
    switch (ev.key) {
      case "Enter":
        handleSubmit();
        break;
      default:
        break;
    }
  }

  const handleInputChange = (ev) => {
    const { value } = ev.target;
    setTitle(value)
  }

  useKey("Escape", closeModal)


  return (
    <div className={` ${className} ${!isOpen && "hidden"} fixed bg-neutral-500/25 bottom-0 top-0 w-full`}>
      <div className="p-6 bg-white dark:bg-neutral-700 max-sm:w-[90%] absolute bottom-[3.5em] left-[1.2em] rounded-md flex flex-col shadow-lg space-y-2">
        <input type="text"
          className="font-semibold dark:bg-neutral-700"
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Create new list"
          autoFocus
        />
        <div className="flex space-x-2">

          <button className="hover:cursor-pointer disabled:text-neutral-400 disabled:cursor-auto font-semibold ml-auto text-blue-500 focus:outline-blue-400 px-1"
            onClick={handleSubmit}
            disabled={title.length < 1}
          >Save</button>
        </div>
      </div>
    </div>
  );
}