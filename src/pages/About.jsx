import Navbar from "../components/Navbar";
import image from "../media/holy1.jpg";
import UmraBackground from "../components/UmraBackground";
import video from "../media/sheikh_zayad_mosque.mp4";

const About = () => {
  return (
    <div
      className="mx-24 mx-auto mx-12 text-xl text-justify"
      style={{ wordSpacing: "8px" }}
    >
      <div className="flex justify-center">
        <UmraBackground video={video} />
      </div>
      <p className="mt-8 mb-4 px-4 absolute bottom-5 top-[15%] sm:top-[unset]">
        La philosophie d’Ansar Voyage est de maintenir les normes les plus
        élevées en matière de service client personnalisé. Nous nous engageons à
        rester une ressource précieuse pour nos clients en offrant commodité,
        confort et économies. Notre objectif est de fournir une expérience
        professionnelle et sur mesure à chaque client. « Amener le client de
        l'obscurité à la lumière dans l'industrie du voyage » Chez Ansar Voyage,
        la confiance, le service et la diversité ont toujours été au cœur de
        notre relation avec nos clients. C'est pourquoi informer nos clients est
        notre priorité numéro un. Avec 4 bureaux et une volonté d'expansion,
        nous disposons de nombreux agents qui prennent le temps d'expliquer à
        chaque client toutes ses options avant son départ. Les rayures de notre
        logo symbolisent cet engagement : elles illustrent notre mission de
        faire passer chaque client de « l’obscurité » à la « lumière », en lui
        offrant la meilleure expérience de voyage possible.
      </p>
    </div>
  );
};

export default About;
