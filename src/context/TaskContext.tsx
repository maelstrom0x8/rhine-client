import { createContext, useState } from 'react';
import { ITask } from 'shared/ITask';

type List = {
  id: number;
  name: string;
};

interface TaskContextValues {
  list: List[];
  tasks: ITask[];
  activeListId: number;
  setActiveListId: (id: number) => void;
  addList: (name: string) => void;
  addTask: (task: ITask) => void;
  getListTask: (listId: number) => ITask[];
}

const initialValues = {
  list: [],
  tasks: [],
  activeListId: 0,
  setActiveListId: (id: number) => {},
  addList: (name: string) => {},
  addTask: (task: ITask) => {},
  getListTask: (listId: number) => [],
};

const TaskContext = createContext<TaskContextValues>(initialValues);
const { Provider } = TaskContext;

interface TaskProviderProps {
  children: React.ReactNode;
}

const TaskProvider = ({ children }: TaskProviderProps) => {
  const [list, setList] = useState([{name: 'Default', id: 0}]);

  const [tasks, setTask] = useState([]);

  const [activeListId, setActiveListId] = useState(0);

  const addList = (name: string) => {};

  const addTask = (task: ITask) => {};

  const getListTask = (listId: number) => {
    return [];
  };

  return (
    <Provider
      value={{
        list,
        activeListId,
        tasks,
        setActiveListId,
        addList,
        addTask,
        getListTask,
      }}
    >
      {children}
    </Provider>
  );
};

export { TaskContext, TaskProvider };
