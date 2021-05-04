import React, { useState, useEffect } from "react";
//Update component using useEffect instead of class component with componentDidMount
function HookCounterUE() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  );
}

export default HookCounterUE;
