import { useId, useRef } from "react";
import "./index.css";

export const UseRef = () => {
  const username = useRef("");
  const email = useRef("");

  const id = useId();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value);
    console.log(email.current.value);
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleOnSubmit}>
        <h2>Simple Form</h2>
        <div className="form-group">
          <label htmlFor={id + "name"}>Name</label>
          <input
            type="text"
            id={id + "name"}
            placeholder="Enter your name"
            ref={username}
          />
        </div>

        <div className="form-group">
          <label htmlFor={id + "email"}>Email</label>
          <input
            type="email"
            id={id + "email"}
            placeholder="Enter your email"
            ref={email}
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};
