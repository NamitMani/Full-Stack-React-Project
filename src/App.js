import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import NodeAddresses from "./components/NodeAddresses";
import TransactionHistory from "./components/TransactionHistory";
import Transfer from "./components/Transfer";
import TransferReceipt from "./components/TransferReceipt";
import Wallet from "./components/Wallet";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [address] = useState(
    "0x629ECA77B6BB9BC00459DA6A2498CFF18FDE8374DCE45AAEAE8544DE4DC4A735"
  );
  const [balance, setBalance] = useState(100000);
  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
    setBalance(balance - transaction.amount);
  };
   const updateBalance = (amount) => {
     setBalance(balance + amount);
   };
  const [transfer, setTransfer] = useState(null);

  const handleTransferSubmit = (transfer) => {
    setTransfer(transfer);
    addTransaction(transfer);
    updateBalance(-transfer.balance);
  };

  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <Transfer onTransferSubmit={handleTransferSubmit} addTransaction={addTransaction} />
          </Route>
          <Route path="/addresses">
            <NodeAddresses />
          </Route>
          <Route path="/receipt">
            <TransferReceipt transfer={transfer} />
          </Route>
          <Route path="/wallet">
            <Wallet address={address} transactions={transactions}/>
          </Route>
          <Route path={"/transactionHistory"}>
            <TransactionHistory transactions={transactions} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
