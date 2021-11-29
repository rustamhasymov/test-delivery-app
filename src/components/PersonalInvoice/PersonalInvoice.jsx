import styles from "./PersonalInvoice.module.css";

export default function PersonalInvoice({ open, setOpen, id }) {
  return (
    <section className={styles.container} onClick={() => setOpen(false)}>
      <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <time className={styles.date}>data</time>
          <h2 className={styles["name-page"]}>INVOICE</h2>
          <p>Customer name</p>
          <p>Invoice #</p>
        </div>
      </div>
    </section>
  );
}
