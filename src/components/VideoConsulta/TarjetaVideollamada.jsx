import React, { useState, useEffect, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { motion, AnimatePresence } from "framer-motion";
import Calendar from "react-calendar";
import "./Calendar.css";
import { FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";

// Hook para detectar si es un dispositivo móvil
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handleResize = (e) => setIsMobile(e.matches);
    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleResize);
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);
  return isMobile;
};

const cardAnimation = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
  exit: { opacity: 0, y: 20, scale: 0.98, transition: { duration: 0.15, ease: "easeIn" } },
};

const modalAnimation = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.15, ease: "easeIn" } },
}

const serviciosDisponibles = ["Consultoría", "Desarrollo Web", "Mantenimiento", "Soporte", "Apps Móviles"];

const FormularioVideollamada = ({ onAgendar, onClose }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedServices, setSelectedServices] = useState([]);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const isMobile = useIsMobile();
  const servicesRef = useRef(null);

  // Cierre automático del selector de servicios al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setShowServices(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Formik
      initialValues={{ nombre: "", correo: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.nombre) errors.nombre = "Tu nombre es necesario.";
        if (!values.correo) errors.correo = "El correo es obligatorio.";
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.correo))
          errors.correo = "Correo inválido.";
        if (!selectedDate) errors.fecha = "Elige una fecha.";
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        onAgendar({ ...values, fecha: selectedDate, servicios: selectedServices });
        setSubmitting(false);
        onClose();
      }}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form className="flex flex-col space-y-3 p-1 text-sm">
          <Field name="nombre" placeholder="Nombre completo" className={`w-full p-2 bg-gray-800/50 rounded-lg border ${touched.nombre && errors.nombre ? 'border-red-500' : 'border-violeta-marca/30'} focus:outline-none focus:ring-2 focus:ring-violeta-marca text-sm`}/>
          <ErrorMessage name="nombre" component="div" className="text-red-400 text-xs -mt-2 ml-2" />
          <Field name="correo" type="email" placeholder="Correo electrónico" className={`w-full p-2 bg-gray-800/50 rounded-lg border ${touched.correo && errors.correo ? 'border-red-500' : 'border-violeta-marca/30'} focus:outline-none focus:ring-2 focus:ring-violeta-marca text-sm`}/>
          <ErrorMessage name="correo" component="div" className="text-red-400 text-xs -mt-2 ml-2" />

          <div className="relative" ref={servicesRef}>
            <button type="button" onClick={() => setShowServices(!showServices)} className="w-full flex justify-between items-center p-2 bg-gray-800/50 rounded-lg border border-violeta-marca/30 text-sm">
              <span>{selectedServices.length > 0 ? `${selectedServices.length} servicios` : "Seleccionar servicios"}</span>
              {showServices ? <FiChevronUp size={16}/> : <FiChevronDown size={16}/>}
            </button>
            <AnimatePresence>
            {showServices && (
              <motion.div initial={{opacity: 0, y: -10}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -10}} className="absolute z-10 w-full bottom-full mb-1 bg-gray-900 border border-violeta-marca/50 rounded-lg p-1 max-h-36 overflow-y-auto text-sm">
                {serviciosDisponibles.map(service => (
                  <label key={service} className="flex items-center space-x-2 p-1.5 hover:bg-violeta-marca/20 rounded-md cursor-pointer">
                    <input type="checkbox" checked={selectedServices.includes(service)} onChange={() => setSelectedServices(prev => prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service])} className="form-checkbox h-3 w-3 text-violeta-marca bg-gray-800 border-gray-600 rounded focus:ring-violeta-marca"/>
                    <span>{service}</span>
                  </label>
                ))}
              </motion.div>
            )}
            </AnimatePresence>
          </div>

          <div className="relative">
            <button type="button" onClick={() => setShowCalendar(true)} className={`w-full p-2 bg-gray-800/50 rounded-lg border ${touched.fecha && errors.fecha ? 'border-red-500' : 'border-violeta-marca/30'} focus:outline-none text-sm`}>
              {selectedDate ? `Fecha: ${selectedDate.toLocaleDateString('es-ES')}` : "Seleccionar fecha"}
            </button>
            <AnimatePresence>
            {showCalendar && (
                isMobile ? (
                  <motion.div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} onClick={() => setShowCalendar(false)}>
                    <motion.div initial={{scale: 0.9}} animate={{scale: 1}} exit={{scale: 0.9}} onClick={(e) => e.stopPropagation()}>
                      <Calendar onChange={(date) => { setSelectedDate(date); setShowCalendar(false); }} value={selectedDate} className="dark-calendar" tileDisabled={({date}) => date.getDay() === 0 || date < new Date() }/>
                    </motion.div>
                  </motion.div>
                ) : (
                <motion.div initial={{opacity: 0, y: -10}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -10}} className="absolute z-20 bottom-full mb-1 right-0">
                  <Calendar onChange={(date) => { setSelectedDate(date); setShowCalendar(false); }} value={selectedDate} className="dark-calendar" tileDisabled={({date}) => date.getDay() === 0 || date < new Date() }/>
                </motion.div>
              )
            )}
            </AnimatePresence>
          </div>
          <ErrorMessage name="fecha" component="div" className="text-red-400 text-xs -mt-2 ml-2" />

          <button type="submit" disabled={isSubmitting} className="w-full p-2 bg-violeta-marca rounded-lg font-bold hover:bg-violeta-marca/80 transition-colors disabled:opacity-50 text-sm">
            Agendar Cita
          </button>
        </Form>
      )}
    </Formik>
  );
};

