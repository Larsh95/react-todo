import { useState } from "react";

export const Todo = ({ text, todos, todo, setTodos }) => {
  //events
  const [isDeleted, setDeleted] = useState("false");
  const deleteHandler = () => {
    setDeleted(!isDeleted);
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button
        onClick={deleteHandler}
        className={`trash-btn ${deleteHandler.id ? "fall" : ""}`}
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};
