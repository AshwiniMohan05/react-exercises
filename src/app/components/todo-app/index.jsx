"use client";

import React, { useEffect, useState } from "react";
import styles from './todo.module.css';

const TodoApp = () => {
  const [input, setInput] = useState("");
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("todoItems"))
    setTodoItems(storedItems)
  },[])

  useEffect(() => {
    if(todoItems.length > 0){
        localStorage.setItem('todoItems', JSON.stringify(todoItems))
    }
  }, [todoItems])
  function handleSubmit(event) {
    event.preventDefault();
    if (input.trim() === "") return; 
    setTodoItems([...todoItems, { text: input, checked: false }]); 
    setInput("");
  }

  function handleDelete(index) {
    const updatedTodoItems = todoItems.filter((_, item) => item !== index);
    setTodoItems(updatedTodoItems);
  }

  function handleCheckboxChange(index) {
    const updatedTodoItems = todoItems.map((item, i) =>
      i === index ? { ...item, checked : !item.checked } : item
    );
    setTodoItems(updatedTodoItems);
  }
  console.log(todoItems)
  return (
    <div className={styles.todoWrapper}>
      <h1>Todo List App</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Add a new Todo"
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todoItems.map((item, index) => (
          <li
            key={item.text + index} // Use a combination of item text and index for a unique key
            style={{
              textDecoration: item.checked ? "line-through" : "none",
            }}
            className={styles.listItem}
          >
            <label htmlFor={`todoCheck-${index}`}></label>
            <input
              type="checkbox"
              id={`todoCheck-${index}`}
              checked={item.checked}
              onChange={() => handleCheckboxChange(index)}
            />
            {item.text}
            <span className={styles.deleteBtn}>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;