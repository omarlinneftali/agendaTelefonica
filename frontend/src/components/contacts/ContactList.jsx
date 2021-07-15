import React, { useEffect, useState } from "react";

import { Row, Col } from "reactstrap";
import ContactsTable from "./ContactTable";
import {
  getContacts,
  deleteContact,
} from "../../services/contacts/contactsService";
import InputSearch from "./../commons/Inputs/InputSearch";
import { useHistory, useParams } from "react-router-dom";

const ContactList = () => {
  const initalState = {
    filter: "",
    contacts: [],
    filteredContacts: [],
  };
  const [contactsData, setContactsData] = useState(initalState);

  const { filter, contacts, filteredContacts } = contactsData;

  const handleChange = ({ currentTarget: input }) => {
    setContactsData((data) => ({ ...data, filter: input.value }));
  };

  const handleSearchContact = () => {
    const contactsFiltered = filterContacts(filter, contacts);
    setContactsData((data) => ({
      ...data,
      filteredContacts: contactsFiltered,
    }));
  };

  const isValueStartsWith = (value, filter) =>
    value?.trim()?.toLowerCase()?.startsWith(filter?.trim()?.toLowerCase());

  const filterContacts = (filter, contacts = []) => {
    const contactsFiltered = contacts?.filter(
      (contact) =>
        isValueStartsWith(contact?.name, filter) ||
        isValueStartsWith(contact?.phone, filter)
    );
    return contactsFiltered;
  };

  const handleChangeContacts = async () => {
    const {
      data: { data: contacts },
    } = await getContacts();
    setContactsData((contactData) => ({
      ...contactData,
      contacts: contacts,
      filteredContacts: contacts,
    }));
  };
  const history = useHistory();

  const handleEditContact = ({ id }) => {
    history.push("contacts/" + id);
  };
  const handleDeleteContact = async ({ id }) => {
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
  };

  useEffect(() => {
    handleChangeContacts();
  }, []);

  return (
    <>
      <Row>
        <Col md={12}>
          <InputSearch
            label="Filtro"
            onChange={handleChange}
            value={filter}
            onClick={handleSearchContact}
            onEnter={handleSearchContact}
          />
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
    </>
  );
};

export default ContactList;
