import React, { useState, useContext } from "react";
import ModalCustom from "../ModalCustom";
import ModalConfirmacionUsuario from "./ModalConfirmacionUsuario";
import { AuthContext } from "./AuthContext";

const ModalAutentificacion = ({ isVisible, onClose }) => {
  const { login } = useContext(AuthContext);
  const [isRegister, setIsRegister] = useState(false);
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isConfirmModalVisible, setIsConfirmModalVisible] = useState(false); // Estado para el modal de confirmación

  const handleAuth = async (e) => {
    e.preventDefault();

    const endpoint = isRegister
      ? "http://localhost:5000/api/users/register"
      : "http://localhost:5000/api/users/login";

    try {
      const bodyData = isRegister
        ? { nombreCompleto, username, email, password }
        : { username, password };

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error desde el servidor:", errorData.message);
        setError(errorData.message);
        return;
      }

      const data = await response.json();
      console.log("Respuesta del servidor:", data);

      if (!isRegister) {
        // Inicio de sesión exitoso
        login(data.token, {
          id: data.user.id || data.user._id,
          nombreCompleto: data.user.nombreCompleto,
          email: data.user.email,
          lastActiveSession: data.user.lastLogin,
        });

        onClose();
      } else {
        // Registro exitoso, mostrar el modal de confirmación
        setIsConfirmModalVisible(true);
        setIsRegister(false); // Cambiar a modo de inicio de sesión
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      setError("Error en la solicitud. Intenta de nuevo más tarde.");
    }
  };

  return (
    <>
      {/* Modal de autenticación */}
      <ModalCustom isVisible={isVisible} onClose={onClose}>
        <h2 className="text-xl font-bold mb-4 text-center">
          {isRegister ? "Registro" : "Inicio de Sesión"}
        </h2>
        <form
          onSubmit={handleAuth}
          className="w-full max-w-sm mx-auto space-y-4"
        >
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
            <div className="text-red-500 text-sm text-center">{error}</div>
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

      {/* Modal de confirmación de registro */}
      <ModalConfirmacionUsuario
        isVisible={isConfirmModalVisible}
        onClose={() => {
          setIsConfirmModalVisible(false); // Cierra el modal de confirmación
          setIsModalVisible(true); // Vuelve a abrir el modal de autenticación para iniciar sesión
        }}
      />
    </>
  );
};

export default ModalAutentificacion;
