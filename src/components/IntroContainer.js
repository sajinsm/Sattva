import styles from "./IntroContainer.module.css";
const IntroContainer = () => {
  return (
    <div className={styles.header}>
      <div className={styles.text}>
        <b
          className={styles.introducingSattvaA}
        >{`Introducing Sattva: A Comprehensive Full Stack Automation Testing Platform `}</b>
        <div className={styles.welcomeToSattva}>
          Welcome to Sattva, an all-inclusive Automation Testing Platform
          designed to meet the diverse testing needs of modern enterprises. With
          a robust set of features, Sattva empowers organizations to conduct
          thorough and efficient testing across various dimensions, including
          functional UI, accessibility, security, and performance.
        </div>
        <div className={styles.sectionTitle}>
          <b className={styles.ourPlatform}>OUR PLATFORM</b>
          <img className={styles.lineIcon} alt="" src="/line.svg" />
          <img className={styles.lineIcon1} alt="" src="/line.svg" />
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        </div>
      </div>
    </div>
  );
};

export default IntroContainer;
