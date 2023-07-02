import { useCallback } from "react";
import SattvaContainer from "../components/SattvaContainer";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent2.module.css";
const FrameComponent2 = () => {
  const navigate = useNavigate();

  const onButtonRowContainerClick = useCallback(() => {
    navigate("/our-platform");
  }, [navigate]);

  return (
    <div className={styles.headerParent}>
      <div className={styles.header}>
        <img className={styles.bgImageIcon} alt="" src="/bg-image2@2x.png" />
        <SattvaContainer
          imageIds="/group.svg"
          propRight="44.29%"
          propLeft="44.29%"
        />
        <div className={styles.headerText}>
          <b className={styles.fuelingGrowthAnd}>
            Fueling Growth and Speed with Amplified Peformance
          </b>
          <div className={styles.buttonRow} onClick={onButtonRowContainerClick}>
            <div className={styles.secondaryButton}>
              <div className={styles.secondaryButtonText}>Learn More</div>
            </div>
          </div>
        </div>
        <img className={styles.headerChild} alt="" src="/group-20932.svg" />
      </div>
    </div>
  );
};

export default FrameComponent2;
