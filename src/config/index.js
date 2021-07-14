const dotEnv = require("dotenv");

dotEnv.config();

const dbConfig = require("./databaseConfig");
const serverConfig = require("./serverConfig");

module.exports = { dbConfig, serverConfig };
