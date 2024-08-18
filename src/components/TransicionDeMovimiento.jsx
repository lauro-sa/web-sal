import React from "react";

// Animaciones
import { motion } from "framer-motion";

// Utilidades
import {
  entradaLogo,
  entrarDesdeCentro,
  entrarAbajoArriba,
  entrarIzquierdaDerecha,
  entrarDerechaIzquierda,
  entrarArribaAbajo,
} from "../utils/transicionesDeMovimientos";

const TransicionDeMovimiento = ({
  children,
  className,
  type = "default",
  delay = 0,
}) => {
  let variants;
  switch (type) {
    case "entrarAbajoArriba":
      variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.2, // Más rápido
            delay: delay,
          },
        },
      };
      break;
    case "entrarArribaAbajo":
      // Aplica el delay a las transiciones de fadeInArribaAbajo
      variants = {
        hidden: { ...entrarArribaAbajo.hidden },
        visible: {
          ...entrarArribaAbajo.visible,
          transition: {
            ...entrarArribaAbajo.visible.transition,
            delay: delay,
          },
        },
      };
      break;
    case "entrarIzquierdaDerecha":
      variants = {
        hidden: { ...entrarIzquierdaDerecha.hidden },
        visible: {
          ...entrarIzquierdaDerecha.visible,
          transition: {
            ...entrarIzquierdaDerecha.visible.transition,
            delay: delay,
          },
        },
      };
      break;
    case "entrarDerechaIzquierda":
      variants = {
        hidden: { ...entrarDerechaIzquierda.hidden },
        visible: {
          ...entrarDerechaIzquierda.visible,
          transition: {
            ...entrarDerechaIzquierda.visible.transition,
            delay: delay,
          },
        },
      };
      break;

    case "entrarDesdeCentro":
      variants = entrarDesdeCentro;
      if (delay) {
        // Si hay un delay, lo aplicamos a todas las transiciones
        const adjustedTransitions = {
          ...entrarDesdeCentro.visible.transition,
          delay: delay,
        };
        variants = {
          hidden: { ...entrarDesdeCentro.hidden },
          visible: {
            ...entrarDesdeCentro.visible,
            transition: adjustedTransitions,
          },
        };
      }
      break;
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default TransicionDeMovimiento;
