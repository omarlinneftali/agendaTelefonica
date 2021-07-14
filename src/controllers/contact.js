const { contact: contactService } = require("../services");

const successMessages = {
  created: "contacto creado exitosamente",
  deleted: "contacto Eliminado exitosamente",
  update: "contacto actualizado exitosamente",
};

const getResponse = (message, success = true, data = null) => {
  return { message, success, data };
};

const getAllContacts = async (req, res) => {
  try {
    const contacts = await contactService.getAllContacts();
    res.status(200).json(getResponse(null, true, contacts));
  } catch (error) {
    console.log("controller", error);
    res.status(400).json(getResponse(error.message, false));
  }
};
const getContactById = async (req, res) => {
  const { id } = req?.params;
  try {
    const contact = await contactService.getContactById(id);
    res.status(200).json(getResponse(null, true, contact));
  } catch (error) {
    console.log("controller", error);
    res.status(400).json(getResponse(error.message, false));
  }
};
const createContact = async (req, res) => {
  const contact = req?.body;
  try {
    const contactCreated = await contactService.createContact(contact);
    res
      .status(201)
      .json(getResponse(successMessages.created, true, contactCreated));
  } catch (error) {
    console.log("controller", error);
    res.status(400).json(getResponse(error.message, false));
  }
};
const updateContact = async (req, res) => {
  const contact = req?.body;
  const { id } = req?.params;
  try {
    await contactService.updateContact(id, contact);
    res.status(200).json(getResponse(successMessages.update));
  } catch (error) {
    console.log("controller", error);
    res.status(400).json(getResponse(error.message, false));
  }
};
const deleteContact = async (req, res) => {
  const { id } = req?.params;
  try {
    await contactService.deleteContact(id);
    res.status(200).json(getResponse(successMessages.deleted));
  } catch (error) {
    console.log("controller", error);
    res.status(400).json(getResponse(error.message, false));
  }
};

module.exports = {
  getAllContacts,
  getContactById,
  deleteContact,
  updateContact,
  createContact,
};
