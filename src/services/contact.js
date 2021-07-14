const { repositories } = require("../database");
const { contact: contactRepository } = repositories;
const operationTypes = {
  delete: "Eliminado de contacto",
  update: "Actualizado de contacto",
};
const validateExistenceContact = async (id) => {
  try {
    const contact = await contactRepository.getContactsById(id);
    if (contact?.length === 0)
      throw new Error("No se encontro el contacto especificado");
    return contact;
  } catch (error) {
    throw error;
  }
};
const validateAffectedContactsCount = (
  affectedContactsCount,
  tipoOperacion = ""
) => {
  try {
    if (affectedContactsCount == 0)
      throw new Error(`La operacion de ${tipoOperacion || ""} no tuvo exito`);
    return true;
  } catch (error) {
    throw error;
  }
};
const validateIfContactWasCreated = (newContact) => {
  try {
    if (!newContact) throw new Error(`El contacto no fue creado`);
    return true;
  } catch (error) {
    throw error;
  }
};

const getAllContacts = async () => {
  try {
    const contacts = await contactRepository.getContacts();
    return contacts;
  } catch (error) {
    throw error;
  }
};
const getContactById = async (id) => {
  try {
    await validateExistenceContact(id);

    const contact = await contactRepository.getContactsById(id);

    return contact;
  } catch (error) {
    throw error;
  }
};

const createContact = async (contact) => {
  try {
    const newContact = await contactRepository.insertContact(contact);
    await validateIfContactWasCreated(newContact);
    return newContact;
  } catch (error) {
    throw error;
  }
};
const deleteContact = async (id) => {
  try {
    await validateExistenceContact(id);

    const deletedContactsCount = await contactRepository.deleteContact(id);
    return validateAffectedContactsCount(deletedContactsCount);
  } catch (error) {
    throw error;
  }
};
const updateContact = async (id, contact) => {
  try {
    await validateExistenceContact(id);

    const updatedContactsCount = await contactRepository.updateContact(contact);
    return validateAffectedContactsCount(updatedContactsCount, "");
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
};
