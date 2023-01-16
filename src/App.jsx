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
import UserModal from "~/components/Modal/UserModal";
import { Route, Routes } from "react-router-dom";




const App = () => {
  const [showListModal, setShowListModal] = useState(false);
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false)

  const handleTaskClose = () => {
    setShowTaskModal(false);
  }

  const handleListModalClose = () => {
    setShowListModal(false)
  }

  const handleBlur = ev => {
    setShowUserModal(false)
    console.log("Lost Focus");
  }


  return (
    <div
      className="min-h-screen bg-neutral-300 text-black dark:bg-neutral-800 dark:text-neutral-300
    flex-col flex p-1 space-y-2 space-y-reverse transition-colors delay-500 duration-500 ease-in-out"
    >

      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/profile" />
        <Route path="/privacy-policy"/>
        <Route path="terms-of-service"/>
        <Route path="/oss-license"/>
        <Route path="/settings"/>
        <Route path="/register"/>
        <Route path="/login"/>
      </Routes>


      <div
        className="bg-blue-700 dark:bg-teal-600/95 transition-colors delay-500 duration-500 ease-in-out p-4 max-w-md mx-auto fixed bottom-[3em] items-center
          right-[3em] z-0 rounded-full w-[4em] h-[4em] hover:bg-blue-500 shadow-md hover:shadow-neutral-700"
        onClick={() => setShowTaskModal(true)}
      ><FontAwesomeIcon icon={faPencil} color="white" className="w-7 h-7 ml-[3px] mt-1" /></div>

      <Navbar openUserModal={() => {setShowUserModal(!showUserModal)}} />
      <UserModal isOpen={showUserModal} onBlur={handleBlur} className={"fixed top-0 bottom-0 left-0 right-0"} />
      <TaskProvider>

        <ListModal isOpen={showListModal} onClose={handleListModalClose} />
        <TaskModal isOpen={showTaskModal} onClose={handleTaskClose} />

        <TaskPanel>
          <TaskList>
            <button
              className="max-w-sm shrink-0 px-2 items-center bg-neutral-900 dark:bg-neutral-200/80 dark:text-black text-neutral-50 hover:border-neutral-600 hover:cursor-pointer inline-flex space-x-0 max-sm:text-sm mr-auto p-4"
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
