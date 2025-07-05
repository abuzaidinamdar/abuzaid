"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useSpring,
} from "motion/react";
 
export const TracingBeam = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
 
  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);
 
  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, []);
 
  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
    {
      stiffness: 100,
      damping: 30,
    },
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
    {
      stiffness: 100,
      damping: 30,
    },
  );
 
  return (
    <motion.div
      ref={ref}
      style={{ position: 'relative', height: '100%', width: '100%' }}
    >
      <div style={{ position: 'fixed', top: '80px', left: '10px', zIndex: 40 }}>
        <motion.div
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          style={{
            boxShadow: scrollYProgress.get() > 0 ? "none" : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            border: '1px solid #e5e7eb',
            display: 'flex',
            height: '16px',
            width: '16px',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%'
          }}
        >
          <motion.div
            transition={{
              duration: 0.2,
              delay: 0.5,
            }}
            style={{
              backgroundColor: scrollYProgress.get() > 0 ? "white" : "#10b981",
              borderColor: scrollYProgress.get() > 0 ? "white" : "#059669",
              height: '8px',
              width: '8px',
              borderRadius: '50%',
              border: '1px solid #d1d5db'
            }}
          />
        </motion.div>
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight} // Set the SVG height
          style={{ marginLeft: '0px', marginTop: '-2px', display: 'block' }}
          aria-hidden="true"
        >
          <motion.path
            d={`M 10 18V 0 l 0 ${svgHeight * 0.8} l 0 ${svgHeight * 0.2}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
            transition={{
              duration: 2,
            }}
          ></motion.path>
          <motion.path
            d={`M 10 18V 0 l 0 ${svgHeight * 0.8} l 0 ${svgHeight * 0.2}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1.25"
            className="motion-reduce:hidden"
            transition={{
              duration: 2,
            }}
          ></motion.path>
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1} // set y1 for gradient
              y2={y2} // set y2 for gradient
            >
              <stop stopColor="#18CCFC" stopOpacity="0"></stop>
              <stop stopColor="#18CCFC"></stop>
              <stop offset="0.325" stopColor="#6344F5"></stop>
              <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};
