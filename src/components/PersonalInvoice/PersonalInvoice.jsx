import styles from "./PersonalInvoice.module.css";

export default function PersonalInvoice({ open, setOpen, id }) {
  return (
    <section className={styles.container} onClick={() => setOpen(false)}>
      <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
        <header className={styles.header}>
          <time className={styles.date}>data</time>
          <h2 className={styles["name-page"]}>INVOICE</h2>
          <p className={styles["client-name"]}>Customer name</p>
          <p className={styles["client-invoice"]}>Invoice #</p>
        </header>
        <main className={styles["general-info"]}>
          <table className={styles["general-info__table"]}>
            <thead className={styles["general-info__head"]}>
              <tr>
                <th>ID</th>
                <th>WEIGHT</th>
                <th>PRICE</th>
              </tr>
            </thead>
            <tbody className={styles["general-info__body"]}>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
              </tr>
            </tbody>
            <tfoot className={styles["general-info__foot"]}>
              <tr>
                <td></td>
                <td className={styles["general-info__total-weight"]}>Total weight: 2</td>
                <td className={styles["general-info__total-price"]}>Total price: 3</td>
              </tr>
            </tfoot>
          </table>
        </main>
        <footer className={styles.footer}>
          <div className={styles["total-pack"]}>You received 5 packages</div>
          <div className={styles["total-conclusion"]}>Thank you for using our services</div>
        </footer>
      </div>
    </section>
  );
}
