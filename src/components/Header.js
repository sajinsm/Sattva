import { useMemo } from "react";
import styles from "./Header.module.css";
const Header = ({
  productId,
  propCursor,
  onPlatformTextClick,
  onWhySattvaTextClick,
  onCaseStudiesText1Click,
  onAboutUsText1Click,
}) => {
  const platformStyle = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

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
        <img className={styles.bxsearchIcon} alt="" src={productId} />
        <div className={styles.navLink}>
          <div className={styles.text} />
          <div
            className={styles.platform}
            onClick={onPlatformTextClick}
            style={platformStyle}
          >
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
      </div>
      <button className={styles.navbarButton}>
        <div className={styles.startFreeTrial}>START FREE TRIAL</div>
      </button>
    </div>
  );
};

export default Header;
