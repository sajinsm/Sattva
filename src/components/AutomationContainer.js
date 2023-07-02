import styles from "./AutomationContainer.module.css";
const AutomationContainer = () => {
  return (
    <div className={styles.whatWeDo}>
      <div className={styles.bg} />
      <div className={styles.text}>
        <div className={styles.byHarnessingThe}>
          By harnessing the power of automation, we enable our clients to
          achieve superior software quality, enhance user experiences, and drive
          business growth.
        </div>
        <b className={styles.fromAccessibilityTo}>
          From accessibility to security, we’ve got you covered
        </b>
      </div>
      <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
      <div className={styles.sectionTitle}>
        <b className={styles.ourPlatform}>Our PLATFORM</b>
        <img className={styles.lineIcon} alt="" src="/line1.svg" />
        <img className={styles.lineIcon1} alt="" src="/line1.svg" />
        <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
      </div>
    </div>
  );
};

export default AutomationContainer;
