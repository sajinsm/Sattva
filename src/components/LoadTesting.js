import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoadTesting.module.css";
const LoadTesting = ({ onClose }) => {
  const navigate = useNavigate();

  const onFunctionalTestingTextClick = useCallback(() => {
    navigate("/sattva-home-page");
  }, [navigate]);

  const onLearnMoreTextClick = useCallback(() => {
    navigate("/our-platform");
  }, [navigate]);

  return (
    <div className={styles.loadTesting}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <b className={styles.loadTesting1}>Load Testing</b>
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
        <div
          className={styles.functionalTesting}
          onClick={onFunctionalTestingTextClick}
        >
          Functional Testing
        </div>
        <div className={styles.loadTesting2}>Load Testing</div>
        <div className={styles.mobileTesting}>Mobile Testing</div>
        <div className={styles.accessibility}>Accessibility</div>
        <div className={styles.performance}>Performance</div>
        <div className={styles.security}>Security</div>
        <div className={styles.helpDeskServices}>Mobile Testing</div>
        <div className={styles.cybersecurityServices}>
          Cybersecurity Services
        </div>
        <div className={styles.sattvasIntegrationWithApacParent}>
          <div className={styles.sattvasIntegrationWith}>
            Sattva’s integration with Apache JMeter allows your development
            teams to simulate heavy user traffic and evaluate your system's
            performance in a production-like environment. Sattva also provides a
            comprehensive analysis on a set of performance metrics, including
            response times, throughput, and error rates. These metrics help
            evaluate your application's stability, reliability, and scalability.
            By leveraging Sattva’s insights, your development teams can identify
            and address performance issues, optimize system resources, and
            deliver a highly scalable and responsive application to its end
            users.
          </div>
          <div
            className={styles.learnMore}
            onClick={onLearnMoreTextClick}
          >{`Learn more `}</div>
          <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
        </div>
        <div className={styles.lineDiv} />
      </div>
    </div>
  );
};

export default LoadTesting;
