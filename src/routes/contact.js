const express = require("express");
const router = express.Router();
const { contact: contactController } = require("../controllers");
router.get("/contacts", contactController.getAllContacts);
router.get("/contacts/:id", contactController.getContactById);
router.post("/contacts", contactController.createContact);
router.put("/contacts/:id", contactController.updateContact);
router.delete("/contacts/:id", contactController.deleteContact);

module.exports = router;
