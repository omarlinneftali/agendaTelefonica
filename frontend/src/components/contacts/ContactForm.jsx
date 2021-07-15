import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import { v4 as uuid } from "uuid";
import { Input, InputFile } from "../commons/Inputs";
import { ButtonSave } from "../commons/Button";
import {
  getContactById,
  saveContact,
} from "../../services/contacts/contactsService";
import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";
import { convertFileToBase64 } from "../../utils/utilityFileFunctions";
import contact from "../../assets/images/contact.png";
import {
  messageDialog,
  displayHttpErrorMessage,
} from "../../utils/utilityMessageDialogFunctions";
import { getInputValue } from "../../utils/utilityInputFunctions";
import {
  isValidPhone,
  hasEnoughLength,
} from "../../validations/generalValidations";
import useForm from "../../hooks/useForm";

const ContactForm = () => {
  const initialState = {
    name: "",
    photo: "",
    phone: "",
  };
  const validations = {
    phone: (phone) =>
      !isValidPhone(phone) ? "Telefono especificado es invalido" : "",
    name: (name) =>
      !hasEnoughLength(name, 5) ? "Nombre especificado es invalido" : null,
  };

  const { handleChangeInputFile, handleChangeInput, errors, state, setState } =
    useForm(initialState, validations);

  const { name, photo, phone } = state;
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => populateContact(), []);

  const populateContact = async () => {
    const noFound = 404;
    try {
      if (id === "new") return;
      const {
        data: { data: contacts },
      } = await getContactById(id);
      const contact = contacts[0];

      if (contact) {
        setState((data) => ({ ...data, ...contacts[0] }));
      }
    } catch (error) {
      if (error?.response?.status === noFound) {
        history.replace("/not-found");
        console.error("erroer update");
      }
    }
  };

  const handleSaveContact = async () => {
    try {
      const { data } = await saveContact(state);

      if (data.success) {
        history.replace("/contacts");
      }
      messageDialog({ text: data.message });
      return;
    } catch (error) {
      displayHttpErrorMessage(error);
    }
  };
  return (
    <center className="justify-content-center mt-5">
      <Card className={"w-25 align-items-center justify-content-center"}>
        <CardBody>
          <Row>
            <Col md={12}>
              <center>
                <img
                  className="w-25 mb-3"
                  src={photo}
                  alt="user_foto"
                  onError={(e) => (e.target.src = `${contact}`)}
                />
              </center>

              <InputFile
                name="photo"
                type="file"
                label="Foto"
                onChange={handleChangeInputFile}
              />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Input
                name="name"
                label="Nombre"
                value={name}
                onChange={handleChangeInput}
                errors={errors}
                isRequired
              />
            </Col>
            <Col md={12}>
              <Input
                name="phone"
                label="Teléfono"
                value={phone}
                onChange={handleChangeInput}
                errors={errors}
              />
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <div className="float-right mt-3">
                <ButtonSave onClick={handleSaveContact} />
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </center>
  );
};

export default ContactForm;
