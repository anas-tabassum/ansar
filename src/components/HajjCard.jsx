import React from "react";
import styles from "../styles/HajjCard.module.css";
import { Link } from "react-router-dom";

const HajjCard = ({ item }) => {
  return (
    <div>
      <div
        className={`w-[100%] !h-[23rem] md:h-[auto] mb-12 md:mb-0 ${styles.flipCard}`}
      >
        <div className={`${styles.flipCardInner} min-h-auto md:min-h-[20rem]`}>
          <div className={styles.flipCardFront}>
            <img src={require(`../media/${item.image}`)} />
          </div>
          <div className={styles.flipCardBack}>
            <p className="px-4 py-2 text-justify">{item.text}</p>
            <button class="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
              <Link to={`/${item.page}`}>Détails du Forfait</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HajjCard;
