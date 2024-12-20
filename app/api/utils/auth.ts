import jwt, { JwtPayload } from "jsonwebtoken";

interface DecodedToken extends JwtPayload {
  exp: number;
  email: string;
  id: string;
  name: string;
}

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

class AuthError extends Error {
  constructor(
    message: string,
    public code: string = "AUTH_ERROR",
    cause?: unknown
  ) {
    super(message);
    this.name = "AuthError";
    this.cause = cause;
  }
}

const AUTH_ERRORS = {
  INVALID_TOKEN: "INVALID_TOKEN",
  STORAGE_ERROR: "STORAGE_ERROR",
  SESSION_EXPIRED: "SESSION_EXPIRED",
  UNAUTHORIZED: "UNAUTHORIZED",
  INVALID_USER_DATA: "INVALID_USER_DATA",
} as const;

export function setAuthToken(token: string) {
  try {
    if (!token) {
      throw new AuthError("Token invalide", AUTH_ERRORS.INVALID_TOKEN);
    }
    localStorage.setItem("token", token);
  } catch (error) {
    throw new AuthError(
      "Erreur lors de la sauvegarde du token",
      AUTH_ERRORS.STORAGE_ERROR,
      error
    );
  }
}

export function getAuthToken(): string | null {
  try {
    return localStorage.getItem("token");
  } catch (error) {
    throw new AuthError(
      "Erreur lors de la récupération du token",
      AUTH_ERRORS.STORAGE_ERROR,
      error
    );
  }
}

export function removeAuthToken() {
  try {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  } catch (error) {
    throw new AuthError(
      "Erreur lors de la suppression des données d'authentification",
      AUTH_ERRORS.STORAGE_ERROR,
      error
    );
  }
}

export function getCurrentUser(): User | null {
  try {
    const userStr = localStorage.getItem("user");
    if (!userStr) return null;

    const user = JSON.parse(userStr);
    if (!user.id || !user.email || !user.name || !user.role) {
      throw new AuthError(
        "Données utilisateur invalides",
        AUTH_ERRORS.INVALID_USER_DATA
      );
    }
    return user;
  } catch (error) {
    if (error instanceof AuthError) {
      throw error;
    }
    throw new AuthError(
      "Erreur lors de la récupération des données utilisateur",
      AUTH_ERRORS.STORAGE_ERROR,
      error
    );
  }
}

export function isAuthenticated(): boolean {
  try {
    const token = getAuthToken();
    if (!token) return false;

    const decoded = jwt.decode(token) as DecodedToken;
    if (!decoded) return false;

    const expirationTime = decoded.exp * 1000;
    const isExpired = Date.now() >= expirationTime;

    if (isExpired) {
      removeAuthToken();
      throw new AuthError("Session expirée", AUTH_ERRORS.SESSION_EXPIRED);
    }

    return true;
  } catch (error) {
    if (
      error instanceof AuthError &&
      error.code === AUTH_ERRORS.SESSION_EXPIRED
    ) {
      throw error;
    }
    throw new AuthError(
      "Erreur lors de la vérification de l'authentification",
      AUTH_ERRORS.UNAUTHORIZED,
      error
    );
  }
}

export async function fetchWithAuth(url: string, options: RequestInit = {}) {
  try {
    const token = getAuthToken();
    if (!token) {
      throw new AuthError("Non authentifié", AUTH_ERRORS.UNAUTHORIZED);
    }

    const headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    };

    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (response.status === 401) {
      removeAuthToken();
      throw new AuthError("Session expirée", AUTH_ERRORS.SESSION_EXPIRED);
    }

    return response;
  } catch (error) {
    if (error instanceof AuthError) {
      throw error;
    }
    throw new AuthError(
      "Erreur lors de la requête authentifiée",
      AUTH_ERRORS.UNAUTHORIZED,
      error
    );
  }
}
