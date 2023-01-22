import axios from "axios";
import { createContext, useEffect, useState } from "react";

const API_URL_PATH = "/api/v1/rhine";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {

  const [list, setList] = useState([]);
  const [tasks, setTasks] = useState([]);

  const [activeListID, setActiveListID] = useState(0);

  const getListTasks = () => {
    if (activeListID > 0) {
      axios
        .get(`${API_URL_PATH}/task`, { params: { list_id: `${activeListID}` } })
        .then((res) => {
          setTasks([...res.data]);
        })
        .catch((err) => { });
    }
  };

  useEffect(() => { getListTasks() }, [activeListID])

  const addList = (title) => {
    axios
      .post(`${API_URL_PATH}/list/create`, null, { params: { name: `${title}` } })
      .then(res => { setList([...list, res.data]) })
      .catch((err) => {
        console.error(err);
      });
  };

  const addTask = (values) => {
    if (activeListID > 0) {
      axios.post(`${API_URL_PATH}/task/create`, { ...values }, { params: { list_id: `${activeListID}` } })
        .then(res => { setTasks([...tasks, res.data]) })
        .catch(err => { })
    }
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
    <TaskContext.Provider value={{ list, tasks, getListTasks, addList, addTask, activeListID, setActiveListID }}>
      {children}
    </TaskContext.Provider>
  );
};
