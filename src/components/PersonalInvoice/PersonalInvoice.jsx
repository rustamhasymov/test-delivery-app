import styles from "./PersonalInvoice.module.css";

export default function PersonalInvoice({ open, setOpen, id }) {
  return (
    <section className={styles.container} onClick={() => setOpen(false)}>
      <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}></div>
      </div>
    </section>
  );
}
