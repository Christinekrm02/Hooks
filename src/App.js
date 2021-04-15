import React from "react";
// eslint-disable-next-line no-unused-vars
import ClassCounter from "./components/ClassComponents/ClassCounter.jsx";
// eslint-disable-next-line no-unused-vars
import HookCounter from "./components/Hooks/HookCounter.jsx";
import HookCounterWithObj from "./components/Hooks/HookCounterWithObj.jsx";
//import HookCounterWithPrevState from "./components/Hooks/HookCounterWithPrevState.jsx";

function App() {
  return (
    <div className="App">
      <HookCounterWithObj />
    </div>
  );
}

export default App;
