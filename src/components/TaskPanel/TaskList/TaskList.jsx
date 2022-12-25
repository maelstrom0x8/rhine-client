import { useEffect, useRef, useState } from "react";
import { useTask } from "~/context/Hooks";

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

export const TaskList = ({ children }) => {
  const { list } = useTask();

  const [activeListID, setActiveListID] = useState(1);

  const handleElementClick = (key) => {
    setActiveListID(key);
  };

  return (
    <div>
      <div className="flex flex-row rounded-t-sm shadow-lg">
        <ul className={`list flex list-none space-x-2 p-1 overflow-x-auto `}>
          {list.map((item, i) => (
            <li
              className={`${
                activeListID === item.id ? "focus" : ""
              } hover:cursor-pointer max-sm:text-sm p-2 hover:border-b-4 group`}
              key={i}
            >
              <div
                className="group-focus:font-semibold"
                onClick={(e, key) => handleElementClick(item.id)}
              >
                {`${item.name}`}
              </div>
            </li>
          ))}
        </ul>
        {children}
      </div>
      <div>
        <TabContent listID={activeListID} />
      </div>
    </div>
  );
};
