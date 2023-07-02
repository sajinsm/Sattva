import { useCallback } from "react";
import CRMContainer from "./CRMContainer";
import { useNavigate } from "react-router-dom";
import styles from "./CRMSection.module.css";
const CRMSection = () => {
  const navigate = useNavigate();

  const onTabContainerClick = useCallback(() => {
    navigate("/case-study-2-impact");
  }, [navigate]);

  const onTabContainer1Click = useCallback(() => {
    navigate("/case-study-2-solution");
  }, [navigate]);

  return (
    <div className={styles.postBodyParent}>
      <CRMContainer
        crmDescription="A leading CRM software company that specializes in developing solutions to help businesses manage their interactions and relationships with customers."
        crmTestingSolutionDescrip="Building a Comprehensive Testing Solution for a CRM Software Company"
      />
      <div className={styles.howToSectionWrapper}>
        <div className={styles.howToSection}>
          <div className={styles.howToSection}>
            <div className={styles.forTheirCrmContainer}>
              <p
                className={styles.forTheirCrm}
              >{`For their CRM platform, the company needs to test the following components in order to demonstrate their commitment to inclusivity, user satisfaction, data protection, and regulatory compliance with Section 508 standards. `}</p>
              <p className={styles.forTheirCrm}>&nbsp;</p>
              <ul className={styles.thePlatformMustBeAccessibl}>
                <li className={styles.thePlatformMust}>
                  The platform must be accessible to enable individuals with
                  disabilities from accessing and using the CRM software
                  effectively.
                </li>
                <li className={styles.thePlatformMust}>
                  The platform must be secure, so sensitive customer data is
                  protected from unauthorized access, breaches, or data leaks.
                </li>
                <li className={styles.thePlatformMust}>
                  The platform must be able to handle the expected workload
                  efficiently, without slowdowns or system failures.
                </li>
                <li>{`The platform must be able to successfully execute the different scenarios, user workflows, and system interactions as intended. `}</li>
              </ul>
            </div>
            <div className={styles.line} />
            <div className={styles.line1} />
            <div className={styles.tab} onClick={onTabContainerClick}>
              <div className={styles.theImpact}>The Impact</div>
            </div>
            <div className={styles.tab1} onClick={onTabContainer1Click}>
              <div className={styles.theImpact}>The Solution</div>
            </div>
            <div className={styles.tab2}>
              <div className={styles.theChallenge}>The Challenge</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CRMSection;
