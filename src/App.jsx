import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("Carlo");
  const [names, setNames] = useState([]);

  const addName = (e) => {
    e.preventDefault();
    if (firstName !== "") {
      setNames([...names, firstName]); // Aggiunge il nome alla lista
      setFirstName(""); // Resetta l'input
    }
  };

  return (
    <>
      <form onSubmit={addName}>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Inserisci un nome"
        />
        <button type="submit">Aggiungi Nome</button>
      </form>
      <p>Il tuo nome è {firstName}</p>

      {/* Lista dei nomi */}
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
