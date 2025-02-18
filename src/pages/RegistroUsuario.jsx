import React, { useState } from "react";

const RegistroUsuario = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState(null);

  // Actualiza la URL base según tu entorno en Google Cloud Workstations
  const baseURL = "https://3002-idx-web-sal-1733058959593.cluster-kc2r6y3mtba5mswcmol45orivs.cloudworkstations.dev";
  const endpoint = `${baseURL}/api/register`;
  

  const handleRegistro = async (e) => {
    e.preventDefault();
    setMensaje(null);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({ error: "Error desconocido" }));
        setMensaje(data.error || "Error al registrar el usuario.");
        return;
      }

      const data = await response.json();
      setMensaje(data.message || "Usuario registrado exitosamente.");
    } catch (error) {
      console.error("Error en la solicitud:", error);
      setMensaje("Error en la conexión. Intente nuevamente más tarde.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleRegistro}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-sm"
      >
        <h2 className="text-center text-xl font-bold mb-4">Registro de Usuario</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Usuario
          </label>
          <input
            id="username"
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Correo Electrónico
          </label>
          <input
            id="email"
            type="email"
            placeholder="Correo Electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        {mensaje && (
          <p className="text-center text-sm text-red-500 mb-4">{mensaje}</p>
        )}
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistroUsuario;
