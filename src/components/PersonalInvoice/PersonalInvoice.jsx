import { useData } from "../../hooks/useData";
import styles from "./PersonalInvoice.module.css";

export default function PersonalInvoice({ setOpen, id }) {
  const [{ data }] = useData();
  const invoice = data && data.invoices.find((invoice) => invoice.id === id);
  const customer = data && data.customers.find((customer) => customer.id === id);
  const pckg = data && data.packages.filter((pckg) => pckg.customerid === id);

  console.log(pckg);
  if (Object.keys(data)?.length === 0 && !id) return <></>;
  console.log(data);
  return (
    <section className={styles.container} onClick={() => setOpen(false)}>
      <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
        <header className={styles.header}>
          <time className={styles.date}>{new Date().toLocaleDateString()}</time>
          <h2 className={styles["name-page"]}>INVOICE</h2>
          <p className={styles["client-name"]}>{customer?.name || "not found"}</p>
          <p className={styles["client-invoice"]}>
            <span>Invoice № :</span>
            <span>{invoice?.invoiceNumber || "not found"}</span>
          </p>
        </header>
        {pckg?.length > 0 && (
          <>
            <main className={styles["general-info"]}>
              <table className={styles["general-info__table"]}>
                <thead className={styles["general-info__head"]}>
                  <tr>
                    <th className={styles["general-info__head"]}>ID</th>
                    <th className={styles["general-info__head"]}>WEIGHT</th>
                    <th className={styles["general-info__head"]}>PRICE</th>
                  </tr>
                </thead>
                <tbody className={styles["general-info__body"]}>
                  {pckg.map((row) => (
                    <tr key={row.id}>
                      <td className={styles["general-info__body-info"]}>
                        {row.id.split("k").join("k ")}
                      </td>
                      <td className={styles["general-info__body-info"]}>
                        {row.weight.split("kg").join(" kg")}
                      </td>
                      <td className={styles["general-info__body-info"]}>{row.price}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className={styles["general-info__foot"]}>
                  <tr>
                    <td></td>
                    <td className={styles["general-info__total-weight"]}>
                      Total weight: {invoice.totalWeight}
                    </td>
                    <td className={styles["general-info__total-price"]}>
                      Total price: {invoice.totalPrice}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </main>
            <footer className={styles.footer}>
              <div className={styles["total-pack"]}>{`You received ${
                invoice.index === 1 ? `${invoice.index} package` : `${invoice.index} packages`
              }`}</div>
              <div className={styles["total-conclusion"]}>Thank you for using our services</div>
            </footer>
          </>
        )}
      </div>
    </section>
  );
}
