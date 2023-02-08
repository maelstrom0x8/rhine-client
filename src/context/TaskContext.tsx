import { createContext, useState } from 'react';
import { ITask } from 'shared/ITask';

interface TaskContextValues {
  list: string[];
  activeListId: number;
  setActiveListId: (id: number) => void;
  addList: (name: string) => void;
  addTask: (task: ITask) => void;
}

const initialValues = {
  list: [],
  activeListId: 0,
  setActiveListId: (id: number) => {},
  addList: (name: string) => {},
  addTask: (task: ITask) => {},
};

const TaskContext = createContext<TaskContextValues>(initialValues);
const { Provider } = TaskContext;

interface TaskProviderProps {
  children: React.ReactNode;
}

const TaskProvider = ({ children }: TaskProviderProps) => {
  const [list, setList] = useState([]);

  const [activeListId, setActiveListId] = useState(0);

  const addList = (name: string) => {};

  const addTask = (task: ITask) => {};

  return (
    <Provider value={{ list, activeListId, setActiveListId, addList, addTask }}>
      {children}
    </Provider>
  );
};

export { TaskContext, TaskProvider };
