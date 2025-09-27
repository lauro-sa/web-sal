// PFI | FULL STACK AVANZADO - Consigna de trabajo final integrador.
// Este archivo define el contexto de autenticación y provee un proveedor para manejar el estado de autenticación globalmente en la aplicación React.

import React, { createContext, useState, useEffect } from "react";

// Creación del contexto de autenticación
export const AuthContext = createContext();

// Proveedor del contexto que gestiona el estado de autenticación y la información del usuario
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // Efecto para verificar si ya existe una sesión en localStorage al cargar la app
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken && storedUser) {
      setIsAuthenticated(true);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Función para manejar el inicio de sesión (versión de desarrollo)
  const login = (email, password) => {
    return new Promise((resolve, reject) => {
      // Simulación de verificación de credenciales
      if (email === "admin" && password === "admin") {
        console.log("Inicio de sesión de desarrollo exitoso para 'admin'");

        // Crear datos de usuario falsos
        const fakeUserData = {
          id: "admin-id-01",
          email: "admin@dominio.com",
          nombre: "Administrador",
        };

        // Crear un token falso
        const fakeToken = "fake-jwt-token-for-admin-session";

        // Guardar en localStorage para persistir la sesión
        localStorage.setItem("token", fakeToken);
        localStorage.setItem("user", JSON.stringify(fakeUserData));

        // Actualizar el estado de la aplicación
        setIsAuthenticated(true);
        setUser(fakeUserData);
        
        resolve("¡Inicio de sesión exitoso!");

      } else {
        console.log("Credenciales de desarrollo incorrectas");
        // Rechazar la promesa con un mensaje de error
        reject("Credenciales incorrectas. Por favor, intente de nuevo.");
      }
    });
  };

  // Función para manejar el cierre de sesión, eliminando los datos de localStorage
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    setUser(null);
    console.log("Sesión de desarrollo cerrada.");
  };

  // Proveedor del contexto que expone el estado de autenticación y las funciones
  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
