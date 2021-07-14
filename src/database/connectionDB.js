const mysql = require("mysql2");

const { dbConfig } = require("../config");

const pool = mysql.createPool(dbConfig).promise();

const executeQuery = async (query, values = []) => {
  try {
    const [result] = await pool.query(query, values);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = { executeQuery };
