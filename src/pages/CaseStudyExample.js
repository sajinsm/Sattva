import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ProjectsContainer from "../components/ProjectsContainer";
import SubscribeSection from "../components/SubscribeSection";
import MainHeader from "../components/MainHeader";
import styles from "./CaseStudyExample.module.css";
const CaseStudyExample = () => {
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

  const onPlatformTextClick = useCallback(() => {
    navigate("/our-platform");
  }, [navigate]);

  const onWhySattvaTextClick = useCallback(() => {
    navigate("/why-sattva");
  }, [navigate]);

  const onCaseStudiesText1Click = useCallback(() => {
    navigate("/case-study-example");
  }, [navigate]);

  const onAboutUsText1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLogoTrans1Click = useCallback(() => {
    navigate("/sattva-home-page");
  }, [navigate]);

  return (
    <div className={styles.caseStudyExample}>
      <div className={styles.projectsWrapper}>
        <ProjectsContainer />
      </div>
      <SubscribeSection
        gOVRIGHT15Jan20232043281="/govright-15jan2023204328-1@2x.png"
        sattvaCanSolveYourChallen="Ready to get started with Sattva?"
        exploreHowSattvaCanEmpowe="Explore how Sattva can empower your organization."
        propTop="1253px"
      />
      <MainHeader
        dimensions="/bxsearch3.svg"
        propTop="19.54%"
        propHeight="60.92%"
        propBottom="19.54%"
        propTop1="0%"
        propHeight1="100%"
        propBottom1="0%"
        onPlatformTextClick={onPlatformTextClick}
        onWhySattvaTextClick={onWhySattvaTextClick}
        onCaseStudiesText1Click={onCaseStudiesText1Click}
        onAboutUsText1Click={onAboutUsText1Click}
      />
      <img
        className={styles.logoTrans1}
        alt=""
        src="/logo--trans-1@2x.png"
        onClick={onLogoTrans1Click}
      />
    </div>
  );
};

export default CaseStudyExample;
