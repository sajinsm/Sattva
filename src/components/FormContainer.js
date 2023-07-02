import styles from "./FormContainer.module.css";
const FormContainer = () => {
  return (
    <div className={styles.form}>
      <button className={styles.primaryButton}>
        <div className={styles.primaryButtonText}>Send Message</div>
      </button>
      <div className={styles.formField}>
        <b className={styles.firstName}>First Name</b>
        <div className={styles.john}>John</div>
        <div className={styles.line} />
      </div>
      <div className={styles.formField1}>
        <b className={styles.firstName}>Last Name</b>
        <div className={styles.john}>Doe</div>
        <div className={styles.line} />
      </div>
      <div className={styles.formField2}>
        <b className={styles.firstName}>Email Id</b>
        <div className={styles.john}>johndoe@gmail.com</div>
        <div className={styles.line} />
      </div>
      <div className={styles.formField3}>
        <b className={styles.firstName}>Subject</b>
        <div className={styles.line} />
      </div>
      <div className={styles.formField4}>
        <b className={styles.firstName}>Message</b>
        <div className={styles.typeYourMessege}>Type your Messege</div>
        <div className={styles.textArea} />
      </div>
    </div>
  );
};

export default FormContainer;
