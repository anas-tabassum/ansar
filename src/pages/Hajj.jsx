import khaba from "../media/khaba.mp4";
import styles from "../styles/Hajj.module.css";

const Hajj = () => {
  return (
    <div className={styles.hajj_container}>
      <video autoPlay loop muted playsInline className={styles.videoBackground}>
        <source src={khaba} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Hajj;
