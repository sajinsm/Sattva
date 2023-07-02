import { useMemo } from "react";
import styles from "./SattvaContainer.module.css";
const SattvaContainer = ({ imageIds, propRight, propLeft }) => {
  const groupIconStyle = useMemo(() => {
    return {
      right: propRight,
      left: propLeft,
    };
  }, [propRight, propLeft]);

  return (
    <div className={styles.statistics}>
      <div className={styles.sattvaSuhtVuhContainer}>
        <p className={styles.sattvaSuhtVuh}>Sattva [suht-vuh] | Sanskrit</p>
      </div>
      <i className={styles.purityVirtueGoodness}>purity, virtue, goodness</i>
      <div className={styles.line} />
      <img
        className={styles.groupIcon}
        alt=""
        src={imageIds}
        style={groupIconStyle}
      />
    </div>
  );
};

export default SattvaContainer;
