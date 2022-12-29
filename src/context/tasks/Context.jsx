import axios from "axios";
import { createContext, useEffect, useState } from "react";

const API_URL_PATH = "/api/v1/rhine";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {

  const [list, setList] = useState([]);
  const [tasks, setTasks] = useState([]);

  const [activeListID, setActiveListID] = useState(1);

  const getListTasks = (listID) => {
    axios
      .get(`${API_URL_PATH}/task`, { params: { list_id: `${listID}` } })
      .then((res) => setTasks(res.data))
      .catch((err) => { });
    return tasks;
  };

  const addList = (title) => {
    axios
      .post(`${API_URL_PATH}/list/create`, null, { params: { name: `${title}` } })
      .then(res => { setList([...list, res.data]) })
      .catch((err) => {
        console.error(err);
      });
  };

  const addTask = (values) => {
    axios.post(`${API_URL_PATH}/task/create`, { ...values }, { params: { list_id: `${activeListID}` } })
  }

  const updateList = () => {
    axios
      .get(`${API_URL_PATH}/list`)
      .then((res) => setList(res.data))
      .catch((err) => { });
  };

  useEffect(() => {
    const [last] = [...list].reverse();
    if (last && last.id) {
      setActiveListID(last.id)
    }
  }, [list])

  useEffect(() => {
    updateList();
  }, []);

  return (
    <TaskContext.Provider value={{ list, getListTasks, addList, addTask, activeListID, setActiveListID }}>
      {children}
    </TaskContext.Provider>
  );
};
