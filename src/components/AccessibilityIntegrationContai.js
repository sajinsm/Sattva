import { useMemo } from "react";
import styles from "./AccessibilityIntegrationContai.module.css";
const AccessibilityIntegrationContai = ({
  accessibilityPluginsText,
  accessibilityReportText,
  propTop,
  propWidth,
  propWidth1,
  onTabContainerClick,
  onTabContainer2Click,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const groupDiv1Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const enableSiteWideCrawlingContainerStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className={styles.howToSectionParent} style={groupDivStyle}>
      <div className={styles.howToSection}>
        <div className={styles.howToSection}>
          <div className={styles.byLeveragingTheContainer}>
            <p
              className={styles.byLeveragingThe}
            >{`By leveraging the Sattva platform, the client would be able to: `}</p>
            <p className={styles.byLeveragingThe}>&nbsp;</p>
            <p className={styles.byLeveragingThe}>&nbsp;</p>
          </div>
          <div className={styles.line} />
          <div className={styles.line1} />
          <div className={styles.tab} onClick={onTabContainerClick}>
            <div className={styles.theImpact}>The Impact</div>
          </div>
          <div className={styles.tab1}>
            <div className={styles.theSolution}>The Solution</div>
          </div>
          <div className={styles.tab2} onClick={onTabContainer2Click}>
            <div className={styles.theImpact}>The Challenge</div>
          </div>
        </div>
      </div>
      <div className={styles.groupParent} style={groupDiv1Style}>
        <img className={styles.groupChild} alt="" src="/group-2113.svg" />
        <div
          className={styles.enableSiteWideCrawlingContainer}
          style={enableSiteWideCrawlingContainerStyle}
        >
          <p
            className={styles.byLeveragingThe}
          >{`Enable site-wide crawling and conduct simultaneous testing across numerous webpages `}</p>
          <p className={styles.byLeveragingThe}>&nbsp;</p>
          <p className={styles.byLeveragingThe}>{accessibilityPluginsText}</p>
          <p className={styles.byLeveragingThe}>&nbsp;</p>
          <p
            className={styles.byLeveragingThe}
          >{`Conduct testing across multiple browsers `}</p>
          <p className={styles.byLeveragingThe}>&nbsp;</p>
          <p className={styles.byLeveragingThe}>{accessibilityReportText}</p>
          <p className={styles.byLeveragingThe}>&nbsp;</p>
          <p className={styles.byLeveragingThe}>
            Repeat testing at scheduled intervals as needed
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityIntegrationContai;
