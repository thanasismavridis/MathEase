import React from "react";

export default function How() {
  return (
    <section id="how" className="container how">
      <h2>Πώς λειτουργεί</h2>
      <div className="steps">
        <div className="step">
          <h3>1) Μάθε</h3>
          <p>Απλές εξηγήσεις για κάθε ηλικία, χωρίς ορολογία.</p>
        </div>
        <div className="step">
          <h3>2) Δίδαξε</h3>
          <p>Σενάρια-οδηγοί για να μιλήσεις στο παιδί με παραδείγματα από το σπίτι.</p>
        </div>
        <div className="step">
          <h3>3) Παίξτε μαζί</h3>
          <p>Χρησιμοποίησε οπτικά εργαλεία για να “δεις” τα κλάσματα ζωντανά.</p>
        </div>
      </div>
    </section>
  );
}
