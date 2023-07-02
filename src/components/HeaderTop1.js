import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HeaderTop1.module.css";
const HeaderTop1 = () => {
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

  return (
    <div className={styles.navbarParent}>
      <div className={styles.navbar}>
        <div className={styles.navbarInner}>
          <div className={styles.govright15Jan20232043281Wrapper}>
            <img
              className={styles.govright15Jan20232043281}
              alt=""
              src="/govright-15jan2023204328-11@2x.png"
            />
          </div>
        </div>
        <div className={styles.navLink}>
          <div className={styles.text} />
          <div className={styles.platform} onClick={onPlatformTextClick}>
            Platform
          </div>
          <div className={styles.platform} onClick={onWhySattvaTextClick}>
            Why Sattva?
          </div>
          <div className={styles.platform} onClick={onCaseStudiesText1Click}>
            Case Studies
          </div>
          <div className={styles.platform} onClick={onAboutUsText1Click}>
            About Us
          </div>
        </div>
        <img className={styles.bxsearchIcon} alt="" src="/bxsearch3.svg" />
        <img className={styles.logoTrans1} alt="" src="/logo--trans-1@2x.png" />
      </div>
      <button className={styles.navbarButton}>
        <div className={styles.startFreeTrial}>START FREE TRIAL</div>
      </button>
    </div>
  );
};

export default HeaderTop1;
