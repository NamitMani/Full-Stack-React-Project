import React from "react";
import "./TransferReceipt.css";

const TransferReceipt = ({ from, to, amount, transfer }) => {
  const transactionHash =
    "0x1E00C589486F316E7F1B9B519DC10730826365A7951C5F5093233A9B4D2A84FD";
  const blockHash =
    "0x48A534E64E3B91484555483F2B6BEA7069261BF6B2E363B69B9BDCF2D15684FA";
  const blockNumber = 831;
  const gasUsed = 21000;

  return (
    <div className="receipt-container">
      <h2 className="receipt-heading">Transaction Receipt</h2>
      <div className="receipt-info">
        <label className="receipt-label">Transaction Hash:</label>
        <div className="receipt-value">{transactionHash}</div>
      </div>
      <div className="receipt-info">
        <label className="receipt-label">Block Hash:</label>
        <div className="receipt-value">{blockHash}</div>
      </div>
      <div className="receipt-info">
        <label className="receipt-label">Block Number:</label>
        <div className="receipt-value">{blockNumber}</div>
      </div>
      <div className="receipt-info">
        <label className="receipt-label">From:</label>
        <div className="receipt-value">{from}</div>
      </div>
      <div className="receipt-info">
        <label className="receipt-label">To:</label>
        <div className="receipt-value">{to}</div>
      </div>
      <div className="receipt-info">
        <label className="receipt-label">Amount:</label>
        <div className="receipt-value">{amount}</div>
      </div>
      <div className="receipt-info">
        <label className="receipt-label">Gas Used:</label>
        <div className="receipt-value">{gasUsed}</div>
      </div>
    </div>
  );
};

export default TransferReceipt;
