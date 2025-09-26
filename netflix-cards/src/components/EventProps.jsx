export const EventProps = () => {
  const handleButtonClick = () => {
    alert("Button Clicked!");
  };

  const handleMouseHover = () => {
    alert("Mouse Hovered!");
  };

  return (
    <>
      <Welcome
        onButtonClick={() => handleButtonClick()}
        onMouseHover={() => handleMouseHover()}
      />
    </>
  );
};

const Welcome = ({ onButtonClick, onMouseHover }) => {
  const greetUser = () => {
    alert("Hello User, Welcome!");
    onButtonClick();
  };
  return (
    <>
      <button
        onMouseOver={onMouseHover}
        className="border-[1px] mx-4 font-bold p-[5px] rounded"
      >
        Hover Me!
      </button>
      <button
        onClick={onButtonClick}
        className="border-[1px] mx-4 font-bold p-[5px] rounded"
      >
        Click Me!
      </button>
      <button
        onClick={greetUser}
        className="border-[1px] mx-4 font-bold p-[5px] rounded"
      >
        Say Hi!
      </button>
    </>
  );
};
