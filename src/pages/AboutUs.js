import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import AddressContainer from "../components/AddressContainer";
import EfficiencyContainer from "../components/EfficiencyContainer";
import ContainerWrapper from "../components/ContainerWrapper";
import Header from "../components/Header";
import styles from "./AboutUs.module.css";
const AboutUs = () => {
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

  const onLogoTrans1Click = useCallback(() => {
    navigate("/sattva-home-page");
  }, [navigate]);

  return (
    <div className={styles.aboutUs}>
      <FormContainer />
      <AddressContainer />
      <EfficiencyContainer />
      <ContainerWrapper />
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
            <div className={styles.instagram}>Why Sattva?</div>
            <div className={styles.services}>Our Platform</div>
            <b className={styles.home}>Home</b>
          </div>
          <div className={styles.connect}>
            <div className={styles.contactUs}>{`Linkedin `}</div>
            <div className={styles.caseStudies}>Twitter</div>
            <div className={styles.instagram}>Instagram</div>
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
      <img className={styles.logoFull1} alt="" src="/logo--full-1@2x.png" />
      <Header
        productId="/bxsearch.svg"
        propCursor="pointer"
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

export default AboutUs;
