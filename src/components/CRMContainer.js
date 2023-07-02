import styles from "./CRMContainer.module.css";
const CRMContainer = ({ crmDescription, crmTestingSolutionDescrip }) => {
  return (
    <div className={styles.postBody}>
      <div className={styles.bg} />
      <div className={styles.aLeadingCrm}>{crmDescription}</div>
      <b className={styles.aboutTheClient}>About The Client</b>
      <b className={styles.buildingAComprehensive}>
        {crmTestingSolutionDescrip}
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
  );
};

export default CRMContainer;
