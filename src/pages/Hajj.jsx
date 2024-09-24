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
      <p className={`text-center text-black text-xl ${styles.outline}`}>
        START YOUR JOURNEY TODAY
      </p>

      <div className="text-white text-justify p-8 flex flex-col justify-center items-center">
        <p className={`text-black ${styles.hajj_description}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          obcaecati aspernatur architecto qui repudiandae iure impedit fuga.
          Nam, id ab laborum sed mollitia, numquam est error eum, ex harum
          itaque animi rerum doloribus cumque illo ratione quae sit repellat
          magni ducimus explicabo modi suscipit? Suscipit neque iste cum vitae
          animi, sit unde sed minima alias et pariatur porro, quod ab ut
          reiciendis quo odit quisquam aliquid saepe inventore tempore. Adipisci
          possimus eaque iste ducimus? Laboriosam in totam quas et at labore eum
          laborum sapiente beatae facere amet, odio ipsam fugiat numquam quaerat
          ratione assumenda enim aliquid doloremque doloribus necessitatibus
          maxime! Doloremque atque, nisi molestiae quia incidunt corporis
          debitis a laudantium placeat pariatur ex consequatur optio iure, quod
          reprehenderit repellendus numquam architecto consectetur, non
          veritatis vero doloribus nulla odio! Labore, aliquid obcaecati magni
          nostrum illo dolores cupiditate possimus esse. Nam aut ullam a harum,
          cupiditate soluta consectetur quaerat cum commodi exercitationem
          laudantium praesentium reprehenderit quas neque earum in! Placeat
          expedita beatae consequuntur dignissimos maiores dicta asperiores
          libero fuga quasi, voluptatem tempore illo corrupti laboriosam quod
          perspiciatis perferendis fugiat doloribus maxime amet, aliquid, aut
          iste reprehenderit autem necessitatibus. Nisi recusandae vel assumenda
          fugit, qui facilis debitis quaerat amet ad, at optio alias asperiores
          adipisci quis necessitatibus! Officiis repudiandae ipsum, nisi soluta
          voluptate tenetur numquam beatae expedita qui. Consequuntur eos
          consectetur nostrum quibusdam eum reiciendis libero aperiam magnam
          saepe, placeat, molestias earum vel qui omnis esse! Laboriosam,
          consectetur ea labore ad totam est eveniet explicabo repellat quaerat
          voluptate? Necessitatibus impedit laboriosam.
        </p>

        <button className="bg-green-500 hover:bg-green-600  text-white font-bold py-2 px-4 rounded shadow-md transition duration-300 my-4">
          <Link to="/hajj_book" state={{ identifier: "hajj" }}>
            Click here to Register
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Hajj;
