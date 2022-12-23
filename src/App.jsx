import TaskPanel from "~/components/TaskPanel";
import Header from "~/components/Header";

import "./index.css";
import TaskList from "~/components/TaskPanel/TaskList";
import ListEntryDialog from "~/components/Dialog/ListEntryDialog";
import { useState } from "react";
import { useEffect } from "react";
import { TaskProvider } from "~/context/tasks/Context";

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
            <button
              className="max-w-sm mx-auto shrink-0 px-2 items-center bg-neutral-900 text-neutral-50 hover:border-neutral-600 hover:cursor-pointer inline-flex space-x-0 max-sm:text-sm border-neutral-900 border-[3px] max-sm:rounded-tr-md"
              onClick={() => setShowListInput(true)}
            >
              New List
            </button>
          </TaskList>
        </TaskPanel>
      </TaskProvider>
    </div>
  );
};

export default App;
