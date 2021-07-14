const express = require("express");
const path = require("path");
const dotEnv = require("dotenv");
const { cors } = require("./midlewares");
const { contact: contactRouter } = require("./routes");
const {
  serverConfig: { port },
  dbConfig,
} = require("./config");

dotEnv.config();

const app = express();
//General Exceptions
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
});

//MidleWares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors);
//Routers
app.use(contactRouter);

//Server Config
app.listen(port, () => console.log(`server running on port ${port}`));
