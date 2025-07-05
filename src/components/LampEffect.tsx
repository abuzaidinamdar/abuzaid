import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { TextAnimate } from "./magicui/text-animate";
import "./LampEffect.css";

export const LampEffect = () => {
  const [showFirstText, setShowFirstText] = useState(false);
  const [showSecondText, setShowSecondText] = useState(false);
  const [showThirdText, setShowThirdText] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Show the first text with Magic UI animation after lamp animation
    const showFirstTextTimer = setTimeout(() => {
      setShowFirstText(true);
    }, 2000); // Delay to let lamp animation finish

    // Show second text after first text animation completes
    const showSecondTextTimer = setTimeout(() => {
      setShowSecondText(true);
    }, 4000); // Delay to let first text animation complete

    // Show third text after second text animation completes
    const showThirdTextTimer = setTimeout(() => {
      setShowThirdText(true);
    }, 6000); // Delay to let second text animation complete

    // Show button after third text animation completes
    const showButtonTimer = setTimeout(() => {
      setShowButton(true);
    }, 8000); // Delay to let third text animation complete

    // Apply blue color to "Abuzaid" as soon as first text starts animating
    const colorFirstTextTimer = setTimeout(() => {
      const firstTextElement = document.querySelector('.typewriter:not(.highlight):not(.static-text)');
      if (firstTextElement) {
        const spans = firstTextElement.querySelectorAll('span');
        // Color "Abuzaid!" (positions 7-15: A-b-u-z-a-i-d-!)
        for (let i = 7; i <= 15; i++) {
          if (spans[i]) {
            spans[i].style.color = '#00ffff';
          }
        }
      }
    }, 2100); // Start coloring right when animation begins

    // Apply blue color to specific words in third text as soon as it starts
    const colorThirdTextTimer = setTimeout(() => {
      const thirdTextElement = document.querySelector('.static-text');
      if (thirdTextElement) {
        const spans = thirdTextElement.querySelectorAll('span');
        
        // Color only "performance" blue (positions 14-24: p-e-r-f-o-r-m-a-n-c-e)
        for (let i = 14; i <= 24; i++) {
          if (spans[i]) {
            spans[i].style.color = '#00ffff';
          }
        }
        
        // Color "impact" (positions 50-55: i-m-p-a-c-t)
        for (let i = 50; i <= 55; i++) {
          if (spans[i]) {
            spans[i].style.color = '#00ffff';
          }
        }
      }
    }, 6100); // Start coloring right when third text animation begins

    return () => {
      clearTimeout(showFirstTextTimer);
      clearTimeout(showSecondTextTimer);
      clearTimeout(showThirdTextTimer);
      clearTimeout(showButtonTimer);
      clearTimeout(colorFirstTextTimer);
      clearTimeout(colorThirdTextTimer);
    };
  }, []);

  return (
    <div className="lamp-container">
      {/* Lamp Light Effect */}
      <motion.div
        className="lamp-light"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="lamp-top-line"></div>
        <motion.div
          className="lamp-beam"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        ></motion.div>
      </motion.div>

      {/* Text */}
      <div className="lamp-text">
        {showFirstText && (
          <TextAnimate
            animation="blurInUp"
            by="character"
            delay={0.1}
            duration={1.5}
            className="typewriter"
          >
            Hi, I'm Abuzaid!
          </TextAnimate>
        )}
        <br />
        {showSecondText && (
          <TextAnimate
            animation="blurInUp"
            by="character"
            delay={0.1}
            duration={1.2}
            className="highlight typewriter"
          >
            A Developer.
          </TextAnimate>
        )}
        <br />
        {showThirdText && (
          <TextAnimate
            animation="blurInUp"
            by="character"
            delay={0.1}
            duration={1.5}
            className="static-text typewriter"
          >
            I build high-performance websites that leave an impact.
          </TextAnimate>
        )}
        
        {showButton && (
          <div className="lamp-button-container">
            <button className="lamp-connect-button">Explore my project!</button>
          </div>
        )}
      </div>
    </div>
  );
};
