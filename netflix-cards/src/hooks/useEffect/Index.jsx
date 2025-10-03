import { useState, useEffect } from "react";
import "./Index.css";

export const Index = () => {
  const [time, setTime] = useState("");
  useEffect(() => {
    setInterval(() => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString();
      setTime(formattedTime);
    }, 1000);
  }, []);

  return (
    <>
      <div className="container">
        <h1>React useEffect Example</h1>
        <p>Time: {time}</p>
      </div>
    </>
  );
};
