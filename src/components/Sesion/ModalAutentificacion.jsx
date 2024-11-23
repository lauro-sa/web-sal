import React, { useState } from "react";
import ModalCustom from "../ModalCustom";

const ModalAutentificacion = ({ isVisible, onClose, onAuthSuccess }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleAuth = async (e) => {
    e.preventDefault();
    const endpoint = isRegister ? "/api/register" : "/api/login";
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
        setError(errorData.error || "Error en la autenticación");
        return;
      }

      const data = await response.json();

      if (!isRegister) {
        onAuthSuccess({
          token: data.token,
          nombreCompleto: data.user.nombreCompleto,
          email: data.user.email,
          lastActiveSession: data.user.lastActive,
        });
      } else {
        alert("Usuario registrado exitosamente");
        setIsRegister(false);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      setError("Error en la solicitud. Intente de nuevo más tarde.");
    }
  };

  return (
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
  );
};

export default ModalAutentificacion;
