import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HeaderContainer.module.css";
const HeaderContainer = () => {
  const navigate = useNavigate();

  const onButtonRowClick = useCallback(() => {
    navigate("/our-platform");
  }, [navigate]);

  return (
    <div className={styles.header}>
      <img className={styles.bgImageIcon} alt="" src="/bg-image3@2x.png" />
      <div className={styles.statistics}>
        <div className={styles.sattvaSuhtVuhContainer}>
          <p className={styles.sattvaSuhtVuh}>Sattva [suht-vuh] | Sanskrit</p>
        </div>
        <i className={styles.purityVirtueGoodness}>purity, virtue, goodness</i>
        <div className={styles.line} />
      </div>
      <div className={styles.headerText}>
        <b
          className={styles.transformingManualTesting}
        >{`Transforming Manual Testing into Automated Solutions `}</b>
        <button className={styles.buttonRow} onClick={onButtonRowClick}>
          <div className={styles.secondaryButton}>
            <div className={styles.secondaryButtonText}>Learn More</div>
          </div>
        </button>
      </div>
      <img className={styles.headerChild} alt="" src="/group-20933.svg" />
    </div>
  );
};

export default HeaderContainer;
