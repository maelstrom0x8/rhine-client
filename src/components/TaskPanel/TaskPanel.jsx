import { TaskProvider } from "../../context/tasks/Context";
import TaskList from "./TaskList";

export const TaskPanel = ({className, children}) => {
  return (
    <div className={`${className} bg-white mx-2 rounded-t-md flex-[3]`}>
      <TaskProvider>
        {children}
      </TaskProvider>
    </div>
  );
};
