import video from "../media/mosque.mp4";
import styles from "../styles/Umra.module.css";

const HomeBackground = () => {
  return (
    <div>
      <video autoPlay loop muted playsInline className={styles.videoBackground}>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default HomeBackground;
