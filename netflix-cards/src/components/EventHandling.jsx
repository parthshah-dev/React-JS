export const EventHandling = () => {
  const handleClick = (name, event) => {
    console.log(`Hello ${name}, Welcome!`);
    console.log(event);
  };
  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-700 hover: cursor-pointer text-white font-bold py-2 px-4 rounded my-8"
        onClick={(event) => handleClick("parth", event)}
      >
        Click Me
      </button>
    </>
  );
};
