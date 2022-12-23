import TaskPanel from "~/components/TaskPanel";
import Header from "~/components/Header";

import "./index.css";
import TaskList from "~/components/TaskPanel/TaskList";
import ListEntryDialog from "~/components/Dialog/ListEntryDialog";
import { useState } from "react";
import { useEffect } from "react";
import { TaskProvider } from "~/context/tasks/Context";

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

const App = () => {
  const [showListInput, setShowListInput] = useState(false);

  return (
    <div
      className="min-h-screen bg-neutral-300 text-black dark:bg-black dark:text-white 
    flex-col flex p-1 space-y-2 space-y-reverse"
    >
      <Header />
      <TaskProvider>
        <TaskPanel>
          <ListEntryDialog
            className="fixed top-[10em] right-[3em]"
            onClose={() => {
              setShowListInput(false);
            }}
            isOpen={showListInput}
          />
          <TaskList>
            <Button
              onClick={() => {
                setShowListInput(true);
              }}
              text={"New List"}
              icon={icon}
            />
          </TaskList>
        </TaskPanel>
      </TaskProvider>
    </div>
  );
};

export default App;
