import { createContext, useContext, useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { loadData, saveData } from 'service/API';

const MyContext = createContext();

export const useMyContext = () => useContext(MyContext);

const initialState = [
  { id: nanoid(), toDo: 'learn java' },
  { id: nanoid(), toDo: 'learn react' },
];

export const TasksProvider = ({ children }) => {
  const [taskArray, setTaskArray] = useState(() => loadData('toDosArray') ?? [...initialState]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    saveData('toDosArray', taskArray);
  }, [taskArray]);

  const addTask = taskObj => {
    setTaskArray(prevState => [...prevState, taskObj]);
  };

  const deleteTask = evt => {
    const filteredArr = taskArray.filter(el => el.id !== evt.target.dataset.id);
    setTaskArray(filteredArr);
  };

  const changeInputValue = evt => setInputValue(evt.target.value);

  const handleSubmit = evt => {
    evt.preventDefault();
    if (!evt.target.toDo.value.trim()) return alert('Enter something!');
    const newToDoObj = { id: nanoid(), toDo: evt.target.toDo.value.trim() };
    addTask(newToDoObj);
    setInputValue('');
  };

  return (
    <MyContext.Provider
      value={{ taskArray, addTask, inputValue, changeInputValue, handleSubmit, deleteTask }}
    >
      {children}
    </MyContext.Provider>
  );
};
