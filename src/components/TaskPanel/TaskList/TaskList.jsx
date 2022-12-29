import { useEffect, useRef, useState } from "react";
import { useTask } from "~/context/Hooks";

const TabContent = ({ listID }) => {
  const { getListTasks } = useTask();
  const [tasks, setTasks] = useState();

  useEffect(() => {
    setTasks(getListTasks(listID));
  }, [listID]);

  return (
    <div className="">
      <ul>
        {tasks &&
          tasks.map((task) => (
            <li key={task.id} className="p-2 shadow-md mt-1">
              {task.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export const TaskList = ({ children }) => {
  const { list, activeListID, setActiveListID } = useTask();

  const handleElementClick = (key) => {
    setActiveListID(key);
  };

  const listRef = useRef();

  useEffect(() => {
    listRef.current.scrollBy(listRef.current.scrollWidth, 0);
  }, []);

  return (
    <div>
      <div className="flex flex-row rounded-t-sm shadow-lg">
        <ul
          ref={listRef}
          className={`list flex list-none space-x-2 p-1 overflow-x-auto scroll-smooth snap-x`}>
          {list.sort((a, b) => a.id - b.id).map((item, i) => (
            <li
              className={`${activeListID === item.id ? "focus" : ""
                } hover:cursor-pointer min-w-fit max-sm:text-sm p-2 hover:border-b-4 group snap-start`}
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
