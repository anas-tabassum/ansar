import styles from "../styles/Home.module.css";

const HomeBackground = () => {
  return (
    <div>
      <video preload="auto" autoPlay loop muted playsInline className={styles.videoBackground} controls={false}>
        <source src="https://ansarv1.s3.us-east-2.amazonaws.com/videos/camel.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
 <div className={`${styles.custom_font_ubuntu} text-white my-48 ml-8`}>
        <h1 className="text-3xl md:text-6xl" style={{fontFamily: 'Montserrat', fontWeight: 900, fontStyle: 'italic'}}>
          <span style={{color: '#1919ff'}}>Ansar</span> <span style={{color: '#ff7f00'}}>Voyage</span>
        </h1>
        <p className="text-lg md:text-2xl" style={{fontFamily: 'Montserrat', fontWeight: 400, fontStyle: 'italic'}}>
          Le Chemin Vers Votre But
        </p>
        <br />
        <br />
        <p className="text-xl md:text-3xl" style={{fontFamily: 'Montserrat', fontWeight: 400, fontStyle: 'italic'}}>
          Nous sommes là pour honorer votre appel spirituel
        </p>
      </div>
    </div>
  );
};
export default HomeBackground;
