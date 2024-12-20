"use client";

import { useErrorHandler } from "./useErrorHandler";

interface User {
  name: string;
  email: string;
}

export function useAuth() {
  const { handleError } = useErrorHandler();

  const getToken = () => {
    try {
      if (typeof window !== "undefined") {
        return localStorage.getItem("token");
      }
      return null;
    } catch (error) {
      handleError(error, "Erreur lors de la récupération du token");
      return null;
    }
  };

  const getUser = (): User | null => {
    try {
      if (typeof window !== "undefined") {
        const userStr = localStorage.getItem("user");
        return userStr ? JSON.parse(userStr) : null;
      }
      return null;
    } catch (error) {
      handleError(error, "Erreur lors de la lecture des données utilisateur");
      return null;
    }
  };

  const login = (userData: User, token: string) => {
    try {
      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("token", token);
    } catch (error) {
      handleError(
        error,
        "Erreur lors de la sauvegarde des données de connexion"
      );
    }
  };

  const logout = () => {
    try {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    } catch (error) {
      handleError(error, "Erreur lors de la déconnexion");
    }
  };

  const isAuthenticated = () => {
    try {
      return !!getToken() && !!getUser();
    } catch (error) {
      handleError(
        error,
        "Erreur lors de la vérification de l'authentification"
      );
      return false;
    }
  };

  return {
    login,
    logout,
    getToken,
    getUser,
    isAuthenticated,
  };
}
