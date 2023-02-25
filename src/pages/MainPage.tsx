import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { AddTaskButton } from '../components/Button/IconButtons';
import { useState } from 'react';
import { CustomButton } from '../components/Button/CustomButton';
import ListContent from '../components/ListContent';
import { ListModal } from '../components/Modal/ListModal/ListModal';
import { TaskModal } from '../components/Modal/TaskModal/TaskModal';
import { Navbar } from '../components/Navbar/Navbar';
import { TaskList } from '../components/TaskList/TaskList';
import TaskPanel from '../components/TaskPanel';
import { TaskProvider } from '../context/TaskContext';

export const MainPage = () => {
  
  const [listModalOpen, setListModalOpen] = useState(false);
  const [taskModalOpen, setTaskModalOpen] = useState(false);

  return (
    <div
      className="min-h-screen bg-neutral-300 text-black dark:bg-neutral-800 dark:text-neutral-300
    flex-col flex p-1 space-y-2 space-y-reverse transition-colors delay-500 duration-500 ease-in-out"
    >
      <AddTaskButton icon={faPencil} onClick={() => {setTaskModalOpen(true)}} />
      <Navbar />

      <TaskProvider>
        <TaskPanel>
          <TaskList>
            <CustomButton text='New List' onClick={() => {setListModalOpen(true)}} className='max-sm:text-sm mr-auto p-4' />
            <ListModal open={listModalOpen} onClose={() => {setListModalOpen(false)}} />
          </TaskList>
          <ListContent className={'flex-1 mt-4'}/>
          <TaskModal open={taskModalOpen} onClose={() => {setTaskModalOpen(false)}}/>
        </TaskPanel>
      </TaskProvider>
    </div>
  );
};