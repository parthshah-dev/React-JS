import { useReducer } from "react";

export const Counter = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { ...state, count: state.count + state.increment };

      case "DECREMENT":
        if (state.count === 0) return state;
        return { ...state, count: state.count - state.decrement };

      case "RESET":
        return { ...state, count: 0 };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    increment: 2,
    decrement: 2,
  });
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-dvh min-w-dvw gap-4">
        <h1 className="font-bold text-2xl">UseReducer Example</h1>
        <h2 className="text-lg">Count : {state.count}</h2>
        <button
          onClick={() => dispatch({ type: "INCREMENT" })}
          className="rounded-lg p-2 cursor-pointer bg-blue-500 text-white hover:bg-blue-700"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch({ type: "DECREMENT" })}
          className="rounded-lg p-2 cursor-pointer bg-blue-500 text-white hover:bg-blue-700"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch({ type: "RESET" })}
          className="rounded-lg p-2 cursor-pointer bg-blue-500 text-white hover:bg-blue-700"
        >
          Reset
        </button>
      </div>
    </>
  );
};
