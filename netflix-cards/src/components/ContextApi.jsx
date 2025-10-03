import { createContext, useContext } from "react";

// Create a Context
const DataContext = createContext();

export const GrandParentComponent = () => {
  return (
    <DataContext.Provider value="React is awesome!">
      <section className="flex flex-col items-center justify-center min-h-screen ">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          I am a GrandParent Component
        </h1>
        <ParentComponent />
      </section>
    </DataContext.Provider>
  );
};

const ParentComponent = () => {
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        I am a Parent Component
      </h1>
      <ChildComponent />
    </>
  );
};

const ChildComponent = () => {
  const data = useContext(DataContext);
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        I am a Child Component
      </h1>
      <h1 className="text-[20px] font-bold text-gray-800 mb-4">{data}</h1>
    </>
  );
};
