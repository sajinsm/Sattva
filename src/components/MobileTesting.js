import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MobileTesting.module.css";
const MobileTesting = ({ onClose }) => {
  const navigate = useNavigate();

  const onFunctionalTestingTextClick = useCallback(() => {
    navigate("/sattva-home-page");
  }, [navigate]);

  const onLearnMoreTextClick = useCallback(() => {
    navigate("/our-platform");
  }, [navigate]);

  return (
    <div className={styles.mobileTesting}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <b className={styles.mobileTesting1}>Mobile Testing</b>
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
        <div
          className={styles.functionalTesting}
          onClick={onFunctionalTestingTextClick}
        >
          Functional Testing
        </div>
        <div className={styles.loadTesting}>Load Testing</div>
        <div className={styles.mobileTesting2}>Mobile Testing</div>
        <div className={styles.accessibility}>Accessibility</div>
        <div className={styles.performance}>Performance</div>
        <div className={styles.security}>Security</div>
        <div className={styles.helpDeskServices}>Mobile Testing</div>
        <div className={styles.cybersecurityServices}>
          Cybersecurity Services
        </div>
        <div className={styles.sattvaEnsuresThatYourAppliParent}>
          <div
            className={styles.sattvaEnsuresThat}
          >{`Sattva ensures that your applications perform consistently and effectively across a wide range of devices, providing a seamless user experience and reducing the risk of compatibility issues. Automating your mobile testing with Sattva allows you to cover all your bases, so you can avoid device fragmentation with various screen sizes, resolutions, and hardware capabilities. With third party integrations like BrowserStack, Sattva can create, modify, and execute test scripts based on popular mobile testing framework, Selenium. `}</div>
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
    </div>
  );
};

export default MobileTesting;
