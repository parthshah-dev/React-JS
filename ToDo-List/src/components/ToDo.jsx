import { TodoForm } from "./TodoForm";
import { TaskList } from "./TaskList";

import { useState } from "react";
import { TodoDate } from "./TodoDate";
import "./ToDo.css";

import { getLocalStorageTodoItems, setLocalStorageTodoItems } from "./TodoLS";

export const ToDo = () => {
  const [inputVal, setInputVal] = useState({});
  const [task, setTask] = useState(() => getLocalStorageTodoItems());

  const handleFormChange = (e) => {
    setInputVal({ content: e.target.value });
  };

  const handleFormSubmit = () => {
    const content = inputVal.content.trim();
    if (content === "") return;

    const isPresent = task.find((currEle) => currEle.content === content);
    if (isPresent) {
      setInputVal({ content: "" });
      return;
    }

    const newTask = {
      id: Date.now(), // unique ID
      content,
      checked: false,
    };

    setTask((prev) => [...prev, newTask]);
    setInputVal({ content: "" });
  };

  const handleClearAll = () => {
    setTask([]);
  };

  const handleTodoDelete = (id) => {
    setTask(task.filter((currEle) => currEle.id !== id));
  };

  const handleFormCheck = (content) => {
    const updatedTask = task.map((currEle) => {
      if (currEle.content === content) {
        return { ...currEle, checked: !currEle.checked };
      }
      return currEle;
    });
    setTask(updatedTask);
  };

  setLocalStorageTodoItems();

  return (
    <section className="todo">
      <header>
        <h1>ToDo List</h1>
      </header>

      <TodoDate />

      <TodoForm
        inputVal={inputVal.content}
        onFormSubmit={handleFormSubmit}
        onFormChange={handleFormChange}
      />

      <div className="all-tasks">
        <ul>
          {task.map((currEle) => (
            <TaskList
              key={currEle.id}
              data={currEle}
              checked={currEle.checked}
              onDelete={handleTodoDelete}
              onHandleCheck={handleFormCheck}
            />
          ))}
        </ul>
      </div>

      <div>
        <button
          type="button"
          className="clear-all-btn"
          onClick={handleClearAll}
        >
          Clear All
        </button>
      </div>
    </section>
  );
};
