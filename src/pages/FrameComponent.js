import { useCallback } from "react";
import SattvaContainer from "../components/SattvaContainer";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent.module.css";
const FrameComponent = () => {
  const navigate = useNavigate();

  const onButtonRowContainerClick = useCallback(() => {
    navigate("/our-platform");
  }, [navigate]);

  return (
    <div className={styles.headerParent}>
      <div className={styles.header}>
        <img className={styles.bgImageIcon} alt="" src="/bg-image@2x.png" />
        <SattvaContainer imageIds="/group.svg" />
        <div className={styles.headerText}>
          <b className={styles.empoweringInclusiveDigital}>
            Empowering Inclusive Digital Experiences For All
          </b>
          <div className={styles.buttonRow} onClick={onButtonRowContainerClick}>
            <div className={styles.secondaryButton}>
              <div className={styles.secondaryButtonText}>Learn More</div>
            </div>
          </div>
        </div>
        <img className={styles.headerChild} alt="" src="/group-2093.svg" />
      </div>
    </div>
  );
};

export default FrameComponent;
