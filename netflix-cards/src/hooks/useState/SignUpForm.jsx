import { useState } from "react";
import "./SignUpForm.css";

export const SignUpForm = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div className="signup-container">
      <h2>Create an Account</h2>
      <form className="signup-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={user.username}
            placeholder="Enter username"
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            placeholder="Enter email"
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            placeholder="Enter password"
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" className="signup-btn" onClick={handleSubmit}>
          Sign Up
        </button>
      </form>
    </div>
  );
};
