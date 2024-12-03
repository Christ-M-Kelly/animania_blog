import Link from "next/link";
import Image from "next/image";
import jwt_decode from "jwt-decode";

export default function Header() {
  // Fonction pour vérifier si le token est valide
  const isTokenValid = () => {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
    if (token) {
      try {
        const decodedToken: any = jwt_decode(token);
        const currentTime = Math.floor(Date.now() / 1000); // Temps actuel en secondes
        return decodedToken.exp > currentTime; // Vérifie si le token est expiré
      } catch (error) {
        return false; // Si une erreur se produit, le token est invalide
      }
    }
    return false;
  };

  const userName = typeof window !== "undefined" ? localStorage.getItem("userName") : null;

  // Vérification de l'état de l'authentification
  const isAuthenticated = isTokenValid();

  const menu_navigation = [
    {
      name: "Accueil",
      href: "/",
    },
    {
      name: "A propos",
      href: "/a-propos",
    },
    {
      name: "Posts",
      href: "",
    },
    {
      name: "Contact",
      href: "",
    },
  ];

  // Fonction de déconnexion
  const handleLogout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("token");
    window.location.reload(); // Recharger la page pour mettre à jour l'interface
  };

  return (
    <header className="bg-gradient-to-b from-green-500 to-green-400">
      <div className="container mx-auto flex items-center justify-between py-2">
        {/* Section gauche avec logo */}
        <div className="flex items-center space-x-4">
          <Image
            src="/images/logo_rbg.png"
            width={100}
            height={100}
            alt="logo = image d'un chien et d'un chat"
          />
          <nav>
            <ul className="flex flex-row space-x-12">
              {menu_navigation.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white hover:underline">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Barre de recherche et bouton se connecter */}
        <div className="relative flex items-center space-x-4">
          {/* Si l'utilisateur est connecté, afficher son nom ou un bouton de déconnexion */}
          {isAuthenticated ? (
            <>
              <div className="text-white font-semibold">{`Bonjour, ${userName}`}</div>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300"
              >
                Se déconnecter
              </button>
            </>
          ) : (
            <Link
              href="/connexion" // Lien vers la page de connexion
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 ml-[-500px]"
            >
              Se connecter
            </Link>
          )}

          {/* Barre de recherche */}
          <input
            type="text"
            placeholder="Rechercher..."
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>
    </header>
  );
}
