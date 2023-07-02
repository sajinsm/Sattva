import styles from "./LearnMoreContainer.module.css";
const LearnMoreContainer = () => {
  return (
    <div className={styles.aboutSection}>
      <div className={styles.topRow}>
        <img className={styles.videoIcon} alt="" src="/video.svg" />
        <div className={styles.text}>
          <button className={styles.primaryButton}>
            <div className={styles.primaryButtonText}>Learn More</div>
          </button>
          <div className={styles.weAreCommittedContainer}>
            <p
              className={styles.weAreCommitted}
            >{`We are committed to delivering cutting-edge technologies and innovative tools that streamline the testing process, reduce manual effort, and accelerate time-to-market. Our solutions are designed to provide end-to-end testing coverage, ensuring the highest standards of functionality, security, accessibility, and performance across diverse platforms and devices. `}</p>
            <p className={styles.weAreCommitted}>&nbsp;</p>
            <p className={styles.weAreCommitted}>
              We collaborate closely with our clients, understanding their
              unique requirements and challenges, and providing tailored testing
              solutions that drive efficiency, reliability, and business
              success.
            </p>
          </div>
          <b
            className={styles.yourTrustedPartner}
          >{`Your trusted partner in the future of automated testing `}</b>
        </div>
        <div className={styles.sectionTitle}>
          <b className={styles.aboutUs}>ABOUT US</b>
          <img className={styles.lineIcon} alt="" src="/line.svg" />
          <img className={styles.lineIcon1} alt="" src="/line.svg" />
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        </div>
      </div>
    </div>
  );
};

export default LearnMoreContainer;
