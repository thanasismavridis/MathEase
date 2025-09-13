import React, { useState, useEffect } from "react";

// const defaultMissions = [
//   "Δείξτε 1/2 με φρούτο (μήλο/μπανάνα).",
//   "Παίξτε με 4 κομμάτια σοκολάτας: πάρτε τα 3 (3/4).",
//   "Ζωγραφίστε 8 κουτάκια και σκιάστε τα 2 (2/8). Συζητήστε ότι 2/8=1/4.",
//   "Συγκρίνετε 2/3 με 3/5 στη μπάρα. Ποιο είναι μεγαλύτερο; Γιατί;",
//   "Προσθέστε 1/4 + 1/4 στον κύκλο και βρείτε 1/2.",
//   "Φτιάξε μια σαλάτα: μοίρασε το αγγούρι στα 1/4.",
//   "Μοίρασε 12 σταφύλια σε 3 άτομα: «Κάθε άτομο παίρνει 4/12 = 1/3.»",
//   "Ζωγράφισε κύκλο 8 κομματιών και χρωμάτισε 3/8.",
//   "Σύγκρινε 5/10 και 1/2 με τη μπάρα σοκολάτας.",
//   "Γέμισε ποτήρι στο 1/3 και μετά στο 2/3. Ποιο είναι περισσότερο;"
// ];
const defaultMissions = [
  {id:1, text:"Δείξτε 1/2 με φρούτο (μήλο/μπανάνα).", done:false},
  {id:2, text:"Παίξτε με 4 κομμάτια σοκολάτας: πάρτε τα 3 (3/4).", done:false},
  {id:3, text:"Ζωγραφίστε 8 κουτάκια και σκιάστε τα 2 (2/8). Συζητήστε ότι 2/8=1/4.", done:false},
  {id:4, text:"Συγκρίνετε 2/3 με 3/5 στη μπάρα. Ποιο είναι μεγαλύτερο; Γιατί;", done:false},
  {id:5, text:"Προσθέστε 1/4 + 1/4 στον κύκλο και βρείτε 1/2.", done:false},
  {id:6, text:"Φτιάξε μια σαλάτα: μοίρασε το αγγούρι στα 1/4.", done:false},
  {id:7, text:"Μοίρασε 12 σταφύλια σε 3 άτομα: «Κάθε άτομο παίρνει 4/12 = 1/3.»", done:false},
  {id:8, text:"Ζωγράφισε κύκλο 8 κομματιών και χρωμάτισε 3/8.", done:false},
  {id:9, text:"Σύγκρινε 5/10 και 1/2 με τη μπάρα σοκολάτας.", done:false},
  {id:10, text:"Γέμισε ποτήρι στο 1/3 και μετά στο 2/3. Ποιο είναι περισσότερο;", done:false},
];

export default function DailyMissions() {
  const [missions, setMissions] = useState(defaultMissions);

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
    setMissions(defaultMissions);
  };

  const test = missions.map((m) => (m.text))
  console.log('missions ', test)
  
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
