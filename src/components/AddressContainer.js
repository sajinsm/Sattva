import styles from "./AddressContainer.module.css";
const AddressContainer = () => {
  return (
    <div className={styles.header}>
      <div className={styles.bg} />
      <div className={styles.headerInner}>
        <div className={styles.contactDetailsParent}>
          <div className={styles.contactDetails}>
            <img
              className={styles.socialRowIcon}
              alt=""
              src="/social-row.svg"
            />
            <div className={styles.address}>
              <div className={styles.exampleRoadCityContainer}>
                <p className={styles.exampleRoad}>123 Example Road</p>
                <p className={styles.exampleRoad}>City, State Zipcode</p>
              </div>
              <b className={styles.address1}>Address</b>
            </div>
            <div className={styles.line} />
            <div className={styles.info}>
              <b className={styles.letsTalk}>{`Let's talk! `}</b>
              <div className={styles.div}>+1703 345 6789</div>
              <div className={styles.hellosattvacom}>hello@sattva.com</div>
            </div>
          </div>
          <div className={styles.text}>
            <div className={styles.bg1} />
            <b className={styles.howCanWeContainer}>
              <span>{`How can we `}</span>
              <span className={styles.help}>help</span>
              <span> you?</span>
            </b>
            <div className={styles.justAnswerA}>
              Just answer a few simple questions, so we can personalize the
              right experience for you!
            </div>
          </div>
          <div className={styles.sectionTitle}>
            <div className={styles.sectionTitle1}>
              <b className={styles.getInTouch}>GET in touch</b>
              <img className={styles.lineIcon} alt="" src="/line.svg" />
              <img className={styles.lineIcon1} alt="" src="/line.svg" />
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressContainer;
