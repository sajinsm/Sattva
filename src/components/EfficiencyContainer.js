import styles from "./EfficiencyContainer.module.css";
const EfficiencyContainer = () => {
  return (
    <div className={styles.header}>
      <div className={styles.bg} />
      <div className={styles.text}>
        <b className={styles.drivingEfficiencyMaximizing}>
          Driving Efficiency, Maximizing Productivity
        </b>
        <div className={styles.atSattvaWeContainer}>
          <p
            className={styles.atSattvaWe}
          >{`At Sattva, we believe in simplifying software testing by providing a comprehensive solution that consolidates various testing aspects into a single, user-friendly hub. Our primary mission is to liberate our valued customers from the burdensome tasks of manual testing, allowing them to focus on their core business solutions. `}</p>
          <p className={styles.atSattvaWe}>&nbsp;</p>
          <p className={styles.atSattvaWe}>
            Discover the power of Sattva in revolutionizing your testing
            processes. Join leading organizations worldwide that rely on our
            platform to enhance software quality, streamline testing processes,
            and deliver outstanding user experiences.
          </p>
        </div>
        <button className={styles.primaryButton}>
          <div className={styles.primaryButtonText}>Contact Us</div>
        </button>
      </div>
      <div className={styles.sectionTitle}>
        <div className={styles.sectionTitle1}>
          <div className={styles.sectionTitle1}>
            <b className={styles.ourMission}>Our MISsion</b>
            <img className={styles.lineIcon} alt="" src="/line.svg" />
            <img className={styles.lineIcon1} alt="" src="/line.svg" />
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          </div>
        </div>
      </div>
      <img className={styles.imageIcon} alt="" src="/image@2x.png" />
    </div>
  );
};

export default EfficiencyContainer;
