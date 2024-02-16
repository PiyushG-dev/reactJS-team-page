import React, { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";
import pf1 from "../../images/pf1.jpeg";
import pf2 from "../../images/pf2.jpeg";
import pf3 from "../../images/pf3.jpeg";
import pf4 from "../../images/pf4.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";

const Hero = () => {
  const cursor = useRef(null);

  const team = [
    { name: "Ava Sinclair", role: "Creative Director" },
    { name: "Liam Archer", role: "Creative Director" },
    { name: "Zoe Clementine", role: "Creative Director" },
    { name: "Ethan Hawthorne", role: "Creative Director" },
  ];

  const handleMouseMove = (e) => {
    gsap.to(cursor.current, { x: e.pageX, y: e.pageY });
  };

  const handleMouseLeave = () => {
    gsap.to(cursor.current, { scale: 0, opacity: 0 });
  };

  const handleMouseEnter = () => {
    gsap.to(cursor.current, { scale: 1, opacity: 1 });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className={styles.wrapper}
    >
      <div className={styles.overlay}>
        <div className={`${styles.t_1} ${styles.marquee_wrapper}`}>
          <h1>Ava Sinclair Ava Sinclair Ava Sinclair</h1>
        </div>
        <div className={`${styles.t_2} ${styles.marquee_wrapper}`}>
          <h1>Liam Archer Liam Archer Liam Archer</h1>
        </div>
        <div className={`${styles.t_3} ${styles.marquee_wrapper}`}>
          <h1>Zoe Clementine Zoe Clementine Zoe Clementine</h1>
        </div>
        <div className={`${styles.t_4} ${styles.marquee_wrapper}`}>
          <h1>Ethan Hawthorne Ethan Hawthorne Ethan Hawthorne</h1>
        </div>
      </div>
      <div className={styles.modal}>
        <div className={styles.modal_images}>
          <div className={styles.img}>
            <img src={pf4} alt="profile" />
          </div>
          <div className={styles.img}>
            <img src={pf1} alt="profile" />
          </div>
          <div className={styles.img}>
            <img src={pf3} alt="profile" />
          </div>
          <div className={styles.img}>
            <img src={pf2} alt="profile" />
          </div>
        </div>
        <div className={styles.info}>
          <p className={styles.name}>Ava Sinclair</p>
          <p className={styles.role}>Creative Director</p>
        </div>
      </div>
      <div ref={cursor} className={styles.cursor}>
        <FontAwesomeIcon className={styles.arrow} icon={faArrowLeft} />
      </div>
    </section>
  );
};

export default Hero;
