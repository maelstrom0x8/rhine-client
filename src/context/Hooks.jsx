import { useContext } from "react";
import { TaskContext } from "./tasks/Context";

export const useTask = () => useContext(TaskContext)