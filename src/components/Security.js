import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Security.module.css";
const Security = ({ onClose }) => {
  const navigate = useNavigate();

  const onFunctionalTestingTextClick = useCallback(() => {
    navigate("/sattva-home-page");
  }, [navigate]);

  const onLearnMoreTextClick = useCallback(() => {
    navigate("/our-platform");
  }, [navigate]);

  return (
    <div className={styles.security}>
      <div className={styles.securityChild} />
      <b className={styles.security1}>Security</b>
      <div className={styles.securityItem} />
      <div className={styles.securityInner} />
      <div
        className={styles.functionalTesting}
        onClick={onFunctionalTestingTextClick}
      >
        Functional Testing
      </div>
      <div className={styles.loadTesting}>Load Testing</div>
      <div className={styles.mobileTesting}>Mobile Testing</div>
      <div className={styles.accessibility}>Accessibility</div>
      <div className={styles.performance}>Performance</div>
      <div className={styles.security2}>Security</div>
      <div className={styles.helpDeskServices}>Mobile Testing</div>
      <div className={styles.cybersecurityServices}>Cybersecurity Services</div>
      <div className={styles.sattvaUtilizesTheOwaspWebParent}>
        <div className={styles.sattvaUtilizesThe}>
          Sattva utilizes the OWASP Web Security Testing Guide as part of its
          automated testing platform to help you implement robust security
          measures during the early stages of software development, reducing the
          risk of vulnerabilities and security breaches in the future. By
          leveraging OWASP's guidance and best practices, Sattva helps identify
          security considerations at each stage, including design, coding,
          testing, deployment, and maintenance, so that your development teams
          can build secure software from the ground up.
        </div>
        <div className={styles.learnMoreParent}>
          <div
            className={styles.learnMore}
            onClick={onLearnMoreTextClick}
          >{`Learn more `}</div>
          <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
        </div>
      </div>
      <div className={styles.lineDiv} />
    </div>
  );
};

export default Security;
