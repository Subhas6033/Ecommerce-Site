/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "motion/react";

// SLide up animation
const SlideUpAnimation = ({ className = "", children, ...prop }) => {
  return (
    <motion.div
      initial={{ y: 150, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className={`${className}`}
      {...prop}
    >
      {children}
    </motion.div>
  );
};

// Slide Down animation
const SlideDownAnimation = ({ className = "", children, ...prop }) => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className={className}
      {...prop}
    >
      {children}
    </motion.div>
  );
};

// Slide Right Animation
const SlideRightAnimation = ({className = "", children, ...prop}) => {
  return (
    <motion.div
      initial={{ x: 150, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className={className}
      {...prop}
    >
      {children}
    </motion.div>
  );
};

// Slide Left Animation
const SlideLeftAnimation = ({className = "", children, ...prop}) => {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className={className}
      {...prop}
    >
      {children}
    </motion.div>
  );
};

// Popover Animation
const PopupAnimation = ({ className = "", children, ...prop }) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className={className}
      {...prop}
    >
      {children}
    </motion.div>
  );
};

export {
  SlideUpAnimation,
  SlideDownAnimation,
  SlideRightAnimation,
  SlideLeftAnimation,
  PopupAnimation,
};
