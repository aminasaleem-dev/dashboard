import React, { createContext, useState } from "react";

export const ContextAPI = createContext();

export const TaskProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const InputControll = (e) => {
    setInput(e.target.value);
  };

  const addList = () => {
    if (!input.trim()) return; // prevent empty tasks
    const unique = { id: Date.now(), text: input };
    setList([...list, unique]);
    setInput("");
  };

  const dellBtn = (id) => {
    const uniqueDell = list.filter((item) => item.id!==id)
    setList(uniqueDell)
  }
  const editBtn = (id, newText) => {
  const updatedList = list.map(item => {
    if (item.id === id) {
      return { ...item, text: newText };
    }
    return item;
  });
  setList(updatedList);
};

  return (
    <ContextAPI.Provider value={{ input, InputControll, list, addList ,dellBtn, editBtn}}>
      {children}
    </ContextAPI.Provider>
  );
};
