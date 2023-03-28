import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Import axios

import "./NodeAddresses.css";

const NodeAddresses = () => {
  const [nodeAddresses, setNodeAddresses] = useState([]);

  useEffect(() => {
    axios // Using axios
      .get("http://localhost:5000/api/nodeAddresses")
      .then((response) => setNodeAddresses(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="node-addresses-container">
      <h2 className="node-addresses-heading">Node Addresses:</h2>
      <div className="node-addresses-list">
        {nodeAddresses.map((nodeAddress) => (
          <li key={nodeAddress} className="node-addresses-item">
            <Link to={`/?to=${nodeAddress}`} className="node-addresses-link">
              {nodeAddress}
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
};

export default NodeAddresses;
