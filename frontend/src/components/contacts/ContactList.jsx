import React, { useEffect, useState } from "react";

import { Row, Col, Card, CardBody } from "reactstrap";
import ContactsTable from "./ContactTable";
import {
  getContacts,
  deleteContact,
} from "../../services/contacts/contactsService";
import InputSearch from "./../commons/Inputs/InputSearch";
import { useHistory, useParams } from "react-router-dom";
import { ButtonAdd } from "../commons/Button";
import { isValueStartsWith } from "../../utils/utilityGeneralFunctions";
import useForm from "./../../hooks/useForm";

import {
  messageDialog,
  messageConfirmationDialog,
  displayHttpErrorMessage,
} from "./../../utils/utilityMessageDialogFunctions";
const ContactList = () => {
  const initalState = {
    filter: "",
    contacts: [],
    filteredContacts: [],
  };
  const { state: contactsData, setState: setContactsData } =
    useForm(initalState);

  const { filter, contacts, filteredContacts } = contactsData;

  const handleChangeInput = ({ currentTarget: input }) => {
    setContactsData((data) => ({ ...data, filter: input.value }));
    handleSearchContact(input.value);
  };

  const handleSearchContact = (filter = "") => {
    const contactsFiltered = filterContacts(filter, contacts);
    setContactsData((data) => ({
      ...data,
      filteredContacts: contactsFiltered,
    }));
  };

  const filterContacts = (filter, contacts = []) => {
    const contactsFiltered = contacts?.filter(
      (contact) =>
        isValueStartsWith(contact?.name, filter) ||
        isValueStartsWith(contact?.phone, filter)
    );
    return contactsFiltered;
  };

  const populateContacts = async () => {
    const {
      data: { data: contacts },
    } = await getContacts();
    setContactsData((contactData) => ({
      ...contactData,
      contacts,
      filteredContacts: contacts,
    }));
  };
  const history = useHistory();

  const handleEditContact = ({ id }) => {
    history.push("contacts/" + id);
  };
  const handleAddContact = ({ id }) => {
    history.push("contacts/new");
  };
  const deleteContactElement = async (id) => {
    try {
      const { data } = await deleteContact(id);
      if (data.success) {
        const contactsUpdated = filteredContacts?.filter(
          (contact) => contact.id !== id
        );
        setContactsData((contactData) => ({
          ...contactData,
          contacts: contactsUpdated,
          filteredContacts: contactsUpdated,
        }));
      }
      messageDialog({ text: data.message });
    } catch (error) {
      displayHttpErrorMessage(error);
    }
  };

  const handleDeleteContact = ({ id }) => {
    messageConfirmationDialog({
      text: "Esta seguro que desea eliminar este elemento",
      callback: async (response) => {
        if (response) {
          deleteContactElement(id);
        }
      },
    });
  };

  useEffect(() => {
    populateContacts();
  }, []);

  return (
    <>
      <Card className="rounded">
        <CardBody>
          <Row>
            <Col md={12}>
              <InputSearch
                label="Buscar"
                onChange={handleChangeInput}
                value={filter}
                onClick={() => {
                  handleSearchContact(filter);
                }}
                onEnter={handleSearchContact}
              />
            </Col>
            <Col md={12}>
              <Row>
                <Col md={12}>
                  <div className="float-right mt-3 mb-3">
                    <ButtonAdd onClick={handleAddContact} />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <ContactsTable
                data={filteredContacts}
                handleEditContact={handleEditContact}
                handleDeleteContact={handleDeleteContact}
              />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
};

export default ContactList;
