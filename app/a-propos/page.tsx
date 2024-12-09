import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import React from "react";

export default function APropos() {
  return (
    <div className="relative min-h-screen">
      <Header className="relative z-20" />

      {/* Vidéo en background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
        aria-label="Vidéo de fond montrant des paysages naturels"
      >
        <source
          src="https://videos.pexels.com/video-files/3042473/3042473-uhd_2560_1440_30fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay sombre plus foncé */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-black opacity-90"
        aria-hidden="true"
      ></div>

      {/* Contenu principal */}
      <div></div>
      <div className="relative z-10 flex flex-col justify-center items-center text-center py-12 px-6 space-y-6">
        <h1
          className="text-4xl font-semibold mb-4 text-white"
          style={{ color: "#fff" }}
        >
          À propos d'Animania
        </h1>
        <p
          className="text-lg leading-relaxed text-justify max-w-4xl text-white"
          style={{ lineHeight: "1.6" }}
        >
          Bienvenue sur <span className="text-green-600">Animania</span>, un
          blog créé par quatre étudiants en ingénierie informatique passionnés
          par la technologie et le développement web. Notre objectif est de
          partager nos connaissances, nos projets et nos découvertes dans le
          monde de l'informatique, plus spécifiquement dans les domaines du
          développement
          <span className="text-green-600"> backend</span> et{" "}
          <span className="text-green-600">frontend</span>. Notre projet utilise{" "}
          <span className="text-green-600">Next.js</span> pour la gestion du
          côté serveur et du côté client, avec une base de données
          <span className="text-green-600"> MongoDB</span> pour stocker les
          informations, et un design moderne grâce à{" "}
          <span className="text-green-600">Tailwind CSS</span>.
        </p>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            L'équipe d'Animania
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Carte de membre d'équipe */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl text-green-600">M</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-800">Mehdi</h3>
                  <p className="text-green-600">Développeur Backend</p>
                </div>
              </div>
              <p className="text-gray-600">
                Expert en MongoDB et APIs Next.js, passionné par l'optimisation
                et la performance des systèmes.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl text-green-600">G</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Geremy
                  </h3>
                  <p className="text-green-600">Développeur Backend</p>
                </div>
              </div>
              <p className="text-gray-600">
                Spécialiste des structures de données et de la sécurité des
                APIs.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl text-green-600">K</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-800">Kelly</h3>
                  <p className="text-green-600">Développeuse Frontend</p>
                </div>
              </div>
              <p className="text-gray-600">
                Créatrice d'interfaces utilisateur intuitives et attractives.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl text-green-600">S</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Sébastien
                  </h3>
                  <p className="text-green-600">Développeur Frontend</p>
                </div>
              </div>
              <p className="text-gray-600">
                Expert en animations et design responsive.
              </p>
            </div>
          </div>
        </section>

        <h2 className="text-2xl font-semibold mt-6 text-white">
          Pourquoi Animania ?
        </h2>
        <p className="text-lg leading-relaxed text-justify max-w-4xl text-white">
          Animania est né de notre volonté de partager nos expériences et nos
          projets tout en améliorant nos compétences en développement web. Nous
          avons choisi d'utiliser{" "}
          <span className="text-green-500">Next.js</span> pour sa flexibilité,
          sa rapidité et sa capacité à gérer à la fois le côté serveur et le
          côté client de notre application. En intégrant{" "}
          <span className="text-green-500">MongoDB</span>, nous pouvons
          facilement gérer et manipuler nos données, et avec{" "}
          <span className="text-green-500">Tailwind CSS</span>, nous avons
          l'opportunité de créer un design réactif et moderne.
        </p>
        <p className="text-lg leading-relaxed text-justify max-w-4xl text-white">
          Ce blog est également un moyen pour nous de partager nos
          connaissances, nos défis et nos succès tout au long de notre parcours.
          Vous y trouverez des articles techniques, des tutoriels, ainsi que des
          réflexions sur des sujets liés à la programmation, au développement
          web et aux technologies émergentes.
        </p>

        <h2 className="text-2xl font-semibold mt-6 text-white">
          Rejoignez-nous
        </h2>
        <p className="text-lg leading-relaxed text-justify max-w-4xl text-white">
          Nous vous invitons à suivre notre aventure et à explorer nos articles.
          N'hésitez pas à nous contacter ou à laisser un commentaire si vous
          avez des questions, des suggestions ou des idées de collaboration.
          Vous pouvez également nous suivre sur les réseaux sociaux pour être au
          courant de nos dernières mises à jour.
        </p>
      </div>
      <Footer />
    </div>
  );
}
