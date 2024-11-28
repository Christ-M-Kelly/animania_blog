import Link from "next/link";
import Image from "next/image";

interface NavLink {
  name: string;
  href: string;
}

export default function C_Footer() {
  const navLinks: NavLink[] = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/a-propos" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-white py-6 fixed bottom-0 w-full">
      <div className="container mx-auto px-8">
        <div className="flex flex-row items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
          >
            <Image
              src="/images/logo_rbg.png"
              alt="Logo Animania - Où chaque créature raconte une histoire"
              width={55}
              height={55}
              className="rounded-full border-2 border-white shadow-lg hover:scale-105 transition-transform duration-300 bg-white"
            />
            <h3 className="text-lg font-bold text-black font-serif">
              Animania
            </h3>
          </Link>
          <nav className="absolute left-1/2 transform -translate-x-1/2">
            <ul className="flex flex-row space-x-28">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-black hover:text-green-300 hover:underline transition-colors duration-200 text-lg"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
