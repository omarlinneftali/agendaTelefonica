import React from "react";
import Table from "../commons/Table";
import { Input } from "../commons/Inputs";
import { ButtonEdit, ButtonDelete } from "../commons/Button";
import contactDefaultImage from "../../assets/images/contact.png";

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
      Header: "Foto",

      Cell: ({ original: contact }) => {
        return (
          <>
            <div className="d-flex justify-content-center p-3">
              <img
                width="42"
                className="rounded-circle  
                "
                src={contact.photo}
                alt="contact_image"
                onError={(e) => (e.target.src = `${contactDefaultImage}`)}
              />
            </div>
          </>
        );
      },
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
