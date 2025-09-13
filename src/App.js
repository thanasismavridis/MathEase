import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import How from "./components/How";
import FractionVisualizer from "./components/FractionVisualizer";
import MiniScripts from "./components/MiniScripts";
import Tips from "./components/Tips";
import Footer from "./components/Footer";
import DailyMissions from "./components/DailyMissions";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import "./styles.css";


export default function App() {

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '20px'
    },
    messageContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '20px',
      padding: '20px',
      maxWidth: '450px'
    },
    title: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    button: {
      height: '20px',
      width: '20px',
      display: 'flex',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center'
    }
  };

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }


  useEffect(() => {
    openModal()
  }, []);


  return (
    <>
    <div id="#yourAppElement">
      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="message" style={customStyles.messageContainer}>
          <div style={customStyles.title}>
            <h3 ref={(_subtitle) => (subtitle = _subtitle)}>Καλησπέρα στην οικογένεια Λαζαρίδη!</h3>
            <button onClick={closeModal} style={customStyles.button}>x</button>
          </div>
          <div>Το MathEase πλέον είναι online. Βρείτε μαύρες σακούλες γιατί στις τσέπες δεν θα χωράνε!</div>
        </div>
        
       
      </Modal>
    </div>
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

