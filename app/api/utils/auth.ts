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

export function setAuthToken(token: string) {
  localStorage.setItem("token", token);
}

export function getAuthToken(): string | null {
  return localStorage.getItem("token");
}

export function removeAuthToken() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
}

export function getCurrentUser(): User | null {
  const userStr = localStorage.getItem("user");
  if (!userStr) return null;
  try {
    return JSON.parse(userStr);
  } catch {
    return null;
  }
}

export function isAuthenticated(): boolean {
  const token = getAuthToken();
  if (!token) return false;

  try {
    const decoded = jwt.decode(token) as DecodedToken;
    if (!decoded) return false;

    const expirationTime = decoded.exp * 1000;
    return Date.now() < expirationTime;
  } catch {
    return false;
  }
}

export async function fetchWithAuth(url: string, options: RequestInit = {}) {
  const token = getAuthToken();
  if (!token) {
    throw new Error("Non authentifié");
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
    window.location.href = "/connexion";
    throw new Error("Session expirée");
  }

  return response;
}
