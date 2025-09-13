import React from "react";

export default function Hero() {
  return (
    <section className="hero container">
      <div className="hero-text">
        <h1>Μαθηματικά με ευκολία — Ο οδηγός για γονείς</h1>
        <p>
          Εξήγησε τα κλάσματα στο παιδί σου με πρακτικά βήματα, καθημερινά
          παραδείγματα και οπτικά εργαλεία.
        </p>
        <button className="cta">Ξεκίνησε τώρα</button>
      </div>
      <div className="hero-illus" aria-hidden="true">
        {/* SVG αντιγραφή από HTML */}
        <svg viewBox="0 0 220 160" width="100%" height="100%">
          <rect x="0" y="0" width="220" height="160" rx="16" fill="#F7FBFF"/>
          <circle cx="60" cy="80" r="40" fill="#FEE9D6" stroke="#F5B676" strokeWidth="2"/>
          <path d="M60,40 A40,40 0 0,1 100,80 L60,80 Z" fill="#FDBA74"/>
          <rect x="120" y="52" width="80" height="56" rx="8" fill="#E7F5ED" stroke="#86D3A8" strokeWidth="2"/>
          <line x1="160" y1="52" x2="160" y2="108" stroke="#86D3A8" strokeWidth="2"/>
          <line x1="120" y1="80" x2="200" y2="80" stroke="#86D3A8" strokeWidth="2"/>
        </svg>
      </div>
    </section>
  );
}
