import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ImpactContainer from "../components/ImpactContainer";
import AutomationContainer from "../components/AutomationContainer";
import LearnMoreContainer from "../components/LearnMoreContainer";
import HeaderContainer from "../components/HeaderContainer";
import SubscribeSection from "../components/SubscribeSection";
import FunctionalTestingForm from "../components/FunctionalTestingForm";
import HeaderTop1 from "../components/HeaderTop1";
import styles from "./SattvaHomePage.module.css";
const SattvaHomePage = () => {
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
    <div className={styles.sattvaHomePage}>
      <ImpactContainer />
      <AutomationContainer />
      <LearnMoreContainer />
      <HeaderContainer />
      <SubscribeSection
        gOVRIGHT15Jan20232043281="/govright-15jan2023204328-12@2x.png"
        sattvaCanSolveYourChallen="Ready to get started with Sattva?"
        exploreHowSattvaCanEmpowe="Unlock the potential of automation testing with Sattva."
        propTop="4062.38px"
      />
      <div className={styles.sattvaHomePageInner}>
        <FunctionalTestingForm />
      </div>
      <img className={styles.groupIcon} alt="" src="/group2.svg" />
      <HeaderTop1 />
    </div>
  );
};

export default SattvaHomePage;
