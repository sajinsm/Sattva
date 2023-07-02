import { useCallback } from "react";
import SattvaContainer from "../components/SattvaContainer";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent1.module.css";
const FrameComponent1 = () => {
  const navigate = useNavigate();

  const onButtonRowContainerClick = useCallback(() => {
    navigate("/our-platform");
  }, [navigate]);

  return (
    <div className={styles.headerParent}>
      <div className={styles.header}>
        <img className={styles.bgImageIcon} alt="" src="/bg-image1@2x.png" />
        <SattvaContainer
          imageIds="/group1.svg"
          propRight="44.21%"
          propLeft="44.37%"
        />
        <div className={styles.headerText}>
          <b
            className={styles.safeguardingYourDigital}
          >{`Safeguarding Your Digital Landscape from the Ground Up `}</b>
          <div className={styles.buttonRow} onClick={onButtonRowContainerClick}>
            <div className={styles.secondaryButton}>
              <div className={styles.secondaryButtonText}>Learn More</div>
            </div>
          </div>
        </div>
        <img className={styles.headerChild} alt="" src="/group-20931.svg" />
      </div>
    </div>
  );
};

export default FrameComponent1;
