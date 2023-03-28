import React from "react";
import "./TransactionHistory.css";

function TransactionHistory({ transactions }) {
  return (
    <div className="transaction-history-container">
      <h2 className="transaction-history-heading">Transaction History</h2>
      {transactions.length > 0 ? (
        <div className="transaction-list">
          {transactions.map((transaction, index) => (
            <div key={index} className="transaction-item">
              <div className="transaction-divs">
                <label className="transaction-from">From Address:</label>
                <div className="transaction-value">{transaction.from}</div>
              </div>
              <div className="transaction-divs">
                <label className="transaction-to">To Address:</label>
                <div className="transaction-value">{transaction.to}</div>
              </div>
              <div className="transaction-divs">
                <label className="transaction-amount">Amount:</label>
                <div className="transaction-value">{transaction.amount}</div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-transactions">No transactions made yet.</p>
      )}
    </div>
  );
}

export default TransactionHistory;
