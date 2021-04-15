import React, { useState } from "react";

function HookCounterWithObj() {
  const [name, setName] = useState({ firstName: " ", lastName: "" });
  return (
    <div>
      <form>
        <input
          type="text"
          value={name.firstName}
          placeholder="Firstname"
          onChange={e => setName({ ...name, firstName: e.target.value })}
        />

        <input
          type="text"
          value={name.lastName}
          placeholder="Lastname"
          onChange={e => setName({ ...name, lastName: e.target.value })}
        />

        <h2>Firstname: {name.firstName}</h2>
        <h2>Lastname: {name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
      </form>
    </div>
  );
}

export default HookCounterWithObj;
