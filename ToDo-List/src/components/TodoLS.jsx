export const getLocalStorageTodoItems = () => {
  const todoItems = localStorage.getItem("react-todo");
  if (!todoItems) {
    return [];
  }
  return JSON.parse(todoItems);
};

export const setLocalStorageTodoItems = (task) => {
  localStorage.setItem("react-todo", JSON.stringify(task));
};
