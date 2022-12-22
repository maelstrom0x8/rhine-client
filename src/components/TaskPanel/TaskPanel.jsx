import { TaskProvider } from "../../context/tasks/Context";
import TaskList from "./TaskList";

export const TaskPanel = () => {
  return (
    <div className="bg-white mx-2 rounded-t-md flex-[3]">
      <TaskProvider>
        <TaskList />
      </TaskProvider>
    </div>
  );
};
