import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Performance1.module.css";
const Performance1 = ({ onClose }) => {
  const navigate = useNavigate();

  const onFunctionalTestingTextClick = useCallback(() => {
    navigate("/sattva-home-page");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/our-platform");
  }, [navigate]);

  return (
    <div className={styles.performance}>
      <div className={styles.performanceChild} />
      <b className={styles.performance1}>Performance</b>
      <div className={styles.performanceItem} />
      <div className={styles.performanceInner} />
      <div
        className={styles.functionalTesting}
        onClick={onFunctionalTestingTextClick}
      >
        Functional Testing
      </div>
      <div className={styles.loadTesting}>Load Testing</div>
      <div className={styles.mobileTesting}>Mobile Testing</div>
      <div className={styles.accessibility}>Accessibility</div>
      <div className={styles.performance2}>Performance</div>
      <div className={styles.security}>Security</div>
      <div className={styles.helpDeskServices}>Mobile Testing</div>
      <div className={styles.cybersecurityServices}>Cybersecurity Services</div>
      <div className={styles.sattvaWillHelpOptimizeYourParent}>
        <div className={styles.sattvaWillHelp}>
          Sattva will help optimize your system’s performance by extracting key
          performance indicators like load times, page size, and rendering speed
          from Google Lighthouse and providing actionable recommendations such
          as image compression, caching strategies, code minification, and more.
          Sattva allows you to get ahead of performance bottlenecks and makes it
          easy to incorporate performance testing as part of your continuous
          integration and deployment pipelines, ensuring that performance is
          monitored throughout the development lifecycle.
        </div>
        <div className={styles.learnMoreParent} onClick={onGroupContainerClick}>
          <div className={styles.learnMore}>{`Learn more `}</div>
          <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
        </div>
      </div>
      <div className={styles.lineDiv} />
    </div>
  );
};

export default Performance1;
