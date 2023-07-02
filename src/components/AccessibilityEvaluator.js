import styles from "./AccessibilityEvaluator.module.css";
const AccessibilityEvaluator = () => {
  return (
    <div className={styles.contentParent}>
      <div className={styles.content}>
        <div
          className={styles.withSattvaYou}
        >{`With Sattva, you can easily evaluate the accessibility of your applications, ensuring they meet the highest standards of inclusivity. Our platform provides extensive support for accessibility testing by consolidating insights from different testing engines (aXe, WAVE, ANDI, ARC) to provide you a single source of truth for potential barriers. `}</div>
        <b className={styles.empoweringUniversalDesign}>
          Empowering universal design and development
        </b>
        <b className={styles.accessibility}>{`Accessibility `}</b>
        <button className={styles.primaryButton}>
          <div className={styles.primaryButtonText}>FREE REPORT</div>
        </button>
      </div>
      <img className={styles.testing1Icon} alt="" src="/testing-1.svg" />
    </div>
  );
};

export default AccessibilityEvaluator;
