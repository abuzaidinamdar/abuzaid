import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { TextAnimate } from "./magicui/text-animate";
import "./LampEffect.css";

export const LampEffect = () => {
  const [showFirstText, setShowFirstText] = useState(false);
  const [showSecondText, setShowSecondText] = useState(false);

  useEffect(() => {
    // Show the first text with Magic UI animation after lamp animation
    const showFirstTextTimer = setTimeout(() => {
      setShowFirstText(true);
    }, 2000); // Delay to let lamp animation finish

    // Show second text after first text animation completes
    const showSecondTextTimer = setTimeout(() => {
      setShowSecondText(true);
    }, 4000); // Delay to let first text animation complete

    return () => {
      clearTimeout(showFirstTextTimer);
      clearTimeout(showSecondTextTimer);
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
            animation="slideUp"
            by="word"
            delay={0.1}
            duration={1.2}
            className="highlight typewriter"
          >
            A good frontend developer
          </TextAnimate>
        )}
      </div>
    </div>
  );
};
