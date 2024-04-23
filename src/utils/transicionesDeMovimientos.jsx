// transicionesDeMoviemintos.jsx

export const entradaLogo = {
  hidden: {
    scale: 0.5,
    opacity: 0,
    transition: {
      delay: 0.5,
    },
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      scale: {
        type: "spring",
        stiffness: 150, // Aumenta la rigidez para un rebote más rápido y más fuerte
        damping: 12, // Reduce la amortiguación para permitir más oscilaciones
        mass: 2, // Ajusta la masa para influir en la dinámica del rebote
        velocity: 1, // Aumenta la velocidad inicial para impulsar el movimiento
        restDelta: 0.01, // Ajusta cuándo se considera que la animación debe detenerse
        overshootClamping: false, // Permite que la animación sobrepase el valor final
      },
      opacity: {
        duration: 1, // Sincroniza con la duración de la animación de escala
        ease: "easeInOut", // Easing suave para la transición de opacidad
      },
    },
  },
};

export const transicionPagina = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

export const desvanecer = (posicion) => {
  return {
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.4,
        delay: 0.5,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
    hidden: {
      y: position === "bottom" ? -80 : 0,
      x: position === "right" ? 80 : 0,
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.5,
        delay: 0.5,
        ease: [0.25, 0.25, 0.25, 0.25],
      },
    },
  };
};

export const entrarAbajoArriba = {
  hidden: {
    y: 100,
    opacity: 0,
    transition: {
      type: "tween",
      duration: 0.5,
      delay: 0.5,
      ease: [0.25, 0.25, 0.25, 0.25],
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1.4,
      delay: 0.5,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
};

export const entrarIzquierdaDerecha = {
  hidden: {
    x: -100,
    opacity: 0,
    transition: {
      type: "tween",
      duration: 0.5,
      delay: 0.5,
      ease: [0.25, 0.25, 0.25, 0.25],
    },
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1.4,
      delay: 0.5,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
};

export const entrarDerechaIzquierda = {
  hidden: { x: 300, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 120, damping: 20, delay: 0.2 },
  },
};

export const entrarArribaAbajo = {
  hidden: {
    y: -100, // Comienza 100 píxeles por encima de su posición final
    opacity: 0,
    transition: {
      type: "tween",
      duration: 0.5,
      delay: 0.3,
      ease: [0.25, 0.25, 0.25, 0.25],
    },
  },
  visible: {
    y: 0, // Termina en la posición original
    opacity: 1,
    transition: {
      type: "spring", // Usa una transición tipo "spring" para un efecto más dinámico
      stiffness: 120,
      damping: 20,
      delay: 0.3,
    },
  },
};
