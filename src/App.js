import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import How from "./components/How";
import FractionVisualizer from "./components/FractionVisualizer";
import MiniScripts from "./components/MiniScripts";
import Tips from "./components/Tips";
import Footer from "./components/Footer";
import DailyMissions from "./components/DailyMissions";
import "./styles.css";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <How />
        <section id="tools" className="container tools">
          <h2>Εργαλεία Γονέα</h2>
          <FractionVisualizer />
          <MiniScripts />
          <DailyMissions />
        </section>
        <Tips />
      </main>
      <Footer />
    </>
  );
}
