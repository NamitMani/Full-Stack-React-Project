import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css"

function Navigation() {
  return (
    <nav>
      <ul>
        <li className="nav-li">
          <Link className="nav-link" to="/addresses">Addresses</Link>
        </li>
        <li className="nav-li">
          <Link className="nav-link" to="/">Transfer</Link>
        </li>
        <li className="nav-li">
          <Link className="nav-link" to="/wallet">Wallet</Link>
        </li>
        <li className="nav-li">
            <Link className="nav-link" to="/transactionHistory">Transactions</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
