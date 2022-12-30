import { useState } from "react";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import Navbar from "~/components/Navbar";
import TaskPanel from "~/components/TaskPanel";
import TaskList from "~/components/TaskPanel/TaskList";
import TaskModal from "~/components/Modal/TaskModal";
import ListModal from "~/components/Modal/ListModal";
import { TaskProvider } from "~/context/tasks/Context";
import ListContent from "~/components/TaskPanel/ListContent";




const App = () => {
  const [showListModal, setShowListModal] = useState(false);
  const [showTaskModal, setShowTaskModal] = useState(false);

  const handleTaskClose = () => {
    setShowTaskModal(false);
  }

  const handleListModalClose = () => {
    setShowListModal(false)
  }

  return (
    <div
      className="min-h-screen bg-neutral-300 text-black dark:bg-black dark:text-white 
    flex-col flex p-1 space-y-2 space-y-reverse"
    >
      <div
        className="bg-blue-700 p-4 max-w-md mx-auto fixed bottom-[3em] items-center
          right-[3em] z-0 rounded-full w-[4em] h-[4em] hover:bg-blue-500 shadow-md hover:shadow-neutral-700"
        onClick={() => setShowTaskModal(true)}
      ><FontAwesomeIcon icon={faPencil} color="white" className="w-7 h-7 ml-[3px] mt-1" /></div>

      <Navbar />

      <TaskProvider>

        <ListModal isOpen={showListModal} onClose={handleListModalClose} />
        <TaskModal isOpen={showTaskModal} onClose={handleTaskClose} />

        <TaskPanel>
          <TaskList>
            <button
              className="max-w-sm shrink-0 px-2 items-center bg-neutral-900 text-neutral-50 hover:border-neutral-600 hover:cursor-pointer inline-flex space-x-0 max-sm:text-sm mr-auto p-4"
              onClick={() => setShowListModal(true)}
            >
              New List
            </button>
          </TaskList>
          <ListContent className={"flex-1 mt-4"}/>
        </TaskPanel>

      </TaskProvider>
    </div>
  );
};

export default App;
