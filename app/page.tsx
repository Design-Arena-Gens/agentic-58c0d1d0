'use client';

import { motion } from "framer-motion";

const toggles = ["ai native", "agent guide", "deep plan mode"];

export default function Home() {
  return (
    <main className="page">
      <div className="ambient ambient--one" />
      <div className="ambient ambient--two" />
      <header className="hero">
        <motion.span
          className="hero__eyebrow"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
        >
          Next Evolution Workspace
        </motion.span>
        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6, ease: "easeOut" }}
        >
          Build full-stack magic without touching the scaffolding.
        </motion.h1>
        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.65, ease: "easeOut" }}
        >
          Nebula Build orchestrates data, logic, and AI-native flows into a
          living product canvas. Sketch intent, watch production-grade systems
          materialize.
        </motion.p>
      </header>
      <motion.section
        className="module"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85, duration: 0.7, ease: "easeOut" }}
      >
        <div className="module__mask">
          <motion.textarea
            placeholder="Describe the experience you want to manifest. Drop data sources, workflows, personas, and desired outcomes — Nebula Build will synthesize the build plan."
            className="module__textarea"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
          />
          <motion.div
            className="module__bottom"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.55, ease: "easeOut" }}
          >
            <div className="module__toggles">
              {toggles.map((label) => (
                <button key={label} className="toggle">
                  <span className="toggle__dot" />
                  {label}
                </button>
              ))}
            </div>
            <motion.button
              className="module__submit"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Initiate Blueprint
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
