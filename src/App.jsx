import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("Marco");

  return (
    <>
      <form>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <p>Il tuo nome è {firstName}</p>
      </form>
    </>
  );
}

export default App;
