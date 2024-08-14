import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const serviciosDisponibles = [
  "Consultoría Técnica",
  "Desarrollo Web",
  "Mantenimiento de Software",
  "Soporte Técnico",
  "Desarrollo de Aplicaciones Móviles",
];

const validateForm = (values) => {
  const errors = {};
  if (!values.nombre) {
    errors.nombre = "El nombre es obligatorio.";
  }
  if (!values.correo) {
    errors.correo = "El correo es obligatorio.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.correo)) {
    errors.correo = "Dirección de correo inválida.";
  }
  return errors;
};

const FormularioVideollamada = ({ onClose }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedServices, setSelectedServices] = useState([]);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowCalendar(false); // Oculta el calendario después de seleccionar una fecha
  };

  const handleServiceToggle = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  return (
    <Formik
      initialValues={{ nombre: "", correo: "" }}
      validate={validateForm}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          const dataToSave = {
            ...values,
            fecha: selectedDate,
            servicios: selectedServices,
          };
          localStorage.setItem("videoCallData", JSON.stringify(dataToSave));
          alert(
            `📅 Agendamos tu reunión para el ${selectedDate.toLocaleDateString("es-ES", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}. Te enviaremos un correo con el enlace para la reunión.`
          );
          setSubmitting(false);
          onClose();
        }, 400);
      }}
    >
      {({ values, isSubmitting }) => (
        <Form className="space-y-6 flex flex-col p-4 w-96 bg-fondo-oscuro rounded-md">
          <div>
            <Field
              type="text"
              name="nombre"
              placeholder="Nombre*"
              className="py-2 px-3 text-sm border rounded bg-fondo-oscuro w-full"
            />
            <ErrorMessage
              name="nombre"
              component="div"
              className="text-sm text-start text-acento-rosa"
            />
          </div>

          <div>
            <Field
              type="email"
              name="correo"
              placeholder="Correo electrónico*"
              className="py-2 px-3 text-sm border rounded bg-fondo-oscuro w-full"
            />
            <ErrorMessage
              name="correo"
              component="div"
              className="text-sm text-start text-acento-rosa"
            />
          </div>

          {/* Servicios seleccionados */}
          {selectedServices.length > 0 && (
            <div className="mt-6 text-center">
              <h4 className="text-sm mb-2 text-white">Servicios seleccionados:</h4>
              <div className="flex flex-wrap gap-2 justify-center border-t border-gray-500 pt-2">
                {selectedServices.map((service) => (
                  <span
                    key={service}
                    onClick={() => handleServiceToggle(service)}
                    className="cursor-pointer px-3 py-1 rounded-full text-sm border border-green-900 hover:bg-green-900/20 transition-colors"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Servicios disponibles */}
          <div className="mt-4">
            <h3 className="text-sm mb-2 text-white text-center">Selecciona los servicios:</h3>
            <div className="flex flex-wrap gap-2 justify-center border-t border-gray-500 pt-2">
              {serviciosDisponibles
                .filter((service) => !selectedServices.includes(service))
                .map((service) => (
                  <span
                    key={service}
                    onClick={() => handleServiceToggle(service)}
                    className="cursor-pointer px-3 py-1 rounded-full text-sm border border-red-900 hover:bg-red-900/20 transition-colors"
                  >
                    {service}
                  </span>
                ))}
            </div>
          </div>

          {/* Calendario para seleccionar la fecha */}
          <div className="flex flex-col items-center">
            <h3 className="text-sm mb-2 text-white">
              Selecciona la fecha para la videollamada:
            </h3>
            <button
              type="button"
              onClick={() => setShowCalendar(!showCalendar)}
              className="px-4 py-2 mt-2 w-full text-center text-sm uppercase tracking-wider font-bold rounded-xl border border-violeta-marca hover:border-violeta-marca hover:bg-violeta-marca/30 hover:text-white transition-colors"
            >
              {selectedDate ? selectedDate.toLocaleDateString("es-ES") : "Seleccionar fecha"}
            </button>
            {showCalendar && (
              <Calendar onChange={handleDateChange} value={selectedDate} />
            )}
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 mt-4 w-full text-center text-sm uppercase tracking-wider font-bold rounded-xl border border-violeta-marca hover:border-violeta-marca hover:bg-violeta-marca/30 hover:text-white transition-colors"
            >
              Agendar Videollamada
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormularioVideollamada;
