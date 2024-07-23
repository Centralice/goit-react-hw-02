import s from "./TransactionHistory.module.css";

const TransactionHistory = (props) => {
  return (
    <div className={s.transactions}>
      <table className={s.table}>
        <thead>
          <tr className={s.head}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {props.items.map((transaction) => (
            <tr className={s.row} key={transaction.id}>
              <td className={s.cell}>{transaction.type}</td>
              <td className={s.cell}>{transaction.amount}</td>
              <td className={s.cell}>{transaction.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
