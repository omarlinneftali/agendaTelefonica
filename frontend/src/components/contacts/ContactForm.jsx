import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import { v4 as uuid } from "uuid";
import { Input, InputFile } from "../commons/Inputs";
import {
  ButtonSave,
  ButtonEdit,
  ButtonDelete,
  ButtonAdd,
} from "../commons/Button";
import {
  getContactById,
  saveContact,
} from "../../services/contacts/contactsService";
import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";
import { convertFileToBase64 } from "../../utils/utilityFileFunctions";
import contact from "../../assets/images/contact.png";
const ContactForm = () => {
  const initialState = {
    name: "",
    photo: "",
    phone: "",
  };
  const [contactState, setContactState] = useState(initialState);

  const { name, photo, phone } = contactState;

  const getInputValue = (input) => {
    if (input?.type === "checkbox") {
      return input?.checked;
    }

    if (input?.type === "date") {
      return input?.value?.toString();
    }

    if (input?.type === "file") {
      return input?.files;
    }
    return input?.value;
  };

  const handleChangeInput = ({ currentTarget: input }) => {
    const value = getInputValue(input);
    const { name } = input;
    setContactState((data) => ({ ...data, [name]: value }));
  };

  const handleChangeFile = ({ currentTarget: input }) => {
    const { name } = input;
    const file = input.files[0];

    convertFileToBase64(file, (Base64Image) => {
      setContactState((data) => ({
        ...data,
        [name]: Base64Image,
      }));
    });
  };

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

      if (contacts[0]) {
        setContactState((data) => ({ ...data, ...contacts[0] }));
      }
    } catch (error) {
      if (error?.response?.status === noFound) {
        history.replace("/not-found");
        console.error("erroer update");
      }
    }
  };

  const handleSaveContact = async () => {
    const { data } = await saveContact(contactState);

    if (data.success) {
      history.replace("/contacts");
    }
    return;
  };
  return (
    <Row>
      <Col md={12}>
        <Row>
          <Col md={12}>
            {" "}
            <Row>
              <Col md={3}>
                <Input
                  name="name"
                  label="Nombre"
                  value={name}
                  onChange={handleChangeInput}
                  //    errors={errors}
                  isRequired
                />
              </Col>
              <Col md={3}>
                <Input
                  name="phone"
                  label="Teléfono"
                  value={phone}
                  onChange={handleChangeInput}
                  //   errors={errors}
                />
              </Col>
            </Row>
            <Row>
              <Col md={3}>
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
                  onChange={handleChangeFile}
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
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ContactForm;
