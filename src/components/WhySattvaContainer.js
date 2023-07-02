import DelightfulSoftwareContainer from "./DelightfulSoftwareContainer";
import styles from "./WhySattvaContainer.module.css";
const WhySattvaContainer = () => {
  return (
    <div className={styles.sectionTitleParent}>
      <div className={styles.sectionTitle}>
        <div className={styles.sectionTitle1}>
          <b className={styles.whySattva}>WHY SATTVA?</b>
          <img className={styles.lineIcon} alt="" src="/line.svg" />
          <img className={styles.lineIcon1} alt="" src="/line.svg" />
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        </div>
      </div>
      <div className={styles.groupParent}>
        <div className={styles.vectorParent}>
          <img className={styles.groupChild} alt="" src="/vector-8.svg" />
          <div className={styles.groupContainer}>
            <div className={styles.groupDiv}>
              <div className={styles.ourTeamSectionWrapper}>
                <div className={styles.ourTeamSectionWrapper}>
                  <div className={styles.ourTeamSectionWrapper}>
                    <b className={styles.flexibilityAndScalability}>
                      Flexibility and Scalability
                    </b>
                    <div className={styles.youHaveThe}>
                      You have the freedom to choose between our cloud-based
                      SaaS solution or an on-site setup, tailoring the platform
                      to your organization's unique needs and growth trajectory.
                    </div>
                  </div>
                </div>
              </div>
              <img className={styles.subtractIcon} alt="" src="/subtract.svg" />
            </div>
            <DelightfulSoftwareContainer
              competitiveAdvantage="Competitive Advantage"
              deliveringExceptionalSoft="Delivering exceptional software experiences is crucial for gaining a competitive edge. With Sattva, you can confidently release software that delights users and exceeds their expectations."
            />
            <div className={styles.groupParent1}>
              <div className={styles.ourTeamSectionContainer}>
                <div className={styles.ourTeamSection1}>
                  <div className={styles.ourTeamSection1}>
                    <b className={styles.enhancedSoftwareQuality}>
                      Enhanced Software Quality
                    </b>
                    <div className={styles.youHaveThe}>
                      You can proactively identify and rectify issues, ensuring
                      that your software meets the highest standards of quality
                      and reliability.
                    </div>
                  </div>
                </div>
              </div>
              <img className={styles.subtractIcon} alt="" src="/subtract.svg" />
            </div>
            <DelightfulSoftwareContainer
              competitiveAdvantage="Cost Efficiency"
              deliveringExceptionalSoft="By leveraging Sattva's automation capabilities, your organization can reduce manual testing efforts, save time, and optimize resources, resulting in improved productivity and cost savings."
              propTop="271px"
              propRight="0px"
              propRight1="171px"
              propWidth="110px"
            />
            <div className={styles.groupParent2}>
              <div className={styles.ourTeamSectionFrame}>
                <div className={styles.ourTeamSectionWrapper}>
                  <div className={styles.ourTeamSectionWrapper}>
                    <b className={styles.streamlinedTestingProcesses}>
                      Streamlined Testing Processes
                    </b>
                    <div className={styles.youHaveThe}>
                      Our intuitive interface and advanced automation
                      capabilities streamline testing processes, saving time and
                      effort while ensuring thorough and accurate results.
                    </div>
                  </div>
                </div>
              </div>
              <img className={styles.subtractIcon} alt="" src="/subtract.svg" />
            </div>
            <div className={styles.subtractParent}>
              <img
                className={styles.subtractIcon3}
                alt=""
                src="/subtract1.svg"
              />
              <div className={styles.ourTeamSectionWrapper1}>
                <div className={styles.ourTeamSection3}>
                  <div className={styles.ourTeamSection3}>
                    <b className={styles.comprehensiveTestingSolution}>
                      Comprehensive Testing Solution
                    </b>
                    <div className={styles.youHaveThe}>
                      Sattva offers a wide range of testing capabilities,
                      allowing you to address accessibility, functional UI,
                      security, and performance testing requirements from a
                      single report on a single platform.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.illustrationIcon}
          alt=""
          src="/illustration.svg"
        />
      </div>
    </div>
  );
};

export default WhySattvaContainer;
