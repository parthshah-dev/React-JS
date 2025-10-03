import { useContext } from "react";
import { DataContext } from "./DataContext";

export const GrandChild = () => {
  const data = useContext(DataContext);
  return (
    <>
      <section className="flex flex-col items-center justify-center min-h-screen ">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          I am a Grand Child Component {data}
        </h1>
      </section>
    </>
  );
};
