import React from "react";
import styles from "../styles/HajjCard.module.css";
import card1 from "../media/card1.png";

const HajjCard = ({ item }) => {
  return (
    <div>
      <div
        className={`w-[100%] !h-[20rem] md:h-[auto] mb-12 md:mb-0 ${styles.flipCard}`}
      >
        <div className={`${styles.flipCardInner} min-h-auto md:min-h-[20rem]`}>
          <div className={styles.flipCardFront}>
            <img src={require(`../media/${item.image}`)} />
          </div>
          <div className={styles.flipCardBack}>
            <p className="px-4 py-2 text-justify">{item.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HajjCard;
