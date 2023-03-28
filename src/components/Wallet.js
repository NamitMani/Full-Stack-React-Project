import React, { useState, useEffect } from "react";
import "./Wallet.css";

const Wallet = ({ address, transactions }) => {
  const [balance, setBalance] = useState(100000);

  useEffect(() => {
    let totalAmount = 0;
    transactions.forEach((transaction) => {
      if (transaction.from === address) {
        totalAmount -= parseInt(transaction.amount);
      } else if (transaction.to === address) {
        totalAmount += parseInt(transaction.amount);
      }
    });

    setBalance((prevBalance) => {
      const newBalance = prevBalance + totalAmount;
      // if (newBalance < 0) {
      //   return prevBalance;
      // } else {
        return newBalance;
      // }
    });
  }, [transactions, address]);

  return (
    <div className="wallet-container">
      <h2 className="wallet-heading">Wallet</h2>
      <div className="address-container">
        <label className="address-label">Address: </label>
        <div className="address-text">{address}</div>
      </div>
      <div className="balance-container">
        <label className="balance-label">Balance: </label>
        <div className="balance-text">{balance}</div>
      </div>
    </div>
  );
};

export default Wallet;
