import React from "react";

// Animaciones
import { motion, AnimatePresence } from "framer-motion";


const modalVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const ModalCustom = ({ isVisible, onClose, children }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center p-4 z-50"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="rounded-lg shadow-lg p-6 z-10 max-w-xl bg-[rgba(1,1,1,0.80)] border border-violeta-marca/50 w-full flex justify-center items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalCustom;
