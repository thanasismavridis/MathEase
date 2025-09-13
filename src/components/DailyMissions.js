import React, { useState, useEffect } from "react";

const defaultMissions = [
  "Κόψτε μαζί ένα φρούτο σε μισά.",
  "Μοιράστε τα παιχνίδια στη μέση.",
  "Βάλτε το τραπέζι με μισά ποτήρια γεμάτα."
];

export default function DailyMissions() {
  const [missions, setMissions] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("missions");
    if (saved) setMissions(JSON.parse(saved));
    else setMissions(defaultMissions.map(text => ({ text, done: false })));
  }, []);

  useEffect(() => {
    localStorage.setItem("missions", JSON.stringify(missions));
  }, [missions]);

  const toggleMission = (index) => {
    setMissions(missions.map((m, i) => i === index ? { ...m, done: !m.done } : m));
  };

  const reset = () => {
    setMissions(defaultMissions.map(text => ({ text, done: false })));
  };

  return (
    <div className="card">
      <h3>🎯 Μικρές Αποστολές Σπιτιού</h3>
      <p>Κάντε μαζί 1 μικρή δραστηριότητα την ημέρα. Σημείωσε ό,τι ολοκλήρωσες.</p>
      <ul className="missions">
        {missions.map((m, i) => (
          <li key={i}>
            <input type="checkbox" checked={m.done} onChange={() => toggleMission(i)} />
            <span>{m.text}</span>
          </li>
        ))}
      </ul>
      <button className="linklike" onClick={reset}>Επαναφορά λίστας</button>
    </div>
  );
}
