import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { useKey } from "~/hooks/useKey";
import useTask from "~/hooks/useTask";


export const TaskModal = ({ className, isOpen, onClose = () => { } }) => {
  const { addTask } = useTask();
  const [values, setValues] = useState({
    name: "",
    description: "",
    schedule: "",
  });

  const [showDetails, setShowDetails] = useState(false);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClose = () => {
    setShowDetails(false);
    setValues({
      name: "",
      description: "",
      schedule: "",
    })
    onClose();
  }
  
  const handleSave = () => {
    addTask(values);
    handleClose();
  }

  const handleKeyDown = (ev) => {
    switch (ev.key) {
      case "Enter":
        handleSave();
        break;
      default:
        break;
    }
  }


  useKey("Escape", handleClose);

  return (
    <div className={`${!isOpen && "hidden"} max-sm:fixed w-full top-0 bottom-0 left-0 bg-neutral-600/50 right-0`}
      onKeyDown={handleKeyDown}
    >
      <div
        className={`${className} py-4 pb-3 flex flex-col shadow-lg rounded-md absolute bottom-16 w-[90%] mx-6 px-2 bg-white dark:bg-neutral-700`}
      >
        <input
          required
          type="text"
          onChange={handleChange("name")}
          placeholder="New task"
          className="mb-0 font-semibold dark:bg-neutral-700"
          autoFocus
          spellCheck={false}
          title=""
        />
        <input
          type="text"
          onChange={handleChange("description")}
          placeholder="Add details"
          className={`${!showDetails && "hidden"} text-sm dark:bg-neutral-700 mt-1`}
          spellCheck={false}
          title=""
        />
        {/* display datetime selection */}
        <div></div>
        <div className="flex flex-row mt-2 ml-2">

          <FontAwesomeIcon icon={faBarsStaggered} className="w-6 h-6 hover:cursor-pointer mr-1"
            onClick={() => setShowDetails(true)}
          />

          <FontAwesomeIcon icon={faCalendarCheck} className="hover:cursor-pointer ml-2 w-6 h-6"/>


          <div className="ml-auto space-x-4 pr-2">
            <button className="text-blue-400 font-semibold disabled:cursor-not-allowed text-sm"
              onClick={handleClose}
            >Cancel</button>

            <button className="text-blue-400 font-semibold disabled:text-neutral-500 disabled:cursor-not-allowed text-sm"
              disabled={values.name.length < 1}
              onClick={handleSave}
            >Save</button>
          </div>
        </div>

      </div>

    </div>);
};
