// Formulario.jsx
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const validateForm = (values) => {
  const errors = {};
  if (!values.nombreCompleto) {
    errors.nombreCompleto = "El nombre completo es obligatorio.";
  }
  if (!values.correo) {
    errors.correo = "El correo es obligatorio.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.correo)) {
    errors.correo = "Dirección de correo inválida.";
  }
  return errors;
};

const Formulario = ({ onClose }) => {
  return (
    <Formik
      initialValues={{
        nombreCompleto: "",
        correo: "",
        telefono: "",
        mensaje: "",
        referencia1: "",
        referencia2: "",
      }}
      validate={validateForm}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          onClose(); // Cerrar el modal después de enviar el formulario
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-6 flex flex-col p-2 w-96 ">
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
              className=" text-sm text-start text-acento-rosa"
            />
          </div>

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
              className=" text-sm text-start text-acento-rosa"
            />
          </div>
          <Field
            type="text"
            name="telefono"
            placeholder="Teléfono"
            className="py-3 px-2 text-sm border rounded bg-fondo-oscuro w-full"
            />
          <ErrorMessage
            name="telefono"
            component="div"
            className=" text-sm text-start text-acento-rosa"
          />

          <Field
            as="textarea"
            name="mensaje"
            placeholder="Mensaje*"
            className="py-1 px-2 text-sm border rounded bg-fondo-oscuro w-full"
            />
          <ErrorMessage
            name="mensaje"
            component="div"
            className=" text-sm text-start text-acento-rosa"
          />

          <div className="">
            <h2 className="text-sm mb-2">
              Quieres dejarme algun link de referencia?
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
              className=" text-sm text-start text-acento-rosa"
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
            className=" text-sm text-start text-acento-rosa"
          />
          <div className="">
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
