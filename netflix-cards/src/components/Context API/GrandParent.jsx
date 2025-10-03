import { Parent } from "./Parent";
import { DataContext } from "./DataContext";

export const GrandParent = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        I am a GrandParent Component
      </h1>
    </section>
  );
};
