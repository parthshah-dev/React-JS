import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  console.log("Parent Component Rendered");

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h1>Count: {count}</h1>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded border-3 hover:bg-blue-700 hover:cursor-pointer"
      >
        Increment
      </button>
      <button
        onClick={() => setCount(count - 1)}
        className="bg-green-500 text-white px-4 py-2 rounded border-3 hover:bg-green-700 hover:cursor-pointer"
      >
        Decrement
      </button>
      <button
        onClick={() => setCount(0)}
        className="bg-red-500 text-white px-4 py-2 rounded border-3 hover:bg-red-700 hover:cursor-pointer"
      >
        Reset
      </button>
      <ChildComponent />
    </div>
  );
};

export const ChildComponent = () => {
  console.log("Child Component Rendered");

  return <h1>Child Component</h1>;
};
