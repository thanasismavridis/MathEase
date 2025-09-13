import React, { useState } from "react";

const scripts = {
  "6-7": [
    "Κόβουμε την πίτσα στη μέση και τρώμε το 1 από τα 2 κομμάτια.",
    "Έχουμε 2 μισά μήλα, τα βάζουμε μαζί και γίνονται 1 ολόκληρο."
  ],
  "8-9": [
    "Αν έχουμε 4 σοκολατάκια και μοιράσουμε τα 2, έχουμε μισή ποσότητα.",
    "Το 3/4 σημαίνει ότι παίρνουμε 3 κομμάτια από 4 ίσα."
  ],
  "10+": [
    "Το 2/5 σημαίνει ότι παίρνεις 2 μέρη από 5 ίσα μέρη.",
    "Αν βάψουμε 3 στα 6 κουτάκια, έχουμε 3/6 = 1/2."
  ]
};

export default function MiniScripts() {
  const [age, setAge] = useState("6-7");
  const [script, setScript] = useState("");

  const newScript = () => {
    const arr = scripts[age];
    setScript(arr[Math.floor(Math.random() * arr.length)]);
  };

  return (
    <div className="card">
      <h3>🗣️ Τι να πεις στο παιδί — Mini Scripts</h3>
      <p>Έτοιμες φράσεις για να εξηγήσεις με αντικείμενα του σπιτιού.</p>
      <div className="scripts">
        <select value={age} onChange={e => setAge(e.target.value)}>
          <option value="6-7">Ηλικία 6–7</option>
          <option value="8-9">Ηλικία 8–9</option>
          <option value="10+">Ηλικία 10+</option>
        </select>
        <button onClick={newScript}>Δείξε ιδέα</button>
        <div className="script-box">{script}</div>
      </div>
    </div>
  );
}
