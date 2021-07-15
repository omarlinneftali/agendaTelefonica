const { executeQuery } = require("../connectionDB");
const { contactQueries } = require("../querys");

const getContactsById = async (id) => {
  try {
    const contacts = await executeQuery(contactQueries.select.byId, [id]);
    return contacts;
  } catch (error) {
    console.error("Error client Repository", error);
    throw error;
  }
};
const getContacts = async () => {
  try {
    const contacts = await executeQuery(contactQueries.select.all);
    return contacts;
  } catch (error) {
    console.error("Error client Repository", error);
    throw error;
  }
};
const insertContact = async ({ name, phone, photo }) => {
  try {
    const { insertId } = await executeQuery(contactQueries.insert, [
      name,
      phone,
      photo,
    ]);
    return { id: insertId, name, phone, photo };
  } catch (error) {
    console.error("Error client Repository", error);
    throw error;
  }
};

const deleteContact = async (id) => {
  try {
    const { affectedRows } = await executeQuery(contactQueries.delete, [id]);
    return affectedRows;
  } catch (error) {
    console.error("Error client Repository", error);
    throw error;
  }
};

const updateContact = async (id, { name, phone, photo = "" }) => {
  try {
    const { affectedRows } = await executeQuery(contactQueries.update, [
      name,
      phone,
      photo,
      id,
    ]);
    return affectedRows;
  } catch (error) {
    console.error("Error client Repository", error);
    throw error;
  }
};

module.exports = {
  getContacts,
  getContactsById,
  insertContact,
  deleteContact,
  updateContact,
};
