"use client";
<<<<<<< HEAD

import { useErrorHandler } from "./useErrorHandler";
=======
>>>>>>> 108f84205b2fb17193a7c96d7ac6c52f3878318b

interface User {
  name: string;
  email: string;
}

export function useAuth() {
  const { handleError } = useErrorHandler();

  const getToken = () => {
<<<<<<< HEAD
    try {
      if (typeof window !== "undefined") {
        return localStorage.getItem("token");
      }
      return null;
    } catch (error) {
      handleError(error, "Erreur lors de la récupération du token");
      return null;
=======
    if (typeof window !== "undefined") {
      return localStorage.getItem("token");
>>>>>>> 108f84205b2fb17193a7c96d7ac6c52f3878318b
    }
  };

  const getUser = (): User | null => {
<<<<<<< HEAD
    try {
      if (typeof window !== "undefined") {
        const userStr = localStorage.getItem("user");
        return userStr ? JSON.parse(userStr) : null;
=======
    if (typeof window !== "undefined") {
      const userStr = localStorage.getItem("user");
      try {
        return userStr ? JSON.parse(userStr) : null;
      } catch (error) {
        console.error(
          "Erreur lors de la lecture des données utilisateur:",
          error
        );
        return null;
>>>>>>> 108f84205b2fb17193a7c96d7ac6c52f3878318b
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
<<<<<<< HEAD
    } catch (error) {
      handleError(
        error,
        "Erreur lors de la sauvegarde des données de connexion"
      );
=======
      localStorage.setItem("userName", userData.name);
    } catch (error) {
      console.error("Erreur lors de la sauvegarde des données:", error);
>>>>>>> 108f84205b2fb17193a7c96d7ac6c52f3878318b
    }
  };

  const logout = () => {
<<<<<<< HEAD
    try {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    } catch (error) {
      handleError(error, "Erreur lors de la déconnexion");
    }
=======
    localStorage.removeItem("user");
    localStorage.removeItem("token");
>>>>>>> 108f84205b2fb17193a7c96d7ac6c52f3878318b
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
