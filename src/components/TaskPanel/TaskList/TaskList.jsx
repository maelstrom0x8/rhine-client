import { useEffect } from "react";
import { useState } from "react";
import { useTask } from "../../../context/Hooks";

const icon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6 max-sm:w-4 max-sm:h-4"
  >
    <path
      fillRule="evenodd"
      d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
      clipRule="evenodd"
    />
  </svg>
);

const Button = ({ text, onClick, icon }) => {
  return (
    <div
      onClick={onClick}
      className="hover:cursor-pointer inline-flex space-x-0 max-sm:text-sm items-center"
    >
      {icon && icon}
      <p className="ml-0">{text}</p>
    </div>
  );
};

const TextInputPanel = ({ show }) => {
  
  return (
    <div className={` bg-zinc-700 rounded-sm w-[10px]`}>
      <input type="text" className="w-9" />
    </div>
  );
};

const Tab = ({ tabItems }) => {
  const [activeListID, setActiveListID] = useState();
  const [showAdd, setShowAdd] = useState(false);

  const handleElementClick = (key) => {
    setActiveListID(key);
  };

  const handleNewList = () => {
    setShowAdd(!showAdd);
    console.log(`Set show to ${showAdd}`);
  };

  return (
    <div>
      <div className="flex flex-row rounded-t-md shadow-lg">
        <ul
          className={`flex list-none space-x-2 p-3`}
          id="tabs-tab"
          role={"tablist"}
        >
          {tabItems.map((item, i) => (
            <li
            className="hover:cursor-pointer max-sm:text-sm p-2 hover:font-light"
            key={i}
            >
              <button
                className="focus:font-semibold"
                onClick={(e, key) => handleElementClick(item.id)}
              >
                {`${item.name} ${item.id}`}
              </button>
            </li>
          ))}
          <Button text={"New List"} icon={icon} onClick={handleNewList} />
        </ul>
      </div>
      <div>
        <TabContent listID={activeListID} />
      </div>
    </div>
  );
};

const TabContent = ({ listID }) => {
  const { getListTasks } = useTask();
  const [tasks, setTasks] = useState();

  useEffect(() => {
    setTasks(getListTasks(listID));
  }, [listID]);

  return (
    <div className="p-8">
      <ul>
        {tasks &&
          tasks.map((task, i) => (
            <li key={i} className="p-2 shadow-md mt-1">
              {task.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export const TaskList = () => {
  const { list } = useTask();

  return <div>{list && <Tab tabItems={list} />}</div>;
};
