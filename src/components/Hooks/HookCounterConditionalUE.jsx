import React, { useState, useEffect } from "react";
//Conditionally update component using useEffect instead of class component with componentDidMount
function HookCounterConditionalUE() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  //useEffect() takes two arguments
  useEffect(() => {
    console.log("useEffect updating document title");
    document.title = `You clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={event => setName(event.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  );
}

export default HookCounterConditionalUE;
