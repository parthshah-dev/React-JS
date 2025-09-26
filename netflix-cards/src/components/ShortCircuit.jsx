import { useState } from "react";
import "./ShortCircuit.css";

export const ShortCircuit = () => {
  const [user, setUser] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  return (
    <section className="container">
      {isLogin ? <p>Welcome back!</p> : <p>Not logged in!</p>}
      <p>{user ? `Hello, ${user}` : "No user found"}</p>

      <div className="button-div">
        <button onClick={() => setIsLogin(!isLogin)}>Toggle Login</button>
        <button onClick={() => setUser("Parth Shah")}>Set User</button>
        <button
          onClick={() => {
            setUser("");
            setIsLogin(false);
          }}
        >
          Clear User
        </button>
      </div>
    </section>
  );
};
