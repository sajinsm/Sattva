import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import IntroContainer from "../components/IntroContainer";
import AccessibilityEvaluator from "../components/AccessibilityEvaluator";
import SubscriptionFormSection from "../components/SubscriptionFormSection";
import Header from "../components/Header";
import styles from "./OurPlatform.module.css";
const OurPlatform = () => {
  const navigate = useNavigate();

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
    <div className={styles.ourPlatform}>
      <div className={styles.sattvaInfinity21} />
      <div className={styles.bg} />
      <div className={styles.bg1} />
      <IntroContainer />
      <AccessibilityEvaluator />
      <div className={styles.contentParent}>
        <div className={styles.content}>
          <div className={styles.sattvaUnderstandsThat}>
            Sattva understands that security is paramount in today's digital
            landscape and enables you to conduct rigorous security testing to
            identify vulnerabilities and weaknesses in your applications. Our
            comprehensive suite of security testing tools, backed by OWASP
            guidelines, helps you fortify your software against potential
            threats, protecting your valuable data and maintaining the trust of
            your users.
          </div>
          <button className={styles.primaryButton}>
            <div className={styles.primaryButtonText}>FREE REPORT</div>
          </button>
          <b className={styles.ensuringComplianceWithContainer}>
            <p className={styles.ensuringComplianceWith}>
              Ensuring compliance with industry standards
            </p>
          </b>
          <b className={styles.security}>{`Security `}</b>
        </div>
        <img
          className={styles.websiteMaintenance1Icon}
          alt=""
          src="/websitemaintenance-1.svg"
        />
      </div>
      <div className={styles.contentGroup}>
        <div className={styles.content1}>
          <div
            className={styles.sattvaEquipsYou}
          >{`Sattva equips you with the means to assess the performance of your applications under various conditions and workloads. By harnessing Google Lighthouse and Apache JMeter, our platform enables you to simulate real-world scenarios, measure response times, identify bottlenecks, and optimize performance, ensuring that your software delivers a smooth and responsive experience even during peak usage. `}</div>
          <button className={styles.primaryButton}>
            <div className={styles.primaryButtonText}>FREE REPORT</div>
          </button>
          <b
            className={styles.providingInsightsFor}
          >{`Providing insights for system optimization and efficiency `}</b>
          <b className={styles.performance}>Performance</b>
        </div>
        <img
          className={styles.processing1Icon}
          alt=""
          src="/processing-1.svg"
        />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.content2}>
          <div className={styles.sattvaEmpowersYou}>
            Sattva empowers you to perform meticulous functional UI testing,
            verifying that your user interface elements function flawlessly
            across different scenarios and use cases. Our platform streamlines
            the testing process, enabling you to identify and rectify UI issues
            early on, ensuring a seamless and intuitive user experience.
          </div>
          <button className={styles.primaryButton2}>
            <div className={styles.primaryButtonText}>FREE REPORT</div>
          </button>
          <b className={styles.automatingSolutionsFor}>
            Automating solutions for consistent and reliable results
          </b>
          <b className={styles.functionalTesting}>Functional Testing</b>
        </div>
        <img
          className={styles.websiteDevelopment1Icon}
          alt=""
          src="/websitedevelopment-1.svg"
        />
      </div>
      <SubscriptionFormSection propTop="2995px" propWidth="458px" />
      <Header
        productId="/bxsearch4.svg"
        propCursor="unset"
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

export default OurPlatform;
