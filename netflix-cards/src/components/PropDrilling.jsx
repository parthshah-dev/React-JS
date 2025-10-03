export const GrandParentComponent = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center min-h-screen ">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          I am a GrandParent Component
        </h1>
        <ParentComponent data="React is awesome!" />
      </section>
    </>
  );
};

const ParentComponent = (props) => {
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        I am a Parent Component
      </h1>
      <ChildComponent data={props.data} />
    </>
  );
};

const ChildComponent = ({ data }) => {
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        I am a Child Component
      </h1>
      <h1 className="text-[20px] font-bold text-gray-800 mb-4">{data}</h1>
    </>
  );
};

// Prop Drilling - when we have to pass data from one component to another component through multiple components
// Solution - Context API - to avoid prop drilling
