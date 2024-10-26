import { useEffect, useState } from "react";
import khaba from "../media/khaba.mp4";
import styles from "../styles/Hajj.module.css";
import { Link } from "react-router-dom";

const Hajj = () => {
  let [year, setYear] = useState(0);

  useEffect(() => {
    let getYear = new Date().getFullYear();
    setYear(getYear);
  });
  return (
    <div className={styles.hajj_container}>
      <video autoPlay loop muted playsInline className={styles.videoBackground}>
        <source src={khaba} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h1
        className={`${styles.custom_size} custom text-center text-white my-32 ${styles.hajj_title}`}
      >
        HAJJ {year}
      </h1>
      <p className={`text-center text-black text-2xl ${styles.outline}`}>
        Merci de votre confiance, et nous sommes impatients de vous accompagner
        sur le chemin du Hajj 2025.
      </p>

      <div className="text-white text-justify p-8 flex flex-col justify-center items-center">
        <p className={`text-black text-xl ${styles.hajj_description}`}>
          Ansar Voyage est ravi d'annoncer le lancement de notre formulaire
          d'intérêt pour le Hajj 2025. Si vous souhaitez rester informé et
          recevoir des mises à jour régulières sur le prochain pèlerinage du
          Hajj, vous êtes au bon endroit ! Il vous suffit de cliquer sur le lien
          ci-dessous pour partager vos informations avec nous, et vous serez
          ajouté à nos mises à jour exclusives sur le Hajj. Veuillez noter que
          ce formulaire d'intérêt ne constitue pas une confirmation pour
          garantir une place au Hajj 2025. Son unique objectif est de vous
          assurer d'être parmi les premiers à recevoir les informations
          essentielles de Ansar Voyage, ainsi que des mises à jour précieuses
          dès qu'elles seront disponibles Chez Ansar Voyage, nous sommes ravis
          de vous tenir informés de tout ce qui concerne le Hajj 2025. Votre
          voyage spirituel commence ici, et nous avons hâte de le partager avec
          vous. Merci de votre confiance, et nous sommes impatients de vous
          accompagner sur le chemin du Hajj 2025.
        </p>

        <button className="bg-green-500 hover:bg-green-600  text-white font-bold py-2 px-4 rounded shadow-md transition duration-300 my-4">
          <Link to="/hajj_packages" state={{ identifier: "hajj" }}>
            Veuillez Sélectionner Votre Forfait
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Hajj;
