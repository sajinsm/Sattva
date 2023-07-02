import styles from "./DevOpsPipelineContainer.module.css";
const DevOpsPipelineContainer = () => {
  return (
    <div className={styles.itemParent}>
      <div className={styles.item}>
        <div className={styles.easilyManagesYour}>
          Easily manages your DevOps pipeline
        </div>
        <b className={styles.jenkins}>Jenkins</b>
        <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
      </div>
      <div className={styles.item1}>
        <div className={styles.bringsAllYour}>
          Brings all your testing messages to a centralized communication
          platform
        </div>
        <b className={styles.slack}>Slack</b>
      </div>
      <div className={styles.item2}>
        <div className={styles.easilyManagesYour}>
          Increases your coverage of your cross browser testing across 2000+
          browser combinations
        </div>
        <b className={styles.browserstack}>BrowserStack</b>
        <div className={styles.icon}>
          <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default DevOpsPipelineContainer;
