"use client";
import { useState } from "react";

function Counter({ users }) {
  console.log(users);
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>there are {users.length} users</p>
      <button onClick={() => setCounter((c) => c + 1)}>{counter}</button>
    </div>
  );
}
export default Counter;
