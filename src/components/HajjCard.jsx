import React from "react";
import styles from "../styles/HajjCard.module.css";
import card1 from "../media/card1.png";

const HajjCard = () => {
  return (
    <div>
      <div className={`w-[100%] ${styles.flipCard}`}>
        <div className={styles.flipCardInner}>
          <div className={styles.flipCardFront}>
            <img src={card1} alt="Card1" />
          </div>
          <div className={styles.flipCardBack}>
            {/* <p className={styles.title}>BACK</p> */}
            <p>
              Le programme 1 commence à Médine, où vous serez logé dans un hôtel
              à moins d'1 km de la mosquée du Prophète Muhammad ﷺ. Ensuite, vous
              serez transféré dans un hôtel à moins d'1 km de la Kaaba à La
              Mecque. Vous y serez hébergé et conserverez votre chambre à La
              Mecque pendant les Manasik. Après les Manasik, vous resterez à La
              Mecque jusqu'à votre transfert à l'aéroport de Djeddah pour votre
              vol de départ.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HajjCard;
