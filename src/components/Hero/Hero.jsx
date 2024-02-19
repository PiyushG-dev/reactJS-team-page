import React, { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";
import pf1 from "../../images/pf1.jpeg";
import pf2 from "../../images/pf2.jpeg";
import pf3 from "../../images/pf3.jpeg";
import pf4 from "../../images/pf4.jpeg";
import gsap from "gsap";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const cursor = useRef(null);
  const overlay = useRef(null);
  // scenes
  const t_1 = useRef(null);
  const t_2 = useRef(null);
  const t_3 = useRef(null);
  const t_4 = useRef(null);
  // images
  const pf_1 = useRef(null);
  const pf_2 = useRef(null);
  const pf_3 = useRef(null);
  const pf_4 = useRef(null);
  const totalSlides = 4;

  const team = [
    { name: "Ava Sinclair", role: "Creative Director" },
    { name: "Liam Archer", role: "UX Designer" },
    { name: "Zoe Clementine", role: "Product Developer" },
    { name: "Ethan Hawthorne", role: "Branding Specialist" },
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

  // left click
  const handleLeftClick = () => {
    setCurrentSlide((prev) => {
      if (prev > 1) {
        return prev - 1;
      } else {
        return 1;
      }
    });
    if (currentSlide == 2) {
      gsap.to(t_2.current, {
        clipPath: "polygon(0% 100%,100% 100%,100% 100%, 0% 100%",
        duration: 1,
        ease: "power4.out",
      });
      gsap.to(pf_2.current, {
        clipPath: "polygon(0% 100%,100% 100%,100% 100%, 0% 100%",
        duration: 1,
        ease: "power4.out",
      });
    }
    if (currentSlide == 3) {
      gsap.to(t_3.current, {
        clipPath: "polygon(0% 100%,100% 100%,100% 100%, 0% 100%",
        duration: 1,
        ease: "power4.out",
      });
      gsap.to(pf_3.current, {
        clipPath: "polygon(0% 100%,100% 100%,100% 100%, 0% 100%",
        duration: 1,
        ease: "power4.out",
      });
    }
    if (currentSlide == 4) {
      gsap.to(t_4.current, {
        clipPath: "polygon(0% 100%,100% 100%,100% 100%, 0% 100%",
        duration: 1,
        ease: "power4.out",
      });
      gsap.to(pf_4.current, {
        clipPath: "polygon(0% 100%,100% 100%,100% 100%, 0% 100%",
        duration: 1,
        ease: "power4.out",
      });
    }

    console.log("left click");
  };

  // right click

  const handleRightClick = () => {
    setCurrentSlide((prev) => {
      if (prev < totalSlides) {
        return prev + 1;
      } else {
        return totalSlides;
      }
    });
    if (currentSlide == 1) {
      gsap.to(t_2.current, {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        duration: 1,
        ease: "power4.out",
      });
      gsap.to(pf_2.current, {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        duration: 1,
        ease: "power4.out",
      });
    }
    if (currentSlide == 2) {
      gsap.to(t_3.current, {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        duration: 1,
        ease: "power4.out",
      });
      gsap.to(pf_3.current, {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        duration: 1,
        ease: "power4.out",
      });
    }
    if (currentSlide == 3) {
      gsap.to(t_4.current, {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        duration: 1,
        ease: "power4.out",
      });
      gsap.to(pf_4.current, {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        duration: 1,
        ease: "power4.out",
      });
    }

    console.log("right click");
  };

  const handleSlideChange = (e) => {
    const halfPageWidth = window.innerWidth / 2;
    if (e.clientX > halfPageWidth) {
      handleRightClick();
    } else {
      handleLeftClick();
    }
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={handleSlideChange}
      className={styles.wrapper}
    >
      <div ref={overlay} className={styles.overlay}>
        <div ref={t_1} className={`${styles.t_1} ${styles.marquee_wrapper}`}>
          <h1>Ava Sinclair Ava Sinclair Ava Sinclair</h1>
        </div>
        <div ref={t_2} className={`${styles.t_2} ${styles.marquee_wrapper}`}>
          <h1>Liam Archer Liam Archer Liam Archer</h1>
        </div>
        <div ref={t_3} className={`${styles.t_3} ${styles.marquee_wrapper}`}>
          <h1>Zoe Clementine Zoe Clementine Zoe Clementine</h1>
        </div>
        <div ref={t_4} className={`${styles.t_4} ${styles.marquee_wrapper}`}>
          <h1>Ethan Hawthorne Ethan Hawthorne Ethan Hawthorne</h1>
        </div>
      </div>
      <div className={styles.modal}>
        <div className={styles.modal_images}>
          <div ref={pf_1} className={styles.img} id={styles.t_1}>
            <img src={pf4} alt="profile" />
          </div>
          <div ref={pf_2} className={styles.img} id={styles.t_2}>
            <img src={pf1} alt="profile" />
          </div>
          <div ref={pf_3} className={styles.img} id={styles.t_3}>
            <img src={pf3} alt="profile" />
          </div>
          <div ref={pf_4} className={styles.img} id={styles.t_4}>
            <img src={pf2} alt="profile" />
          </div>
        </div>
        <div className={styles.info}>
          <p className={styles.name}>{team[currentSlide - 1].name}</p>
          <p className={styles.role}>{team[currentSlide - 1].role}</p>
        </div>
      </div>
      <div ref={cursor} className={styles.cursor}></div>
    </section>
  );
};

export default Hero;