const TarjetaVideollamada = ({ isVisible, onAgendar, onClose, savedData, onReset }) => {
  const isMobile = useIsMobile();

  if (!isVisible) return null;

  const cardContent = (
    <>
      <div className="flex justify-between items-center p-3 border-b border-violeta-marca/20">
        <h3 className="font-bold text-base">Agendar Videollamada</h3>
        <button onClick={onClose} className="p-1 hover:bg-violeta-marca/20 rounded-full"><FiX size={18} /></button>
      </div>
      <div className="p-3">
        {savedData ? (
          <div className="text-xs space-y-2">
            <h4 className="font-bold text-center mb-1 text-sm">Ya tienes una cita agendada</h4>
            <p><span className="font-semibold">Nombre:</span> {savedData.nombre}</p>
            <p><span className="font-semibold">Correo:</span> {savedData.correo}</p>
            <p><span className="font-semibold">Fecha:</span> {new Date(savedData.fecha).toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' })}</p>
            {savedData.servicios.length > 0 && <p><span className="font-semibold">Servicios:</span> {savedData.servicios.join(', ')}</p>}
            <button onClick={onReset} className="w-full mt-2 p-2 bg-red-600/50 rounded-lg font-bold hover:bg-red-600/80 transition-colors text-sm">Agendar otra cita</button>
          </div>
        ) : (
          <FormularioVideollamada onAgendar={onAgendar} onClose={onClose} />
        )}
      </div>
    </>
  );

  return (
    isMobile ? (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50" onClick={onClose}>
             <motion.div
                className="w-[calc(100vw-2rem)] max-w-sm flex flex-col text-white bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-violeta-marca/30 shadow-2xl shadow-violeta-marca/20"
                variants={modalAnimation}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
            >
                {cardContent}
            </motion.div>
        </div>
    ) : (
        <motion.div
            className="fixed bottom-20 z-40 right-24 w-64 max-w-[calc(100vw-3rem)] flex flex-col text-white bg-black/30 backdrop-blur-xl rounded-2xl border border-violeta-marca/30 shadow-2xl shadow-violeta-marca/20"
            variants={cardAnimation}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            {cardContent}
        </motion.div>
    )
  );
};

export default TarjetaVideollamada;
