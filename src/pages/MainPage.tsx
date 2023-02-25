import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TaskPanel from '../components/TaskPanel';
import { Navbar } from '../components/Navbar/Navbar';
import { TaskProvider } from '../context/TaskContext';
import { TaskList } from '../components/TaskList/TaskList';
import { CustomButton } from '../components/Button/CustomButton';
import ListContent from '../components/ListContent';
import { ListModal } from '../components/Modal/ListModal/ListModal';
import { useState } from 'react';

export const MainPage = () => {
  
  const [listModalOpen, setListModalOpen] = useState(false);

  return (
    <div
      className="min-h-screen bg-neutral-300 text-black dark:bg-neutral-800 dark:text-neutral-300
    flex-col flex p-1 space-y-2 space-y-reverse transition-colors delay-500 duration-500 ease-in-out"
    >
      <div
        className="bg-blue-700 dark:bg-teal-600/95 transition-colors delay-500 duration-500 ease-in-out p-4 max-w-md mx-auto fixed bottom-[3em] items-center
          right-[3em] z-0 rounded-full w-[4em] h-[4em] hover:bg-blue-500 shadow-md hover:shadow-neutral-700"
      >
        <FontAwesomeIcon
          icon={faPencil}
          color="white"
          className="w-7 h-7 ml-[3px] mt-1"
        />
      </div>
      <Navbar />

      <TaskProvider>
        <TaskPanel>
          <TaskList>
            <CustomButton text='New List' onClick={() => {setListModalOpen(true)}} />
            <ListModal open={listModalOpen} onClose={() => {setListModalOpen(false)}} />
          </TaskList>
          <ListContent className={'flex-1 mt-4'}/>
        </TaskPanel>
      </TaskProvider>
    </div>
  );
};