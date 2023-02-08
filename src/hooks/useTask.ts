import { TaskContext } from "context/tasks/TaskProvider";
import { useContext } from "react";

export const useTask = () => useContext(TaskContext)
