import { useContext } from "react";
import { TaskContext } from "~/context/tasks/TaskProvider";

export default function useTask() { return useContext(TaskContext); }
