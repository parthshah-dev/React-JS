// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 },
//   { name: "John", age: 45 },
// ];

import { useState } from "react";

export const DerivedState = () => {
  const [users, setUsers] = useState([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "John", age: 45 },
  ]);

  const userCount = users.length; //Derived State

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-4">Users List</h1>
      <ul>
        {users.map((curr, index) => {
          return (
            <li key={index}>
              {curr.name} - {curr.age} years old
            </li>
          );
        })}
      </ul>
      <li>Total Users: {userCount}</li>
    </div>
  );
};
