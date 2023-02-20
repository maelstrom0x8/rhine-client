import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TaskProvider } from "../../context/TaskContext";
import Navbar from "../../components/Navbar";
import { useAuth } from "../../hooks/useAuth";

export const MainPage = () => {

  const {token, isAuthenticated } = useAuth()

  return (
    <div
      className="min-h-screen bg-neutral-300 text-black dark:bg-neutral-800 dark:text-neutral-300
    flex-col flex p-1 space-y-2 space-y-reverse transition-colors delay-500 duration-500 ease-in-out"
    >
      <div
        className="bg-blue-700 dark:bg-teal-600/95 transition-colors delay-500 duration-500 ease-in-out p-4 max-w-md mx-auto fixed bottom-[3em] items-center
          right-[3em] z-0 rounded-full w-[4em] h-[4em] hover:bg-blue-500 shadow-md hover:shadow-neutral-700"
      ><FontAwesomeIcon icon={faPencil} color="white" className="w-7 h-7 ml-[3px] mt-1" /></div>

        <Navbar/>
        

        <TaskProvider>
              <p>{token}</p>
              <p>{`${isAuthenticated()}`}</p>
        </TaskProvider>


    </div>
  );
};

/* 
    <div
        className="min-h-screen bg-neutral-300 text-black dark:bg-neutral-800 dark:text-neutral-300
    flex-col flex p-1 space-y-2 space-y-reverse transition-colors delay-500 duration-500 ease-in-out"
      >
        <div
          className="bg-blue-700 dark:bg-teal-600/95 transition-colors delay-500 duration-500 ease-in-out p-4 max-w-md mx-auto fixed bottom-[3em] items-center
          right-[3em] z-0 rounded-full w-[4em] h-[4em] hover:bg-blue-500 shadow-md hover:shadow-neutral-700"
          onClick={() => setShowTaskModal(true)}
        ><FontAwesomeIcon icon={faPencil} color="white" className="w-7 h-7 ml-[3px] mt-1" /></div>

        <Navbar openUserModal={() => { setShowUserModal(!showUserModal) }} />
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
            <ListContent className={"flex-1 mt-4"} />
          </TaskPanel>

        </TaskProvider>
      </div>
*/
