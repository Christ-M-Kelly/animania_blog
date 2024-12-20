import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

// Routes qui nécessitent une authentification
const protectedRoutes = ["/dashboard", "/profile", "/creer-article"];

// Routes publiques (pas besoin d'authentification)
const publicRoutes = ["/", "/connexion", "/formulaire_inscription", "/galerie"];

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  // Vérifier si c'est une route protégée
  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    if (!token) {
      console.log("Pas de token, redirection vers connexion");
      return NextResponse.redirect(new URL("/connexion", request.url));
    }

    try {
      // Vérifier le token
      const secret = new TextEncoder().encode(
        process.env.JWT_SECRET || "your-secret-key"
      );
      const verified = await jwtVerify(token, secret);

      if (!verified.payload) {
        console.log("Token invalide");
        throw new Error("Token invalide");
      }

      console.log("Token vérifié avec succès");
      return NextResponse.next();
    } catch (error) {
      console.log("Erreur de vérification du token:", error);
      // Token invalide ou expiré - Supprimer le cookie
      const response = NextResponse.redirect(
        new URL("/connexion", request.url)
      );
      response.cookies.delete("token");
      return response;
    }
  }

  // Pour les routes publiques, laisser passer
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // Par défaut, protéger toutes les autres routes
  if (!token) {
    return NextResponse.redirect(new URL("/connexion", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
