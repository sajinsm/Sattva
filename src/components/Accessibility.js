import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Accessibility.module.css";
const Accessibility = ({ onClose }) => {
  const navigate = useNavigate();

  const onFunctionalTestingTextClick = useCallback(() => {
    navigate("/sattva-home-page");
  }, [navigate]);

  const onLearnMoreTextClick = useCallback(() => {
    navigate("/our-platform");
  }, [navigate]);

  return (
    <div className={styles.accessibility}>
      <div className={styles.accessibilityChild} />
      <b className={styles.accessibility1}>Accessibility</b>
      <div className={styles.accessibilityItem} />
      <div className={styles.accessibilityInner} />
      <div
        className={styles.functionalTesting}
        onClick={onFunctionalTestingTextClick}
      >
        Functional Testing
      </div>
      <div className={styles.loadTesting}>Load Testing</div>
      <div className={styles.mobileTesting}>Mobile Testing</div>
      <div className={styles.accessibility2}>Accessibility</div>
      <div className={styles.performance}>Performance</div>
      <div className={styles.security}>Security</div>
      <div className={styles.helpDeskServices}>Mobile Testing</div>
      <div className={styles.cybersecurityServices}>Cybersecurity Services</div>
      <div className={styles.toEnsureDigitalAccessibilitParent}>
        <div className={styles.toEnsureDigital}>
          To ensure digital accessibility and compliance with Section 508
          standards, Sattva combines accessibility issues from disparate tools
          (ANDI, WAVE, aXe, ARC) and consolidates them into a singular report.
          With Sattva’s testing platform, your teams no longer have to manually
          scan individual webpages with multiple browser extensions and
          synthesize the findings on their own. Not only does Sattva’s reporting
          highlight accessibility issues, but it also offers recommendations for
          remediation, ultimately resulting in more inclusive and compliant
          software applications that work for all types of users.
        </div>
        <div
          className={styles.learnMore}
          onClick={onLearnMoreTextClick}
        >{`Learn more `}</div>
        <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
      </div>
      <div className={styles.lineDiv} />
    </div>
  );
};

export default Accessibility;
