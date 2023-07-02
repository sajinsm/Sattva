import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import styles from "./CaseStudy2Impact.module.css";
const CaseStudy2Impact = () => {
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

  const onProjectContainerClick = useCallback(() => {
    navigate("/case-study-3-challenge");
  }, [navigate]);

  const onProjectContainer1Click = useCallback(() => {
    navigate("/case-study-1-challenge");
  }, [navigate]);

  const onTabContainer1Click = useCallback(() => {
    navigate("/case-study-2-solution");
  }, [navigate]);

  const onTabContainer2Click = useCallback(() => {
    navigate("/case-study-2-challenge");
  }, [navigate]);

  const onLogoTrans1Click = useCallback(() => {
    navigate("/sattva-home-page");
  }, [navigate]);

  return (
    <div className={styles.caseStudy2Impact}>
      <div className={styles.postBodyWrapper}>
        <div className={styles.postBody}>
          <div className={styles.bg} />
          <div className={styles.aLeadingCrm}>
            A leading CRM software company that specializes in developing
            solutions to help businesses manage their interactions and
            relationships with customers.
          </div>
          <b className={styles.aboutTheClient}>About The Client</b>
          <b className={styles.buildingAComprehensive}>
            Building a Comprehensive Testing Solution for a CRM Software Company
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
              src="/mask-group@2x.png"
            />
            <div className={styles.tint} />
            <div className={styles.content}>
              <div className={styles.secondaryButton}>
                <div className={styles.secondaryButtonText}>Learn More</div>
              </div>
              <div
                className={styles.highlightingAccessibilityImp}
              >{`Highlighting accessibility improvements within the DOE website using Sattva’s third party integration with aXe for WCAG and Section 508 compliance. `}</div>
              <b className={styles.creatingChangeWith}>
                Creating Change with Automated Accessibility Testing for the
                Department of Education
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
                className={styles.utilizingTheSattva}
              >{`Utilizing the Sattva platform to configure and perform automated tests across multiple webpages for Section 508 compliance. `}</div>
              <b
                className={styles.creatingChangeWith}
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
      <div className={styles.howToSectionParent}>
        <div className={styles.howToSection}>
          <div className={styles.howToSection}>
            <div className={styles.withTheSattva}>
              With the Sattva platform, the CRM platform can achieve an
              unprecedented level of testing automation, ensuring a robust,
              secure, and high-performing CRM solution. While manual testing
              proves to be inefficient and lacks repeatability or the ability to
              track and manage results effectively, Sattva allows the CRM
              platform to deliver an exceptional user experience by harnessing
              third party integrations, creating a comprehensive testing
              workflow, and minimizing time-consuming tasks. This ultimately
              eliminates the need for manual repetition and reduces dependence
              on developer assistance.
            </div>
            <div className={styles.line} />
            <div className={styles.line1} />
            <div className={styles.tab}>
              <div className={styles.theImpact}>The Impact</div>
            </div>
            <div className={styles.tab1} onClick={onTabContainer1Click}>
              <div className={styles.theSolution}>The Solution</div>
            </div>
            <div className={styles.tab2} onClick={onTabContainer2Click}>
              <div className={styles.theSolution}>The Challenge</div>
            </div>
          </div>
        </div>
        <div className={styles.groupParent}>
          <div className={styles.itemParent}>
            <div className={styles.item}>
              <div className={styles.reductionInTime}>
                reduction in time spent by automating security testing
              </div>
              <div className={styles.div1}>90%</div>
            </div>
            <div className={styles.divider} />
          </div>
          <div className={styles.itemGroup}>
            <div className={styles.item}>
              <div className={styles.reductionInTime}>
                reduction in time spent by automating performance testing
              </div>
              <div className={styles.div1}>71%</div>
            </div>
            <div className={styles.divider} />
          </div>
          <div className={styles.item2}>
            <div className={styles.reductionInTime2}>
              reduction in time spent by automating accessibility testing
            </div>
            <div className={styles.div3}>75%</div>
          </div>
          <div className={styles.divider2} />
          <div className={styles.item3}>
            <div className={styles.reductionInTime3}>
              reduction in time spent by automating functional testing
            </div>
            <div className={styles.div4}>70%</div>
          </div>
        </div>
      </div>
      <MainHeader
        dimensions="/bxsearch1.svg"
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

export default CaseStudy2Impact;
