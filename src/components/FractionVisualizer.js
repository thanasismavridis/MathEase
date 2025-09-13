import React, { useState, useRef, useEffect } from "react";

export default function FractionVisualizer() {
  const [num, setNum] = useState(1);
  const [den, setDen] = useState(2);
  const [model, setModel] = useState("circle");
  const canvasRef = useRef(null);

  useEffect(() => {
    renderFraction();
  }, [num, den, model]);

  const renderFraction = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const fraction = num / den;

    if (model === "circle") {
      const x = 120, y = 110, r = 80;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, 2 * Math.PI);
      ctx.strokeStyle = "#475569";
      ctx.stroke();

      for (let i = 0; i < den; i++) {
        const start = (i / den) * 2 * Math.PI - Math.PI / 2;
        const end = ((i + 1) / den) * 2 * Math.PI - Math.PI / 2;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.arc(x, y, r, start, end);
        ctx.closePath();
        if (i < num) ctx.fillStyle = "#f97316";
        else ctx.fillStyle = "#f1f5f9";
        ctx.fill();
        ctx.stroke();
      }
    } else {
      const barWidth = 240, barHeight = 60;
      const startX = 40, startY = 80;
      for (let i = 0; i < den; i++) {
        ctx.beginPath();
        ctx.rect(startX + (i * barWidth) / den, startY, barWidth / den, barHeight);
        if (i < num) ctx.fillStyle = "#3b82f6";
        else ctx.fillStyle = "#f1f5f9";
        ctx.fill();
        ctx.strokeStyle = "#475569";
        ctx.stroke();
      }
    }
  };

  return (
    <div className="card">
      <h3>🔍 Οπτικός Προβολέας Κλασμάτων</h3>
      <p>Διάλεξε αριθμητή/παρονομαστή και δείξε στο παιδί το κλάσμα πάνω σε “πίτσα” ή “μπάρα”.</p>
      <div className="tool-grid">
        <div>
          <label>
            Αριθμητής
            <input type="number" min="0" max="12" value={num} onChange={e => setNum(+e.target.value)} />
          </label>
          <label>
            Παρονομαστής
            <input type="number" min="1" max="12" value={den} onChange={e => setDen(+e.target.value)} />
          </label>
          <label>
            Μοντέλο
            <select value={model} onChange={e => setModel(e.target.value)}>
              <option value="circle">Κύκλος (πίτσα)</option>
              <option value="bar">Μπάρα σοκολάτας</option>
            </select>
          </label>
          <div className="frac-text">{num}/{den}</div>
        </div>
        <div className="canvas-wrap">
          <canvas ref={canvasRef} width={320} height={220} aria-label="Οπτική αναπαράσταση κλάσματος"></canvas>
        </div>
      </div>
    </div>
  );
}
