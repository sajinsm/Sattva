import { useMemo } from "react";
import styles from "./SubscriptionFormSection.module.css";
const SubscriptionFormSection = ({ propTop, propWidth }) => {
  const groupDiv5Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const unlockThePotentialStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.footerParent} style={groupDiv5Style}>
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
        <form className={styles.form}>
          <div className={styles.formField}>
            <button className={styles.secondaryButton}>
              <div className={styles.secondaryButtonText}>Subscribe</div>
            </button>
            <input className={styles.input} type="text" maxLength minLength />
            <div className={styles.yourEmail}>Your email</div>
          </div>
          <b className={styles.subscribeToGet}>
            Subscribe to get latest updates
          </b>
        </form>
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
            <div className={styles.contactsattvacom}>contact@sattva.com</div>
            <div className={styles.div}>(703) 123 - 4566</div>
            <div className={styles.xyzStreetCity}>
              XYZ Street City, State 12345
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <button className={styles.primaryButton}>
          <div className={styles.primaryButtonText}>Contact Us</div>
        </button>
        <b className={styles.readyToGet}>Ready to get started with Sattva?</b>
        <div
          className={styles.unlockThePotential}
          style={unlockThePotentialStyle}
        >
          Unlock the potential of automation testing with Sattva.
        </div>
      </div>
      <img className={styles.logoFull1} alt="" src="/logo--full-1@2x.png" />
    </div>
  );
};

export default SubscriptionFormSection;
