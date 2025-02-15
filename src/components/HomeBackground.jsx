import styles from "../styles/Home.module.css";

const HomeBackground = () => {
  return (
    <div>
      <video preload="auto" autoPlay loop muted playsInline className={styles.videoBackground}>
        <source src="https://ansarv1.s3.us-east-2.amazonaws.com/videos/camel.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={`${styles.custom_font_ubuntu} text-white my-48 ml-8`}>
        <h1 className="text-3xl md:text-6xl">Ansar Voyage</h1>
        <p className="text-xl md:text-3xl">
          Nous sommes là pour honorer votre appel spirituel
        </p>
      </div>
    </div>
  );
};

export default HomeBackground;
