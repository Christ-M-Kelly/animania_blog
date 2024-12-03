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
            name: "Posts",
            href: ""
        },
        {
            name: "Contact",
            href: "",
        }
    ];
    return (
        <header className="bg-gradient-to-b from-green-500 to-green-400">
            <div className="container mx-auto flex items-center justify-between py-1">
                <div className="flex flex-row items-center justify-between">
                    <Image src="/images/logo_rbg.png" width={100} height={100} alt="logo = image d'un chien et d'un chat" className="flex items-start" />
                </div>
                <div>
                    <nav>
                        <ul className="flex flex-row space-x-16">
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
            </div>
        </header>
    );
    
}

