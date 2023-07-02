import styles from "./FeatureCard.module.css";
const FeatureCard = () => {
  return (
    <div className={styles.bgParent}>
      <div className={styles.bg} />
      <div className={styles.projectsParent}>
        <div className={styles.projects}>
          <div className={styles.sectionTitle}>
            <b className={styles.ourFeatures}>OUR FEATURES</b>
            <img className={styles.lineIcon} alt="" src="/line2.svg" />
            <img className={styles.lineIcon1} alt="" src="/line2.svg" />
            <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
          </div>
        </div>
        <div className={styles.groupParent}>
          <div className={styles.itemParent}>
            <div className={styles.item}>
              <div
                className={styles.configureOnceAnd}
              >{`Configure once and run it as many times, using different data sets across various platforms & browsers`}</div>
              <b className={styles.configureOnce}>{`Configure Once `}</b>
              <img
                className={styles.eosConfigMapFilledIcon}
                alt=""
                src="/eos-config-map-filled.svg"
              />
            </div>
            <div className={styles.item1}>
              <div className={styles.validateTheFlow}>
                Validate the flow and dependencies across different modules from
                start to finish
              </div>
              <b className={styles.endToEnd}>End to End Testing</b>
              <img className={styles.icon} alt="" src="/icon.svg" />
            </div>
            <div className={styles.item2}>
              <div className={styles.reuseYourExisting}>
                Reuse your existing setup without having to re-configure to save
                on costs
              </div>
              <b className={styles.configureOnce}>Cost Effective</b>
              <img className={styles.icon1} alt="" src="/icon1.svg" />
            </div>
            <div className={styles.item3}>
              <div
                className={styles.useDrag}
              >{`Use Drag & Drop to build sophisticated test cases without any coding`}</div>
              <b className={styles.configureOnce}>Zero Coding Required</b>
              <img className={styles.icon2} alt="" src="/icon2.svg" />
            </div>
          </div>
          <div className={styles.itemGroup}>
            <div className={styles.item4}>
              <div className={styles.utilizeTheBuiltIn}>
                Utilize the built-in load testing to stress test your
                application and collect metrics
              </div>
              <b className={styles.loadTesting}>Load Testing</b>
              <img className={styles.vectorIcon1} alt="" src="/vector3.svg" />
            </div>
            <div className={styles.item5}>
              <div className={styles.integrateYourApplication}>
                Integrate your application server to capture all run-time errors
              </div>
              <b className={styles.serverPlugIn}>Server Plug-in</b>
              <img className={styles.icon3} alt="" src="/icon3.svg" />
            </div>
            <div className={styles.item6}>
              <div className={styles.gainAccessTo}>
                Gain access to over 50 built-in reports and test analytics data
                with the ability to create custom reports
              </div>
              <b className={styles.loadTesting}>Reporting Analytics</b>
              <img className={styles.icon4} alt="" src="/icon4.svg" />
            </div>
            <div className={styles.item7}>
              <div
                className={styles.integrateYourApplication}
              >{`Add a free Chrome extension  build test cases seamlessly and push them to Sattva `}</div>
              <b className={styles.sattvaRecorder}>Sattva Recorder</b>
              <img className={styles.icon5} alt="" src="/icon5.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
