import React from "react";
// eslint-disable-next-line no-unused-vars
import ClassCounter from "./components/ClassComponents/ClassCounter.jsx";
// eslint-disable-next-line no-unused-vars
import HookCounter from "./components/Hooks/HookCounter.jsx";
// eslint-disable-next-line no-unused-vars
import HookCounterWithObj from "./components/Hooks/HookCounterWithObj.jsx";
//import HookCounterWithPrevState from "./components/Hooks/HookCounterWithPrevState.jsx";
// eslint-disable-next-line no-unused-vars
import HookCounterWithArr from "./components/Hooks/HookCounterWithArr";
// eslint-disable-next-line no-unused-vars
import ClassCounterUE from "./components/ClassComponents/ClassCounterUE";
import ClassCounterConditionalUE from "./components/ClassCounterConditionalUE";
//import HookCounterUE from "./components/Hooks/HookCounterUE";

function App() {
  return (
    <div className="App">
      <ClassCounterConditionalUE />
    </div>
  );
}

export default App;
