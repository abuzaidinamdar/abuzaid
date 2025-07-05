import { useEffect, useState } from "react";
import { motion } from "motion/react";
import "./LampEffect.css";

export const LampEffect = () => {
  const [firstLine, setFirstLine] = useState("");
  const [secondLine, setSecondLine] = useState("");
  const [isTypingFirst, setIsTypingFirst] = useState(true);
  const [isTypingSecond, setIsTypingSecond] = useState(false);

  const firstText = "Hi, I'm Abuzaid!";
  const secondText = "A Developer.";

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const typeFirstLine = () => {
      let i = 0;
      function typeFirst() {
        if (i < firstText.length) {
          setFirstLine(firstText.substring(0, i + 1));
          i++;
          timeoutId = setTimeout(typeFirst, 80);
        } else {
          setIsTypingFirst(false);
          timeoutId = setTimeout(() => {
            setIsTypingSecond(true);
            typeSecondLine();
          }, 400);
        }
      }
      typeFirst();
    };

    const typeSecondLine = () => {
      let j = 0;
      function typeSecond() {
        if (j < secondText.length) {
          setSecondLine(secondText.substring(0, j + 1));
          j++;
          timeoutId = setTimeout(typeSecond, 80);
        } else {
          setIsTypingSecond(false);
        }
      }
      typeSecond();
    };

    typeFirstLine();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
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
        <span
          className={`typewriter ${isTypingFirst ? "typing" : ""}`}
        >
          {firstLine}
        </span>
        <br />
        <span
          className={`highlight typewriter ${isTypingSecond ? "typing" : ""}`}
        >
          {secondLine}
        </span>
      </div>
    </div>
  );
};
