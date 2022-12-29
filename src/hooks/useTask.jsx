import { useContext } from "react";
import { TaskContext } from "~/context/tasks/Context";

export default function useTask() { return useContext(TaskContext); }
