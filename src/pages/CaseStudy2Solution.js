import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CRMContainer from "../components/CRMContainer";
import MainHeader from "../components/MainHeader";
import styles from "./CaseStudy2Solution.module.css";
const CaseStudy2Solution = () => {
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

  const onTabContainerClick = useCallback(() => {
    navigate("/case-study-2-impact");
  }, [navigate]);

  const onTabContainer2Click = useCallback(() => {
    navigate("/case-study-2-challenge");
  }, [navigate]);

  const onProjectContainerClick = useCallback(() => {
    navigate("/case-study-3-challenge");
  }, [navigate]);

  const onProjectContainer1Click = useCallback(() => {
    navigate("/case-study-1-challenge");
  }, [navigate]);

  const onLogoTrans1Click = useCallback(() => {
    navigate("/sattva-home-page");
  }, [navigate]);

  return (
    <div className={styles.caseStudy2Solution}>
      <div className={styles.postBodyParent}>
        <CRMContainer
          crmDescription="A leading CRM software company that specializes in developing solutions to help businesses manage their interactions and relationships with customers."
          crmTestingSolutionDescrip="Building a Comprehensive Testing Solution for a CRM Software Company"
        />
        <div className={styles.groupWrapper}>
          <div className={styles.howToSectionParent}>
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
            <div className={styles.groupParent}>
              <img
                className={styles.groupChild}
                alt=""
                src="/group-21131.svg"
              />
              <div className={styles.enableAccessibilitySecurityContainer}>
                <p className={styles.byLeveragingThe}>
                  Enable accessibility, security, performance, and functional UI
                  testing all in one go without having to purchase additional
                  products
                </p>
                <p className={styles.byLeveragingThe}>&nbsp;</p>
                <p className={styles.byLeveragingThe}>
                  Enable site-wide crawling and conduct simultaneous testing
                  across numerous webpages to collect all the key metrics
                </p>
                <p className={styles.byLeveragingThe}>&nbsp;</p>
                <p className={styles.byLeveragingThe}>
                  Enable seamless integration with multiple plugins at the same
                  time for accessibility, security, and performance tests
                </p>
                <p className={styles.byLeveragingThe}>&nbsp;</p>
                <p
                  className={styles.byLeveragingThe}
                >{`Conduct all types of testing across multiple browsers `}</p>
                <p className={styles.byLeveragingThe}>&nbsp;</p>
                <p
                  className={styles.byLeveragingThe}
                >{`Consolidate issues and recommendations into concise reports for each testing component `}</p>
                <p className={styles.byLeveragingThe}>&nbsp;</p>
                <p className={styles.byLeveragingThe}>
                  Repeat testing at scheduled intervals as needed
                </p>
              </div>
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
            <div className={styles.bg} />
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
            <div className={styles.groupItem} />
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
      <MainHeader
        dimensions="/bxsearch1.svg"
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

export default CaseStudy2Solution;
