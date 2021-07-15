const { repositories } = require("../database");
const { contact: contactRepository } = repositories;
const {
  general: { isValidPhone, isEmpty, hasEnoughLength },
} = require("../validations");

const operationTypes = {
  delete: "eliminado de contacto",
  update: "actualizado de contacto",
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
const validateContactData = ({ name, phone }) => {
  const minumNameLength = 2;
  if (!isValidPhone(phone))
    throw new Error("El teléfono especificado no es validado");
  if (isEmpty(name)) throw new Error("No se especifico un nombre");
  if (!hasEnoughLength(name, minumNameLength))
    throw new Error(
      `El nombre especificado debe ser mayor a  ${minumNameLength}`
    );
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
    validateContactData(contact);
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
    return validateAffectedContactsCount(
      deletedContactsCount,
      operationTypes.delete
    );
  } catch (error) {
    throw error;
  }
};
const updateContact = async (id, contact) => {
  try {
    await validateExistenceContact(id);

    const updatedContactsCount = await contactRepository.updateContact(
      id,
      contact
    );
    return validateAffectedContactsCount(
      updatedContactsCount,
      operationTypes.update
    );
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
