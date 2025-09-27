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
  const [isConfirmModalVisible, setIsConfirmModalVisible] = useState(false);

  const handleAuth = async (e) => {
    e.preventDefault();
    setError(null); // Limpiar errores previos

    // La lógica de registro se mantiene, pero la de inicio de sesión se adapta a nuestro sistema de desarrollo
    if (isRegister) {
      // Aquí iría la futura lógica de registro con Firebase u otro servicio.
      // Por ahora, podemos mostrar un mensaje o simplemente no hacer nada.
      setError("La función de registro está desactivada temporalmente.");
      return;
    } else {
      // LÓGICA DE INICIO DE SESIÓN DE DESARROLLO (admin/admin)
      try {
        if (!username || !password) {
          setError("Usuario y contraseña son obligatorios.");
          return;
        }

        // Llamamos a la función 'login' del AuthContext, que ahora es una promesa
        await login(username, password);

        onClose(); // Si el login es exitoso, cerramos el modal

      } catch (errorMsg) {
        // Si la promesa es rechazada (credenciales incorrectas), mostramos el error
        setError(errorMsg);
      }
    }
  };

  return (
    <>
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
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Correo Electrónico*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="py-3 px-2 text-sm border rounded bg-fondo-oscuro w-full"
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
            onClick={() => {
              setIsRegister(!isRegister);
              setError(null); // Limpiar errores al cambiar de modo
            }}
            className="text-violeta-marca cursor-pointer text-center"
          >
            {isRegister
              ? "¿Ya tienes cuenta? Inicia sesión"
              : "¿No tienes cuenta? Regístrate"}
          </p>
        </form>
      </ModalCustom>

      <ModalConfirmacionUsuario
        isVisible={isConfirmModalVisible}
        onClose={() => {
          setIsConfirmModalVisible(false);
        }}
      />
    </>
  );
};

export default ModalAutentificacion;
