import styles from "./ContainerWrapper.module.css";
const ContainerWrapper = () => {
  return (
    <div className={styles.bgParent}>
      <div className={styles.bg} />
      <div className={styles.ourTeamSectionWrapper}>
        <div className={styles.ourTeamSection}>
          <div className={styles.text}>
            <div className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </div>
            <b className={styles.meetOurTeam}>Meet our team</b>
          </div>
          <div className={styles.teamMembers}>
            <div className={styles.teamMember}>
              <div className={styles.info}>
                <img
                  className={styles.socialRowIcon}
                  alt=""
                  src="/social-row1.svg"
                />
                <div className={styles.cofounderCeo}>Cofounder, CEO</div>
                <div className={styles.leonardJohnDavies}>
                  Leonard John Davies
                </div>
              </div>
              <img className={styles.imageIcon} alt="" src="/image1@2x.png" />
            </div>
            <div className={styles.teamMember1}>
              <div className={styles.info1}>
                <img
                  className={styles.socialRowIcon1}
                  alt=""
                  src="/social-row1.svg"
                />
                <div className={styles.cofounderCoo}>Cofounder, COO</div>
                <div className={styles.francisWeber}>Francis Weber</div>
              </div>
            </div>
            <div className={styles.teamMember2}>
              <div className={styles.info2}>
                <div className={styles.socialRowParent}>
                  <img
                    className={styles.socialRowIcon2}
                    alt=""
                    src="/social-row1.svg"
                  />
                  <div className={styles.vpOfEngineering}>
                    VP of Engineering
                  </div>
                  <div className={styles.kylaObrien}>Kyla Obrien</div>
                </div>
                <img className={styles.imageIcon} alt="" src="/image2@2x.png" />
              </div>
              <img className={styles.imageIcon2} alt="" src="/image3@2x.png" />
            </div>
            <div className={styles.teamMember3}>
              <div className={styles.info3}>
                <img
                  className={styles.socialRowIcon3}
                  alt=""
                  src="/social-row1.svg"
                />
                <div className={styles.softwareEngineer}>Software Engineer</div>
                <div className={styles.adrianDixon}>Adrian Dixon</div>
              </div>
              <img className={styles.imageIcon} alt="" src="/image4@2x.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerWrapper;
