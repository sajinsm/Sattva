import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AccessibilityContainer from "./AccessibilityContainer";
import styles from "./ProjectsContainer.module.css";
const ProjectsContainer = () => {
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
      <b
        className={styles.exploreTheTransformative}
      >{`Explore the Transformative Power of Sattva’s Solutions in Action `}</b>
      <div className={styles.sectionTitle}>
        <div className={styles.sectionTitle1}>
          <b className={styles.caseStudies}>CASE STUDIES</b>
          <img className={styles.lineIcon} alt="" src="/line.svg" />
          <img className={styles.lineIcon1} alt="" src="/line.svg" />
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        </div>
      </div>
      <AccessibilityContainer
        pexelsDavidBartus6102931="/pexelsdavidbartus610293-1@2x.png"
        pexelsLuisGomes5468191="/pexelsluisgomes546819-1@2x.png"
        pexelsPixabay3560401="/pexelspixabay356040-1@2x.png"
        pexelsCottonbroStudio8721="/pexelscottonbrostudio8721340-1@2x.png"
        pexelsRodnaeProductions59="/pexelsrodnaeproductions5915236-1@2x.png"
        onPexelsDavidBartus6102931ImageClick={
          onPexelsDavidBartus6102931ImageClick
        }
        onPexelsLuisGomes5468191ImageClick={onPexelsLuisGomes5468191ImageClick}
        onGroupContainer1Click={onGroupContainer1Click}
      />
    </div>
  );
};

export default ProjectsContainer;
