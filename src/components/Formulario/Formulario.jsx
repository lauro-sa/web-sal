// React y Hooks necesarios
import React, { useRef } from "react";

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

          // Lógica para disparar el confetti solo si el formulario se envió con éxito
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

          // Función que dispara el confetti
          function shootConfetti() {
            confetti({ ...defaults, particleCount: 30 });
            confetti({ ...defaults, particleCount: 5, flat: true });
            confetti({ ...defaults, particleCount: 15, scalar: scalar / 2, shapes: ['circle'] });
          }

          shootConfetti(); // Llamada para disparar el confetti

          // Mostrar el alert con color personalizado y resetear el formulario después de que el confetti termine
          setTimeout(() => {
            alert("%cFormulario enviado, gracias!", "color: #1e40af;"); // Azul-marca
            resetForm(); // Restablece el formulario después de enviarlo
            if (onClose) onClose(); // Cerrar el modal después de enviar el formulario si onClose está definido
          }, 1000); // Espera 1 segundo antes de mostrar el alert
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("%cError al enviar el formulario. Por favor, inténtalo de nuevo.", "color: #1e40af;"); // Azul-marca
        }
      );
  };

  return (
    // Uso de Formik para manejar la lógica del formulario
    <Formik
      initialValues={{
        nombreCompleto: "", // Valor inicial del campo nombreCompleto
        correo: "", // Valor inicial del campo correo
        telefono: "", // Valor inicial del campo teléfono
        mensaje: "", // Valor inicial del campo mensaje
        referencia1: "", // Valor inicial del campo referencia1
        referencia2: "", // Valor inicial del campo referencia2
      }}
      validate={validateForm} // Validación del formulario
      onSubmit={(values, actions) => {
        handleSubmit(values, actions); // Maneja el envío del formulario
        actions.setSubmitting(false); // Deja de indicar que está enviando
      }}
    >
      {({ isSubmitting }) => (
        <Form ref={form} className="space-y-6 flex flex-col p-2 w-96">
          {/* Título del formulario con animación */}
          <h1 className="text-center tracking-in-contract-bck-top text-xl mb-2 text-azul-marca">
            ¡HABLEMOS!
          </h1>


          {/* Campo para el nombre completo */}
          <div>
            <Field
              type="text"
              name="nombreCompleto"
              placeholder="Nombre completo*"
              className="py-3 px-2 text-sm border rounded bg-fondo-oscuro w-full"
            />
            <ErrorMessage
              name="nombreCompleto"
              component="div"
              className="mt-1 text-sm text-start text-azul-marca"
            />
          </div>

          {/* Campo para el correo electrónico */}
          <div>
            <Field
              type="email"
              name="correo"
              placeholder="Correo electrónico*"
              className="py-3 px-2 text-sm border rounded bg-fondo-oscuro w-full"
            />
            <ErrorMessage
              name="correo"
              component="div"
              className="mt-1 text-sm text-start text-azul-marca" />
          </div>

          {/* Campo para el teléfono */}
          <Field
            type="text"
            name="telefono"
            placeholder="Teléfono"
            className="py-3 px-2 text-sm border rounded bg-fondo-oscuro w-full"
          />
          <ErrorMessage
            name="telefono"
            component="div"
            className="mt-1 text-sm text-start text-azul-marca" />

          {/* Campo para el mensaje */}
          <Field
            as="textarea"
            name="mensaje"
            placeholder="Mensaje*"
            className="py-1 px-2 text-sm border rounded bg-fondo-oscuro w-full"
          />
          <ErrorMessage
            name="mensaje"
            component="div"
            className="text-sm text-start text-acento-rosa"
          />

          {/* Campo para las referencias */}
          <div className="">
            <h2 className="text-sm mb-2">
              ¿Quieres dejarme algún link de referencia?
            </h2>

            <Field
              type="text"
              name="referencia1"
              placeholder="Link referencia 1"
              className="py-3 px-2 text-sm border rounded bg-fondo-oscuro w-full"
            />
            <ErrorMessage
              name="referencia1"
              component="div"
              className="text-sm text-start text-acento-rosa"
            />
          </div>

          <Field
            type="text"
            name="referencia2"
            placeholder="Link referencia 2"
            className="py-3 px-2 text-sm border rounded bg-fondo-oscuro w-full"
          />
          <ErrorMessage
            name="referencia2"
            component="div"
            className="text-sm text-start text-acento-rosa"
          />

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
