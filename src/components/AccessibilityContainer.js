import { useMemo } from "react";
import styles from "./AccessibilityContainer.module.css";
const AccessibilityContainer = ({
  pexelsDavidBartus6102931,
  pexelsLuisGomes5468191,
  pexelsPixabay3560401,
  pexelsCottonbroStudio8721,
  pexelsRodnaeProductions59,
  group2065Height,
  group2065Top,
  onPexelsDavidBartus6102931ImageClick,
  onPexelsLuisGomes5468191ImageClick,
  onGroupContainer1Click,
}) => {
  const groupDiv4Style = useMemo(() => {
    return {
      height: group2065Height,
      top: group2065Top,
    };
  }, [group2065Height, group2065Top]);

  return (
    <div
      className={styles.pexelsDavidBartus6102931Parent}
      style={groupDiv4Style}
    >
      <img
        className={styles.pexelsDavidBartus6102931Icon}
        alt=""
        src={pexelsDavidBartus6102931}
        onClick={onPexelsDavidBartus6102931ImageClick}
      />
      <img
        className={styles.pexelsLuisGomes5468191Icon}
        alt=""
        src={pexelsLuisGomes5468191}
        onClick={onPexelsLuisGomes5468191ImageClick}
      />
      <b className={styles.enablingAutomatedAccessibili}>
        Enabling Automated Accessibility Testing for a Globally Recognized
        Institution
      </b>
      <div className={styles.lineParent}>
        <div className={styles.groupChild} />
        <b className={styles.buildingAComprehensive}>
          Building a Comprehensive Testing Solution for a CRM Software Company
        </b>
      </div>
      <div className={styles.groupParent}>
        <div
          className={styles.pexelsPixabay3560401Wrapper}
          onClick={onGroupContainer1Click}
        >
          <img
            className={styles.pexelsPixabay3560401Icon}
            alt=""
            src={pexelsPixabay3560401}
          />
        </div>
        <div className={styles.pexelsCottonbroStudio872134Wrapper}>
          <img
            className={styles.pexelsPixabay3560401Icon}
            alt=""
            src={pexelsCottonbroStudio8721}
          />
        </div>
        <div className={styles.pexelsRodnaeProductions5915Wrapper}>
          <img
            className={styles.pexelsPixabay3560401Icon}
            alt=""
            src={pexelsRodnaeProductions59}
          />
        </div>
        <div className={styles.lineGroup}>
          <div className={styles.groupItem} />
          <b className={styles.creatingChangeWith}>
            Creating Change with Automated Accessibility Testing for the
            Department of Education
          </b>
        </div>
        <div className={styles.lineContainer}>
          <div className={styles.groupInner} />
          <b
            className={styles.loremIpsumLorem}
          >{`Lorem Ipsum Lorem Ipsum Lorem Ipsum `}</b>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.groupInner} />
          <b
            className={styles.loremIpsumLorem}
          >{`Lorem Ipsum Lorem Ipsum Lorem Ipsum `}</b>
        </div>
      </div>
      <div className={styles.groupChild1} />
    </div>
  );
};

export default AccessibilityContainer;
