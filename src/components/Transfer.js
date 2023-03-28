import React, { useState } from "react";
import "./Transfer.css";
import TransferReceipt from "./TransferReceipt";
import { useLocation } from "react-router-dom";

const Transfer = ({ addTransaction }) => {
  const [amountInput, setAmountInput] = useState(0);
  const [amount, setAmount] = useState(0);
  const [showReceipt, setShowReceipt] = useState(false);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const from =
    "0x629ECA77B6BB9BC00459DA6A2498CFF18FDE8374DCE45AAEAE8544DE4DC4A735";
  const to =
    searchParams.get("to") ||
    "0xA3B3B078E27C19A4EF902724C92C974E0191FEB2C277ADDC4A559EBF0534DE4D";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amountInput <= 0) {
      alert("Please enter a value greater than 0.");
      return;
    }
    const transaction = { from, to, amount: amountInput };
    setAmount(amountInput);
    setShowReceipt(true);
    addTransaction(transaction);
  };

  return (
    <div className="transfer-container">
      <h2 className="transfer-heading">Transfer</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label className="label-text">From:</label>
          <div className="address-container">{from}</div>
        </div>
        <div className="input-container">
          <label className="label-text">To:</label>
          <div className="address-container">{to}</div>
        </div>
        <div className="input-container">
          <label className="label-text">Amount:</label>
          <input
            type="number"
            className="amount-input"
            value={amountInput}
            onChange={(e) => setAmountInput(e.target.value)}
          />
        </div>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
      {showReceipt && <TransferReceipt from={from} to={to} amount={amount} />}
    </div>
  );
};

export default Transfer;
