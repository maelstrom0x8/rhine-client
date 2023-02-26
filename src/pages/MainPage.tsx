import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { AddTaskButton } from '../components/Button/IconButtons';
import ListContent from '../components/ListContent';
import { TaskModal } from '../components/Modal/TaskModal/TaskModal';
import { Navbar } from '../components/Navbar/Navbar';
import { TaskList } from '../components/TaskList/TaskList';
import { TaskPanel } from '../components/TaskPanel/TaskPanel';
import { TaskProvider } from '../context/TaskContext';

export const MainPage = () => {
  
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
          <TaskList />
          <ListContent className={'flex-1 mt-4'}/>
        </TaskPanel>
      </TaskProvider>
      <TaskModal open={taskModalOpen} onClose={() => {setTaskModalOpen(false)}}/>
    </div>
  );
};