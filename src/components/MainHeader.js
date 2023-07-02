import { useMemo } from "react";
import styles from "./MainHeader.module.css";
const MainHeader = ({
  dimensions,
  propTop,
  propHeight,
  propBottom,
  propTop1,
  propHeight1,
  propBottom1,
  onPlatformTextClick,
  onWhySattvaTextClick,
  onCaseStudiesText1Click,
  onAboutUsText1Click,
}) => {
  const groupDiv2Style = useMemo(() => {
    return {
      top: propTop,
      height: propHeight,
      bottom: propBottom,
    };
  }, [propTop, propHeight, propBottom]);

  const frameDivStyle = useMemo(() => {
    return {
      top: propTop1,
      height: propHeight1,
      bottom: propBottom1,
    };
  }, [propTop1, propHeight1, propBottom1]);

  return (
    <div className={styles.navbarParent}>
      <div className={styles.navbar}>
        <div className={styles.navbarInner} style={groupDiv2Style}>
          <div
            className={styles.govright15Jan20232043281Wrapper}
            style={frameDivStyle}
          >
            <img
              className={styles.govright15Jan20232043281}
              alt=""
              src="/govright-15jan2023204328-11@2x.png"
            />
          </div>
        </div>
        <img className={styles.bxsearchIcon} alt="" src={dimensions} />
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
      </div>
      <div className={styles.navbarButton}>
        <div className={styles.startFreeTrial}>START FREE TRIAL</div>
      </div>
    </div>
  );
};

export default MainHeader;
