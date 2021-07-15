import React from "react";
import Table from "../commons/Table";
import { Input } from "../commons/Inputs";
import { ButtonEdit, ButtonDelete } from "../commons/Button";
const ContactsTable = ({ data, handleEditContact, handleDeleteContact }) => {
  const columns = [
    {
      Header: "Teléfono",
      accessor: "phone",
    },
    {
      Header: "Nombre",
      accessor: "name",
    },

    {
      Header: "Acciones",
      Cell: ({ original: contact }) => {
        return (
          <>
            <center
              style={{
                width: "100%",
              }}
            >
              <ButtonEdit onClick={() => handleEditContact(contact)} />

              <ButtonDelete onClick={() => handleDeleteContact(contact)} />
            </center>
          </>
        );
      },
    },
  ];
  return (
    <>
      <Table columns={columns} data={data}></Table>
    </>
  );
};

export default ContactsTable;
