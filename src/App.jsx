import React from "react";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

const App = () => {
  return (
    <div className={styles.main}>
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
