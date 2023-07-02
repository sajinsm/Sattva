import { useMemo } from "react";
import styles from "./DelightfulSoftwareContainer.module.css";
const DelightfulSoftwareContainer = ({
  competitiveAdvantage,
  deliveringExceptionalSoft,
  propTop,
  propRight,
  propRight1,
  propWidth,
}) => {
  const groupDiv6Style = useMemo(() => {
    return {
      top: propTop,
      right: propRight,
    };
  }, [propTop, propRight]);

  const competitiveAdvantageStyle = useMemo(() => {
    return {
      right: propRight1,
      width: propWidth,
    };
  }, [propRight1, propWidth]);

  return (
    <div className={styles.groupParent} style={groupDiv6Style}>
      <div className={styles.ourTeamSectionWrapper}>
        <div className={styles.ourTeamSectionWrapper}>
          <div className={styles.ourTeamSectionWrapper}>
            <b
              className={styles.competitiveAdvantage}
              style={competitiveAdvantageStyle}
            >
              {competitiveAdvantage}
            </b>
            <div className={styles.deliveringExceptionalSoftwar}>
              {deliveringExceptionalSoft}
            </div>
          </div>
        </div>
      </div>
      <img className={styles.subtractIcon} alt="" src="/subtract.svg" />
    </div>
  );
};

export default DelightfulSoftwareContainer;
