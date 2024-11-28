import Link from "next/link";
import Image from "next/image";

export default function Header (){

    const menu_navigation = [
        {
            name: "Accueil",
            href: "/",
        },
        {
            name: "A propos", //
            href: "/a-propos",
        },
        {
            name: "Blogs",
            href: ""
        },
        {
            name: "Contact",
            href: "",
        }
    ];
    return (
        <header className="bg-gradient-to-b from-green-500 to-green-300">
            <div>
                <Image src="/images/logo_rbg.png" />
            </div>
            <div>
                <nav>
                    <ul className="flex space-x-4">
                        {
                            menu_navigation.map((link)=> 
                                (
                                <li key={link.name}>
                                    <Link href={link.href}>
                                        {link.name}
                                    </Link>
                                </li> 
                                )
                            )
                        }
                    </ul>
                </nav>
            </div>
        </header>
    );
    
}

