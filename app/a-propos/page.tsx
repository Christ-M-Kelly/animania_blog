import React from "react";

export default function APropos() {
  return (
    <div className="relative min-h-screen">
      {/* Vidéo en background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="https://videos.pexels.com/video-files/3042473/3042473-uhd_2560_1440_30fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay sombre plus foncé */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80"></div>

      {/* Contenu principal */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center py-12 px-6 space-y-6">
        <h1 className="text-4xl font-semibold mb-4 text-white">À propos d'Animania</h1>
        <p className="text-lg leading-relaxed text-justify max-w-4xl text-white">
          Bienvenue sur <span className="text-green-500">Animania</span>, un blog créé par quatre étudiants en ingénierie informatique passionnés par la technologie et le développement web.
          Notre objectif est de partager nos connaissances, nos projets et nos découvertes dans le monde de l'informatique, plus spécifiquement dans les domaines du développement
          <span className="text-green-500"> backend</span> et <span className="text-green-500">frontend</span>. Notre projet utilise <span className="text-green-500">Next.js</span> pour la gestion du côté serveur et du côté client, avec une base de données
          <span className="text-green-500"> MongoDB</span> pour stocker les informations, et un design moderne grâce à <span className="text-green-500">Tailwind CSS</span>.
        </p>

        <h2 className="text-2xl font-semibold mt-6 text-white">L'équipe d'Animania</h2>
        <p className="text-lg leading-relaxed text-justify max-w-4xl text-white">
          Nous sommes un groupe d’étudiants qui avons décidé de mettre nos compétences à l'épreuve en créant ce blog. Chaque membre de notre équipe se spécialise dans un domaine spécifique du développement web. Voici un peu plus sur chacun de nous :
        </p>

        <div className="space-y-4 mt-6 max-w-4xl text-justify text-white">
          <p>
            <span className="font-semibold">Mehdi</span> - Développeur Backend: Je suis <span className="text-green-500">Mehdi</span>, étudiant en génie informatique avec une passion pour les technologies backend. Dans ce projet, je me concentre sur la gestion de la base de données avec <span className="text-green-500">MongoDB</span> et la création des API en <span className="text-green-500">Next.js</span> pour permettre une interaction fluide entre le frontend et la base de données. J'aime résoudre des problèmes complexes et optimiser les systèmes pour assurer leur performance.
          </p>
          <p>
            <span className="font-semibold">Geremy</span> - Développeur Backend: Salut ! Je suis <span className="text-green-500">Geremy</span>, étudiant débutant en <span className="text-green-500">backend</span>. Mon rôle sur ce projet est de créer des structures de données robustes et de m'assurer que nos API sont sécurisées et performantes. En utilisant <span className="text-green-500">Next.js</span> et <span className="text-green-500">MongoDB</span>, je travaille à la conception des fonctionnalités qui permettent à Animania de fonctionner de manière fluide et rapide pour nos utilisateurs.
          </p>
          <p>
            <span className="font-semibold">Kelly</span> - Développeuse Frontend: Je m'appelle <span className="text-green-500">Kelly</span>, et je suis passionnée par le développement <span className="text-green-500">frontend</span>. Dans ce projet, je travaille à créer une interface utilisateur (UI) intuitive et attractive, en utilisant <span className="text-green-500">Next.js</span> et <span className="text-green-500">Tailwind CSS</span>. Mon objectif est de rendre l'expérience utilisateur aussi agréable que possible tout en optimisant la performance du site.
          </p>
          <p>
            <span className="font-semibold">Sébastien</span> - Développeur Frontend: Salut, je suis <span className="text-green-500">Sébastien</span> ! Je m'occupe également du <span className="text-green-500">frontend</span> d'Animania. Je me concentre sur la mise en place des animations, de la navigation et de la conception responsive pour que notre blog fonctionne parfaitement sur tous les types de dispositifs. Avec <span className="text-green-500">Tailwind CSS</span>, nous avons réussi à créer un design moderne et épuré qui met en valeur notre contenu.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-6 text-white">Pourquoi Animania ?</h2>
        <p className="text-lg leading-relaxed text-justify max-w-4xl text-white">
          Animania est né de notre volonté de partager nos expériences et nos projets tout en améliorant nos compétences en développement web. Nous avons choisi d'utiliser <span className="text-green-500">Next.js</span> pour sa flexibilité, sa rapidité et sa capacité à gérer à la fois le côté serveur et le côté client de notre application. En intégrant <span className="text-green-500">MongoDB</span>, nous pouvons facilement gérer et manipuler nos données, et avec <span className="text-green-500">Tailwind CSS</span>, nous avons l'opportunité de créer un design réactif et moderne.
        </p>
        <p className="text-lg leading-relaxed text-justify max-w-4xl text-white">
          Ce blog est également un moyen pour nous de partager nos connaissances, nos défis et nos succès tout au long de notre parcours. Vous y trouverez des articles techniques, des tutoriels, ainsi que des réflexions sur des sujets liés à la programmation, au développement web et aux technologies émergentes.
        </p>

        <h2 className="text-2xl font-semibold mt-6 text-white">Rejoignez-nous</h2>
        <p className="text-lg leading-relaxed text-justify max-w-4xl text-white">
          Nous vous invitons à suivre notre aventure et à explorer nos articles. N'hésitez pas à nous contacter ou à laisser un commentaire si vous avez des questions, des suggestions ou des idées de collaboration. Vous pouvez également nous suivre sur les réseaux sociaux pour être au courant de nos dernières mises à jour.
        </p>
      </div>
    </div>
  );
}
