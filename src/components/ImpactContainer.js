import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AccessibilityContainer from "./AccessibilityContainer";
import styles from "./ImpactContainer.module.css";
const ImpactContainer = () => {
  const navigate = useNavigate();

  const onPexelsDavidBartus6102931ImageClick = useCallback(() => {
    navigate("/case-study-2-challenge");
  }, [navigate]);

  const onPexelsLuisGomes5468191ImageClick = useCallback(() => {
    navigate("/case-study-1-challenge");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/case-study-3-challenge");
  }, [navigate]);

  return (
    <div className={styles.projects}>
      <b className={styles.sattvaIsMaking}>
        Sattva is making an impact on real-world clients and challenges
      </b>
      <AccessibilityContainer
        pexelsDavidBartus6102931="/pexelsdavidbartus610293-11@2x.png"
        pexelsLuisGomes5468191="/pexelsluisgomes546819-11@2x.png"
        pexelsPixabay3560401="/pexelspixabay356040-11@2x.png"
        pexelsCottonbroStudio8721="/pexelscottonbrostudio8721340-11@2x.png"
        pexelsRodnaeProductions59="/pexelsrodnaeproductions5915236-11@2x.png"
        group2065Height="72.62%"
        group2065Top="27.38%"
        onPexelsDavidBartus6102931ImageClick={
          onPexelsDavidBartus6102931ImageClick
        }
        onPexelsLuisGomes5468191ImageClick={onPexelsLuisGomes5468191ImageClick}
        onGroupContainer1Click={onGroupContainer1Click}
      />
      <div className={styles.sectionTitle}>
        <b className={styles.successStories}>Success STories</b>
        <img className={styles.lineIcon} alt="" src="/line.svg" />
        <img className={styles.lineIcon1} alt="" src="/line.svg" />
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      </div>
    </div>
  );
};

export default ImpactContainer;
