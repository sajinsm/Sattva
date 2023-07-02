import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AccessibilityIntegrationContai from "../components/AccessibilityIntegrationContai";
import MainHeader from "../components/MainHeader";
import styles from "./CaseStudy3Solution1.module.css";
const CaseStudy3Solution1 = () => {
  const navigate = useNavigate();

  const onTabContainerClick = useCallback(() => {
    navigate("/case-study-3-solution1");
  }, [navigate]);

  const onTabContainer2Click = useCallback(() => {
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

  const onProjectContainerClick = useCallback(() => {
    navigate("/case-study-2-challenge");
  }, [navigate]);

  const onProjectContainer1Click = useCallback(() => {
    navigate("/case-study-1-challenge");
  }, [navigate]);

  const onLogoTrans1Click = useCallback(() => {
    navigate("/sattva-home-page");
  }, [navigate]);

  return (
    <div className={styles.caseStudy3Solution}>
      <div className={styles.postBodyWrapper}>
        <div className={styles.postBody}>
          <div className={styles.bg} />
          <div className={styles.aGovernmentAgency}>
            A government agency responsible for overseeing educational policies
            and ensuring equal access to quality education.
          </div>
          <b className={styles.aboutTheClient}>About The Client</b>
          <b className={styles.creatingChangeWith}>
            Creating Change with Automated Accessibility Testing for the
            Department of Education
          </b>
          <div className={styles.sectionTitle}>
            <div className={styles.sectionTitle1}>
              <b className={styles.caseStudy}>CASE STUDY</b>
              <img className={styles.lineIcon} alt="" src="/line.svg" />
              <img className={styles.lineIcon1} alt="" src="/line.svg" />
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.projectRowParent}>
        <div className={styles.projectRow}>
          <div className={styles.project} onClick={onProjectContainerClick}>
            <img
              className={styles.maskGroupIcon}
              alt=""
              src="/mask-group3@2x.png"
            />
            <div className={styles.tint} />
            <div className={styles.content}>
              <div className={styles.secondaryButton}>
                <div className={styles.secondaryButtonText}>Learn More</div>
              </div>
              <div
                className={styles.utilizingTheSattva}
              >{`Utilizing the Sattva platform to execute performance, accessibility, security, and functional testing in one go. `}</div>
              <b className={styles.buildingAComprehensive}>
                Building a Comprehensive Testing Solution for a CRM Software
                Company
              </b>
            </div>
          </div>
          <div className={styles.project1} onClick={onProjectContainer1Click}>
            <img
              className={styles.maskGroupIcon1}
              alt=""
              src="/mask-group2@2x.png"
            />
            <div className={styles.tint} />
            <div className={styles.content1}>
              <div className={styles.secondaryButton1}>
                <div className={styles.secondaryButtonText}>Learn More</div>
              </div>
              <div
                className={styles.utilizingTheSattva1}
              >{`Utilizing the Sattva platform to configure and perform automated tests across multiple webpages for Section 508 compliance. `}</div>
              <b
                className={styles.buildingAComprehensive}
              >{`Enabling Automated Accessibility Testing for a Globally Recognized Institution `}</b>
            </div>
          </div>
        </div>
        <div className={styles.footerParent}>
          <div className={styles.footer}>
            <div className={styles.bg1} />
            <div className={styles.footerInner}>
              <div className={styles.frameWrapper}>
                <div className={styles.govright15Jan20232043281Wrapper}>
                  <img
                    className={styles.govright15Jan20232043281}
                    alt=""
                    src="/govright-15jan2023204328-1@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.form}>
              <div className={styles.formField}>
                <div className={styles.secondaryButton2}>
                  <div className={styles.secondaryButtonText}>Subscribe</div>
                </div>
                <div className={styles.input} />
                <div className={styles.yourEmail}>Your email</div>
              </div>
              <b className={styles.subscribeToGet}>
                Subscribe to get latest updates
              </b>
            </div>
            <div className={styles.links}>
              <div className={styles.ourTeam}>
                <div className={styles.contactUs}>About Us</div>
                <div className={styles.caseStudies}>Case Studies</div>
                <div className={styles.aboutUs}>Why Sattva?</div>
                <div className={styles.services}>Our Platform</div>
                <b className={styles.home}>Home</b>
              </div>
              <div className={styles.connect}>
                <div className={styles.contactUs}>{`Linkedin `}</div>
                <div className={styles.caseStudies}>Twitter</div>
                <div className={styles.aboutUs}>Instagram</div>
                <div className={styles.services}>Facebook</div>
                <b className={styles.home}>{`Connect `}</b>
              </div>
              <div className={styles.connect2}>
                <div className={styles.contactsattvacom}>
                  contact@sattva.com
                </div>
                <div className={styles.div}>(703) 123 - 4566</div>
                <div className={styles.xyzStreetCity}>
                  XYZ Street City, State 12345
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.primaryButton}>
              <div className={styles.secondaryButtonText}>Contact Us</div>
            </div>
            <b className={styles.sattvaCanSolve}>
              Sattva can solve your challenge
            </b>
            <div
              className={styles.exploreHowSattva}
            >{`Explore how Sattva can empower your organization. `}</div>
          </div>
          <img className={styles.logoFull1} alt="" src="/logo--full-1@2x.png" />
        </div>
      </div>
      <AccessibilityIntegrationContai
        accessibilityPluginsText="Enable seamless integration aXe accessibility plugin "
        accessibilityReportText="Consolidate accessibility issues and recommendations into a single report"
        propTop="563px"
        propWidth="747px"
        propWidth1="695px"
        onTabContainerClick={onTabContainerClick}
        onTabContainer2Click={onTabContainer2Click}
      />
      <MainHeader
        dimensions="/bxsearch2.svg"
        propTop="calc(50% - 26.5px)"
        propHeight="53px"
        propBottom="unset"
        propTop1="calc(50% - 26.5px)"
        propHeight1="unset"
        propBottom1="unset"
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

export default CaseStudy3Solution1;
