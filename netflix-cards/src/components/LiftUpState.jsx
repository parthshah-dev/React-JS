import { useState } from "react";

export const LiftUpState = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
      <DisplayComponent inputValue={inputValue} />
    </>
  );
};

const InputComponent = ({ inputValue, setInputValue }) => {
  return (
    <input
      name="inputComponent"
      value={inputValue}
      placeholder="enter name"
      onChange={(e) => setInputValue(e.target.value)}
    ></input>
  );
};

const DisplayComponent = ({ inputValue }) => {
  return <div>{inputValue}</div>;
};
