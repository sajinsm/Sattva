import { useMemo } from "react";
import styles from "./SubscribeSection.module.css";
const SubscribeSection = ({
  gOVRIGHT15Jan20232043281,
  sattvaCanSolveYourChallen,
  exploreHowSattvaCanEmpowe,
  propTop,
}) => {
  const groupDiv3Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className={styles.footerParent} style={groupDiv3Style}>
      <div className={styles.footer}>
        <div className={styles.bg} />
        <div className={styles.footerInner}>
          <div className={styles.frameWrapper}>
            <div className={styles.govright15Jan20232043281Wrapper}>
              <img
                className={styles.govright15Jan20232043281}
                alt=""
                src={gOVRIGHT15Jan20232043281}
              />
            </div>
          </div>
        </div>
        <div className={styles.form}>
          <div className={styles.formField}>
            <div className={styles.secondaryButton}>
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
        <div className={styles.primaryButton}>
          <div className={styles.secondaryButtonText}>Contact Us</div>
        </div>
        <b className={styles.sattvaCanSolve}>{sattvaCanSolveYourChallen}</b>
        <div className={styles.exploreHowSattva}>
          {exploreHowSattvaCanEmpowe}
        </div>
      </div>
      <img className={styles.logoFull1} alt="" src="/logo--full-1@2x.png" />
    </div>
  );
};

export default SubscribeSection;
