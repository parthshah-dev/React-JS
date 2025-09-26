export const EventPropagation = () => {
  const handleGrandParentClick = (e) => {
    console.log("GrandParent Clicked");
    e.stopPropagation();
  };
  const handleParentClick = (e) => {
    console.log("Parent Clicked");
    e.stopPropagation();
  };
  const handleChildClick = (e) => {
    console.log("Child Clicked");
    e.stopPropagation();
  };

  return (
    <>
      <div
        className="border-4 bg-blue-400 p-4 flex align-center flex-col w-[400px]"
        onClick={(event) => handleGrandParentClick(event)}
      >
        <h1 className="items-start">GrandParent</h1>
        <div
          className="border-4 bg-green-400 p-4 flex align-center flex-col"
          onClick={(event) => handleParentClick(event)}
        >
          <h1 className="items-start">Parent</h1>
          <div
            className="border-4 bg-yellow-400 p-4 flex align-center flex-col"
            onClick={(event) => handleChildClick(event)}
          >
            <h1 className="items-start">Child</h1>
          </div>
        </div>
      </div>
    </>
  );
};
