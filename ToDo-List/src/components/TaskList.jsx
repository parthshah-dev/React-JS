import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export const TaskList = ({ data, checked, onDelete, onHandleCheck }) => {
  const handleTodoDelete = (data) => {
    onDelete(data.id);
  };
  return (
    <>
      <li className={`task-item ${checked ? "checked-task" : ""}`}>
        {data.content}
        <button
          className="check-btn"
          onClick={() => onHandleCheck(data.content)}
        >
          <FaCheck />
        </button>
        <button className="delete-btn" onClick={() => handleTodoDelete(data)}>
          <MdDelete />
        </button>
      </li>
    </>
  );
};
