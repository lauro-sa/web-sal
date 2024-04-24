// ModalTechnology.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const modalVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

const ModalTechnology = ({ tech, onClose }) => {
  if (!tech) return null;

  return (
    <AnimatePresence>
      {tech && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center p-4 z-50 "
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="rounded-lg shadow-lg p-6 z-10 max-w-md bg-[rgba(1,1,1,0.80)] border border-violeta-marca/50" // max-w-96
            onClick={(e) => e.stopPropagation()}
          >
            <tech.Icon className="mx-auto h-16 w-16 text-current" />
            <h2 className="text-xl font-bold mt-4 mb-2 text-center">
              {tech.name}
            </h2>
            <p className="text-center">{tech.description}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalTechnology;
