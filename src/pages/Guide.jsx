import Navbar from "../components/Navbar";

const Guide = () => {
  return (
    <div
      className="mx-24 mx-auto p-4 sm:p-8 rounded-lg shadow-lg mx-12 my-4"
      style={{ backgroundColor: "rgba(211, 211, 211,0.6)" }}
    >
      <section id="hajj_guide">
        <p className="text-justify text-xl custom_font_raleway">
          <h2 className="text-4xl">Qu'est-ce que le Hajj</h2>
          <p>
            Le pèlerinage musulman à La Mecque, qui a lieu au dernier mois de
            l'année, doit être accompli au moins une fois dans sa vie par tout
            musulman
          </p>
          <br />

          <p>
            Le Hajj (/hædʒ/ ; arabe : حج‎‎ Ḥaǧǧ « pèlerinage ») est un
            pèlerinage islamique annuel à La Mecque, la ville la plus sainte
            pour les musulmans, et un devoir religieux obligatoire pour les
            musulmans, qui doit être accompli au moins une fois dans leur vie
            par tous les musulmans adultes qui sont physiquement et
            financièrement capables d’entreprendre le voyage et de subvenir aux
            besoins de leur famille pendant leur absence. C'est l'un des cinq
            piliers de l'Islam, aux côtés de la Shahada, de la Salat, de la
            Zakat et du Sawm. Le Hajj est le plus grand rassemblement annuel de
            personnes au monde. L’état de capacité physique et financière
            d’accomplir le Hajj est appelé “istita’ah”, et un musulman qui
            remplit cette condition est appelé “mustati”. Le Hajj est une
            démonstration de la solidarité du peuple musulman et de sa
            soumission à Dieu (Allah). Le mot Hajj signifie « avoir l’intention
            d’un voyage », ce qui évoque à la fois l’acte extérieur d’un voyage
            et l’acte intérieur des intentions.
          </p>
          <br />

          <p>
            Le pèlerinage a lieu du 8 au 12 (ou dans certains cas le 13) de
            “Dhou al-Hijja”, le dernier mois du calendrier islamique. Comme le
            calendrier islamique est lunaire et que l’année islamique est
            environ onze jours plus courts que l’année grégorienne, la date du
            Hajj dans le calendrier grégorien change chaque année. “Ihram” est
            le nom donné à l'état spirituel particulier dans lequel les pèlerins
            portent deux draps blancs de tissu sans couture et s'abstiennent de
            certaines actions.
          </p>
          <br />

          <p>
            Le Hajj est associé à la vie du prophète islamique Mahomet au 7ème
            siècle, mais le rituel du pèlerinage à La Mecque est considéré par
            les musulmans comme remontant à des milliers d'années, à l'époque
            d'Abraham. Pendant le Hajj, les pèlerins se joignent à des
            processions de centaines de milliers de personnes, qui convergent
            simultanément vers La Mecque pour la semaine du Hajj, et
            accomplissent une série de rituels : chaque personne fait sept fois
            le tour de la Kaaba (la structure cubique) dans le sens inverse des
            aiguilles d'une montre (le bâtiment vers lequel les musulmans se
            tournent pour prier), fait des allers-retours entre les collines
            d’Al-Safa et d’Al-Marwah, boit de l'eau du puits Zamzam, se rend
            dans les plaines du mont Arafat pour y veiller, passe une nuit dans
            la plaine de Muzdalifa, et pratique la lapidation symbolique du
            diable en jetant des pierres sur trois piliers. Les pèlerins se
            rasent ensuite la tête, accomplissent un rituel de sacrifice
            d'animaux et célèbrent le festival mondial de trois jours de l'“Aïd
            al-Adha”.
          </p>
          <br />

          <p>
            Les pèlerins peuvent également se rendre à La Mecque pour accomplir
            les rituels à d'autres moments de l'année. C’est ce qu’on appelle
            parfois le « petit pèlerinage, ou “Oumra”. Cependant, même s’ils
            choisissent d’accomplir la Oumra, ils sont toujours obligés
            d’accomplir le Hajj à un autre moment de leur vie s’ils en ont les
            moyens, car la Oumra ne remplace pas le Hajj.
          </p>
          <br />

          <div className="flex flex-col items-center">
            <h1 className="text-3xl">
              Comment effectuer le Hajj – étape par étape
            </h1>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/-sToxly2olM?si=5MKwFHTGLpduoJt9"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </p>
      </section>

      {/* For Umra */}
      <section id="umra_guide" className="mt-24">
        <p className="text-justify text-xl custom_font_raleway">
          <h2 className="text-4xl">Qu'est-ce que la Oumra</h2>
          <p>
            La Oumra (arabe : عمرة‎‎) est un pèlerinage à La Mecque, en Arabie
            Saoudite, effectué par les musulmans et qui peut être entreprise à
            tout moment de l'année, contrairement au Hajj. En arabe, Oumra
            signifie « visiter un lieu peuplé ». Dans la charia, la Oumra
            consiste à accomplir le Tawaf autour de la Kaaba et le Sa'i entre
            Al-Safa et Al-Marwah, après être entré en état d'Ihram (un état
            sacré), à partir d'un Miqat comme Zu 'l-Hulafa, Juhfa,
            Qarnu'l-Manāzil, Yalamlam, Zāt-i-'Irq, Ibrahīm Mursīa, ou un autre
            endroit sur la colline. On l'appelle parfois le « petit pèlerinage
            », par opposition au Hajj, le « grand » pèlerinage, qui est
            obligatoire pour tout musulman valide en ayant les moyens. La Oumra
            n'est pas obligatoire mais est fortement recommandée.
          </p>
          <br />

          <div className="flex flex-col items-center">
            <h1 className="text-3xl">
              Comment effectuer la Oumra – étape par étape
            </h1>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/iwt13G2FcDo?si=Ymz6CN0ssae2AvRx"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </p>
      </section>
    </div>
  );
};

export default Guide;
