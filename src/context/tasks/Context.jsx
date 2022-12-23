import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const API_URL_PATH = "/api/v1/rhine";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const [tasks, setTasks] = useState([]);

  const getListTasks = (listID = 1) => {
    axios
      .get(`${API_URL_PATH}/task`, { params: { list_id: `${listID}` } })
      .then((res) => setTasks(res.data))
      .catch((err) => {});
    return tasks;
  };

  const addList = (title) => {
    axios
      .post(`${API_URL_PATH}/list/create`, null, { params: { name: `${title}` } })
      .catch((err) => {
        console.error(err);
      });
    updateList();
  };

  const updateList = () => {
    axios
      .get(`${API_URL_PATH}/list`)
      .then((res) => setList(res.data))
      .catch((err) => {});
  };

  useEffect(() => {
    updateList();
  });

  return (
    <TaskContext.Provider value={{ list, getListTasks, addList }}>
      {children}
    </TaskContext.Provider>
  );
};
