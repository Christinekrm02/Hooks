import React, { useState } from "react";

function HookCounterWithPrevState() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementCountByFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount(prevCount => prevCount + 1);
    }
  };
  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={setCount(prevCount => prevCount + 1)}>Add</button>
      <button onClick={setCount(prevCount => prevCount - 1)}>Delete</button>
      <button onClick={incrementCountByFive}>Add 5</button>
    </div>
  );
}

export default HookCounterWithPrevState;
