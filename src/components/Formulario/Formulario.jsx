// React y Hooks necesarios
import React, { useRef, useState } from "react";

// Librerías de terceros para manejo del formulario, envío de email y confetti
import { Formik, Form, Field, ErrorMessage } from "formik";
import emailjs from "emailjs-com";
import confetti from "canvas-confetti";

// Validación del formulario
const validateForm = (values) => {
  const errors = {};
  // Validación del campo nombreCompleto
  if (!values.nombreCompleto) {
    errors.nombreCompleto = "El nombre completo es obligatorio.";
  }
  // Validación del campo correo
  if (!values.correo) {
    errors.correo = "El correo es obligatorio.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.correo)) {
    errors.correo = "Dirección de correo inválida.";
  }
  return errors; // Devuelve los errores encontrados en el formulario
};

// Componente principal del formulario
const Formulario = ({ onClose }) => {
  const form = useRef(); // Referencia al formulario
  const [extraLinks, setExtraLinks] = useState(0); // Estado para contar los links adicionales

  // Función que maneja el envío del formulario
  const handleSubmit = (values, { resetForm }) => {
    emailjs
      .sendForm(
        "service_u6rhhzi", // Service ID de emailjs
        "template_2x64pjr", // Template ID de emailjs
        form.current,
        "Z10GgmGoZ9VqU423Z" // Public Key de emailjs
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);

          // Lógica para disparar el confetti
          const buttonRect = form.current.querySelector('button[type="submit"]').getBoundingClientRect();
          const x = (buttonRect.left + buttonRect.width / 2) / window.innerWidth;
          const y = (buttonRect.top + buttonRect.height / 2) / window.innerHeight;

          const scalar = 2;
          const unicorn = confetti.shapeFromText({ text: '🦄', scalar });
          const star = confetti.shapeFromText({ text: '✨', scalar });

          const defaults = {
            spread: 360,
            ticks: 120,
            gravity: 0.3,
            decay: 0.94,
            startVelocity: 15,
            shapes: [unicorn, star],
            scalar,
            origin: { x, y },
          };

          function shootConfetti() {
            confetti({ ...defaults, particleCount: 30 });
            confetti({ ...defaults, particleCount: 5, flat: true });
            confetti({ ...defaults, particleCount: 15, scalar: scalar / 2, shapes: ['circle'] });
          }

          shootConfetti();

          setTimeout(() => {
            alert("%cFormulario enviado, gracias!", "color: #1e40af;");
            resetForm();
            setExtraLinks(0); // Ocultar los campos extra después de enviar
            if (onClose) onClose();
          }, 1000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("%cError al enviar el formulario. Por favor, inténtalo de nuevo.", "color: #1e40af;");
        }
      );
  };

  return (
    <Formik
      initialValues={{
        nombreCompleto: "",
        correo: "",
        telefono: "",
        mensaje: "",
        referencia1: "",
        referencia2: "",
        referencia3: "", // Añadido para el tercer link
      }}
      validate={validateForm}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form ref={form} className="space-y-6 flex flex-col p-2 w-96">
          <h1 className="text-center tracking-in-contract-bck-top text-xl mb-2 text-azul-marca">
            ¡HABLEMOS!
          </h1>

          {/* Campos del formulario */}
          <Field type="text" name="nombreCompleto" placeholder="Nombre completo*" className="py-3 px-2 text-sm border rounded bg-fondo-oscuro w-full" />
          <ErrorMessage name="nombreCompleto" component="div" className="-mt-4 text-sm text-start text-azul-marca" />

          <Field type="email" name="correo" placeholder="Correo electrónico*" className="py-3 px-2 text-sm border rounded bg-fondo-oscuro w-full" />
          <ErrorMessage name="correo" component="div" className="-mt-4 text-sm text-start text-azul-marca" />

          <Field type="text" name="telefono" placeholder="Teléfono" className="py-3 px-2 text-sm border rounded bg-fondo-oscuro w-full" />
          <ErrorMessage name="telefono" component="div" className="-mt-4 text-sm text-start text-azul-marca" />

          <Field as="textarea" name="mensaje" placeholder="Mensaje*" className="py-1 px-2 text-sm border rounded bg-fondo-oscuro w-full" />
          <ErrorMessage name="mensaje" component="div" className="-mt-4 text-sm text-start text-acento-rosa" />

          {/* Sección de links de referencia */}
          <div>
            <h2 className="text-sm mb-2">
              ¿Quieres dejarme algún link de referencia?
            </h2>
            <Field type="text" name="referencia1" placeholder="Link de referencia" className="py-3 px-2 text-sm border rounded bg-fondo-oscuro w-full" />
            <ErrorMessage name="referencia1" component="div" className="mt-1 text-sm text-start text-acento-rosa" />

            {/* Segundo campo de link (condicional) */}
            {extraLinks >= 1 && (
              <div className="mt-4">
                <Field type="text" name="referencia2" placeholder="Link de referencia 2" className="py-3 px-2 text-sm border rounded bg-fondo-oscuro w-full" />
                <ErrorMessage name="referencia2" component="div" className="mt-1 text-sm text-start text-acento-rosa" />
              </div>
            )}

            {/* Tercer campo de link (condicional) */}
            {extraLinks >= 2 && (
              <div className="mt-4">
                <Field type="text" name="referencia3" placeholder="Link de referencia 3" className="py-3 px-2 text-sm border rounded bg-fondo-oscuro w-full" />
                <ErrorMessage name="referencia3" component="div" className="mt-1 text-sm text-start text-acento-rosa" />
              </div>
            )}

            {/* Botón para añadir más links */}
            {extraLinks < 2 && (
              <div className="text-center mt-3">
                <button
                  type="button"
                  onClick={() => setExtraLinks(prev => prev + 1)}
                  className="text-xs uppercase tracking-wider font-bold text-violeta-marca hover:text-white transition-colors"
                >
                  + Agregar link
                </button>
              </div>
            )}
          </div>

          {/* Botón de enviar */}
          <div className="w-full text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 mt-4 w-40 text-center mx-auto text-sm uppercase tracking-wider font-bold rounded-xl border border-violeta-marca hover:border-violeta-marca hover:bg-violeta-marca/30 hover:text-white transition-colors"
            >
              Enviar
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Formulario;
