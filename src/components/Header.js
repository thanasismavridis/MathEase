import React from "react";

export default function Header() {
  return (
    <header className="container header">
      <div className="brand">
        <div className="logo" aria-hidden="true">÷</div>
        <span>MathEase</span>
      </div>
      <nav>
        <a href="#how">Πώς λειτουργεί</a>
        <a href="#tools">Εργαλεία</a>
        <a href="#tips">Mini Tips</a>
      </nav>
    </header>
  );
}
