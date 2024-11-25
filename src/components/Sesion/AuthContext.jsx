// PFI | FULL STACK AVANZADO - Consigna de trabajo final integrador.
// Este archivo define el contexto de autenticación y provee un proveedor para manejar el estado de autenticación globalmente en la aplicación React.

import React, { createContext, useState, useEffect } from "react";

// Creación del contexto de autenticación
export const AuthContext = createContext();

// Proveedor del contexto que gestiona el estado de autenticación y la información del usuario
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // Efecto para verificar el token y los datos del usuario almacenados en localStorage al cargar el componente
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    // Si existen token y datos del usuario, se actualizan los estados correspondientes
    if (storedToken && storedUser) {
      setIsAuthenticated(true);
      setUser(JSON.parse(storedUser));
    }

    // Manejador de eventos para cambios en el almacenamiento local, asegura que el estado de autenticación se mantenga actualizado
    const handleStorageChange = () => {
      const updatedToken = localStorage.getItem("token");
      const updatedUser = localStorage.getItem("user");

      setIsAuthenticated(!!updatedToken);
      setUser(updatedUser ? JSON.parse(updatedUser) : null);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Función para manejar el inicio de sesión, almacenando el token y los datos del usuario en localStorage
  const login = (token, userData) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));
    setIsAuthenticated(true);
    setUser(userData);
  };

  // Función para manejar el cierre de sesión, eliminando el token y los datos del usuario de localStorage
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    setUser(null);
  };

  // Proveedor del contexto que expone el estado de autenticación y las funciones para modificarlo
  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
