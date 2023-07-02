import { useState, useCallback } from "react";
import LoadTesting from "./LoadTesting";
import PortalPopup from "./PortalPopup";
import MobileTesting from "./MobileTesting";
import Accessibility from "./Accessibility";
import Performance1 from "./Performance1";
import Security from "./Security";
import { useNavigate } from "react-router-dom";
import styles from "./FunctionalTestingForm.module.css";
const FunctionalTestingForm = () => {
  const [isLoadTestingOpen, setLoadTestingOpen] = useState(false);
  const [isMobileTestingOpen, setMobileTestingOpen] = useState(false);
  const [isAccessibilityOpen, setAccessibilityOpen] = useState(false);
  const [isPerformanceOpen, setPerformanceOpen] = useState(false);
  const [isSecurityOpen, setSecurityOpen] = useState(false);
  const navigate = useNavigate();

  const openLoadTesting = useCallback(() => {
    setLoadTestingOpen(true);
  }, []);

  const closeLoadTesting = useCallback(() => {
    setLoadTestingOpen(false);
  }, []);

  const openMobileTesting = useCallback(() => {
    setMobileTestingOpen(true);
  }, []);

  const closeMobileTesting = useCallback(() => {
    setMobileTestingOpen(false);
  }, []);

  const openAccessibility = useCallback(() => {
    setAccessibilityOpen(true);
  }, []);

  const closeAccessibility = useCallback(() => {
    setAccessibilityOpen(false);
  }, []);

  const openPerformance = useCallback(() => {
    setPerformanceOpen(true);
  }, []);

  const closePerformance = useCallback(() => {
    setPerformanceOpen(false);
  }, []);

  const openSecurity = useCallback(() => {
    setSecurityOpen(true);
  }, []);

  const closeSecurity = useCallback(() => {
    setSecurityOpen(false);
  }, []);

  const onGroupInputClick = useCallback(() => {
    navigate("/our-platform");
  }, [navigate]);

  return (
    <>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <b className={styles.functionalTesting}>Functional Testing</b>
        <div className={styles.frameItem} />
        <input className={styles.frameInner} type="text" maxLength minLength />
        <div className={styles.functionalTesting1}>Functional Testing</div>
        <div className={styles.loadTesting} onClick={openLoadTesting}>
          Load Testing
        </div>
        <div className={styles.mobileTesting} onClick={openMobileTesting}>
          Mobile Testing
        </div>
        <div className={styles.accessibility} onClick={openAccessibility}>
          Accessibility
        </div>
        <div className={styles.performance} onClick={openPerformance}>
          Performance
        </div>
        <div className={styles.security} onClick={openSecurity}>
          Security
        </div>
        <div className={styles.helpDeskServices}>Mobile Testing</div>
        <div className={styles.cybersecurityServices}>
          Cybersecurity Services
        </div>
        <div className={styles.sattvaHasRevolutionizedTheParent}>
          <div className={styles.sattvaHasRevolutionized}>
            Sattva has revolutionized the software development process by
            removing manual testing and automating end-to-end functional UI
            testing, streamlining the detection of bugs and enhancing the
            overall quality of user interfaces. From writing test scripts to
            implementing or maintaining automation scripts and monitoring
            defects, Sattva helps your developer teams create robust test suites
            that simulate user interactions and validate the expected behavior
            of UI elements. Sattva can also be integrated into your continuous
            integration and delivery (CI/CD) pipelines, allowing for efficient
            testing throughout the development cycle.
          </div>
          <input
            className={styles.groupChild}
            type="text"
            maxLength
            minLength
            onClick={onGroupInputClick}
          />
        </div>
        <div className={styles.lineDiv} />
      </div>
      {isLoadTestingOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLoadTesting}
        >
          <LoadTesting onClose={closeLoadTesting} />
        </PortalPopup>
      )}
      {isMobileTestingOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMobileTesting}
        >
          <MobileTesting onClose={closeMobileTesting} />
        </PortalPopup>
      )}
      {isAccessibilityOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAccessibility}
        >
          <Accessibility onClose={closeAccessibility} />
        </PortalPopup>
      )}
      {isPerformanceOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePerformance}
        >
          <Performance1 onClose={closePerformance} />
        </PortalPopup>
      )}
      {isSecurityOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSecurity}
        >
          <Security onClose={closeSecurity} />
        </PortalPopup>
      )}
    </>
  );
};

export default FunctionalTestingForm;
