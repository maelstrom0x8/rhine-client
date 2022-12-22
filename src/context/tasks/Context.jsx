import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const BASE_URL_PATH = "/api/v1/rhine";


export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const [tasks, setTasks] = useState([]);

  const getListTasks = (listID = 1) => {
    axios
      .get(`${BASE_URL_PATH}/task`, { params: { list_id: `${listID}`}})
      .then((res) => setTasks(res.data))
      .catch(err => {})
      return tasks;
  };

  useEffect(() => {
    axios.get(`${BASE_URL_PATH}/list`).then((res) => setList(res.data))
    .catch(err => {})
  });

  return (
    <TaskContext.Provider value={{ list, getListTasks }}>{children}</TaskContext.Provider>
  );
};
