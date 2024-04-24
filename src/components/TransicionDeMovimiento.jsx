// TransicionDeMovimiento.jsx

import React from "react";
import { motion } from "framer-motion";
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
    case "entradaLogo":
      // Aplicar el delay a cada transición específica dentro de las propiedades animadas
      variants = {
        hidden: {
          ...entradaLogo.hidden,
        },
        visible: {
          ...entradaLogo.visible,
          transition: {
            ...entradaLogo.visible.transition,
            scale: {
              ...entradaLogo.visible.transition.scale,
              delay: delay,
            },
            opacity: {
              ...entradaLogo.visible.transition.opacity,
              delay: delay,
            },
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
    case "entrarAbajoArriba":
      variants = {
        hidden: { ...entrarAbajoArriba.hidden },
        visible: {
          ...entrarAbajoArriba.visible,
          transition: {
            ...entrarAbajoArriba.visible.transition,
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
