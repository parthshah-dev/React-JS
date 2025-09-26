export const TodoForm = ({ inputVal, onFormSubmit, onFormChange }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onFormSubmit();
  };
  return (
    <>
      <section>
        <form onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              name="todo-text"
              placeholder="enter task name"
              autoComplete="off"
              value={inputVal}
              onChange={onFormChange}
              className="task-text"
            />
            <button type="submit" className="add-btn">
              Add Task
            </button>
          </div>
        </form>
      </section>
    </>
  );
};
