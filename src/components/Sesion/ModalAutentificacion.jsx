// ModalAutentificacion.js
// Componente React para manejar la autenticación de usuarios (registro e inicio de sesión).

import React, { useState, useContext } from "react";
import ModalCustom from "../ModalCustom";
import ModalConfirmacionUsuario from "./ModalConfirmacionUsuario";
import { AuthContext } from "./AuthContext";

const ModalAutentificacion = ({ isVisible, onClose }) => {
  const { login } = useContext(AuthContext); // Contexto de autenticación
  const [isRegister, setIsRegister] = useState(false); // Controla si el formulario es de registro o login
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // Manejo de errores
  const [isConfirmModalVisible, setIsConfirmModalVisible] = useState(false); // Modal de confirmación de registro

  // Base URL del servidor
  const baseURL = "http://localhost:3002"; // Cambia a la URL de tu servidor si no es localhost

  // Función para manejar el registro y login
  const handleAuth = async (e) => {
    e.preventDefault();
    const endpoint = isRegister ? `${baseURL}/api/register` : `${baseURL}/api/login`; // Endpoint correcto según el formulario

    try {
      const bodyData = isRegister
        ? { nombreCompleto, username, email, password }
        : { username, password };

      // Realiza la solicitud al servidor
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyData),
      });

      // Verifica si la respuesta no es OK (error en el servidor)
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: "Error desconocido" }));
        setError(errorData.error || "Error en la autenticación");
        return;
      }

      // Procesa la respuesta si es exitosa
      const data = await response.json();

      if (!isRegister) {
        // Inicio de sesión exitoso
        login(data.token, {
          nombreCompleto: data.user.nombreCompleto,
          email: data.user.email,
          lastActiveSession: data.user.lastActive,
        });
        onClose(); // Cierra el modal
      } else {
        // Registro exitoso
        setIsConfirmModalVisible(true); // Muestra el modal de confirmación
        setIsRegister(false); // Cambia al formulario de login
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      setError("Error en la solicitud. Intente de nuevo más tarde.");
    }
  };

  return (
    <>
      <ModalCustom isVisible={isVisible} onClose={onClose}>
        <h2 className="text-xl font-bold mb-4 text-center">
          {isRegister ? "Registro" : "Inicio de Sesión"}
        </h2>
        <form onSubmit={handleAuth} className="w-full max-w-sm mx-auto space-y-4">
          {isRegister && (
            <>
              <div>
                <input
                  type="text"
                  placeholder="Nombre Completo*"
                  value={nombreCompleto}
                  onChange={(e) => setNombreCompleto(e.target.value)}
                  className="py-3 px-2 text-sm border rounded bg-fondo-oscuro w-full"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Correo Electrónico*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="py-3 px-2 text-sm border rounded bg-fondo-oscuro w-full"
                  required
                />
              </div>
            </>
          )}
          <div>
            <input
              type="text"
              placeholder="Usuario*"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="py-3 px-2 text-sm border rounded bg-fondo-oscuro w-full"
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Contraseña*"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="py-3 px-2 text-sm border rounded bg-fondo-oscuro w-full"
              required
            />
          </div>
          {error && (
            <div className="text-red-500 text-sm text-center">
              {error}
            </div>
          )}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 mt-4 text-center text-sm uppercase tracking-wider font-bold rounded-xl border border-violeta-marca hover:border-violeta-marca hover:bg-violeta-marca/30 hover:text-white transition-colors"
            >
              {isRegister ? "Registrarse" : "Iniciar Sesión"}
            </button>
          </div>
          <p
            onClick={() => setIsRegister(!isRegister)}
            className="text-violeta-marca cursor-pointer text-center"
          >
            {isRegister
              ? "¿Ya tienes cuenta? Inicia sesión"
              : "¿No tienes cuenta? Regístrate"}
          </p>
        </form>
      </ModalCustom>

      {/* Modal de confirmación de registro exitoso */}
      <ModalConfirmacionUsuario
        isVisible={isConfirmModalVisible}
        onClose={() => setIsConfirmModalVisible(false)}
      />
    </>
  );
};

export default ModalAutentificacion;
