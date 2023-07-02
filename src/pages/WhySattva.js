import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FeatureCard from "../components/FeatureCard";
import DevOpsPipelineContainer from "../components/DevOpsPipelineContainer";
import SubscriptionFormSection from "../components/SubscriptionFormSection";
import WhySattvaContainer from "../components/WhySattvaContainer";
import Header from "../components/Header";
import styles from "./WhySattva.module.css";
const WhySattva = () => {
  const navigate = useNavigate();

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
    <div className={styles.whySattva}>
      <img
        className={styles.whySattvaChild}
        alt=""
        src="/rectangle-1314@2x.png"
      />
      <div className={styles.header}>
        <div className={styles.text}>
          <b className={styles.sattvaTakesYour}>
            Sattva Takes Your Testing to the Next Level
          </b>
        </div>
      </div>
      <FeatureCard />
      <div className={styles.topRow}>
        <div className={styles.text1}>
          <b className={styles.sattvaOffersRobust}>
            Sattva offers robust integration capabilities with industry-leading
            solutions
          </b>
          <div className={styles.sectionTitle}>
            <div className={styles.sectionTitle1}>
              <b className={styles.thirdPartyIntegrations}>
                THIRD PARTY INTEGRATIONS
              </b>
              <img className={styles.lineIcon} alt="" src="/line3.svg" />
              <img className={styles.lineIcon1} alt="" src="/line3.svg" />
              <img className={styles.vectorIcon} alt="" src="/vector4.svg" />
            </div>
          </div>
        </div>
      </div>
      <DevOpsPipelineContainer />
      <div className={styles.itemParent}>
        <div className={styles.item}>
          <div
            className={styles.providesSupportTo}
          >{`Provides support to manage and track your test cases `}</div>
          <b className={styles.testlink}>TestLink</b>
          <div className={styles.icon}>
            <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
          </div>
        </div>
        <div className={styles.item1}>
          <div className={styles.integratesWithYour}>
            Integrates with your application server and allows you to capture
            all run-time errors
          </div>
          <b className={styles.jira}>Jira</b>
          <div className={styles.icon1}>
            <img className={styles.image6Icon} alt="" src="/image-6@2x.png" />
          </div>
        </div>
      </div>
      <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
      <SubscriptionFormSection />
      <WhySattvaContainer />
      <Header
        productId="/bxsearch4.svg"
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

export default WhySattva;
