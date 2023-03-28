const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const nodeAddressesRouter = require("./routes/nodeAddresses");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/nodeAddresses", nodeAddressesRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
