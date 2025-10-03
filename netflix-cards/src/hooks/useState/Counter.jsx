import { use, useState } from "react";
import "./hooks.css";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleOnChange = (e) => {
    setStep(Number(e.target.value));
  };

  const handleReset = () => {
    setCount(0);
    setStep(1);
  };

  return (
    <section className="container">
      <h2>useState Hook</h2>

      <p>Count: {count}</p>
      <div className="input-div">
        <p>Steps: </p>{" "}
        <input type="number" onChange={handleOnChange} value={step}></input>
      </div>

      <div className="button-div">
        <button onClick={() => setCount(count + step)} disabled={count >= 100}>
          Increment
        </button>
        <button onClick={() => setCount(count - step)} disabled={count <= 0}>
          Decrement
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </section>
  );
};
