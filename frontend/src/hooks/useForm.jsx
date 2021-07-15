import React, { useEffect, useState } from "react";
import { convertFileToBase64 } from "../utils/utilityFileFunctions";
import { getInputValue } from "../utils/utilityInputFunctions";

const useForm = (initialState, validations) => {
  const [state, setState] = useState(initialState);
  const [errors, setStateErrors] = useState({});

  const getInputErrorMessage = (input, validations) => {
    const { name, value } = input;
    const errorsMessage = validations[name](value);
    return errorsMessage;
  };

  const handleChangeInput = ({ currentTarget: input }) => {
    const value = getInputValue(input);
    const { name } = input;
    const errorMessage = getInputErrorMessage(input, validations);

    const newErrors = { ...errors };

    if (errorMessage) {
      setStateErrors((errors) => ({ ...newErrors, [name]: errorMessage }));
    } else {
      delete newErrors[name];
      setStateErrors((errors) => ({ ...newErrors, [name]: errorMessage }));
    }
    setState((data) => ({ ...data, [name]: value }));
  };

  const handleChangeInputFile = ({ currentTarget: input }) => {
    const { name } = input;
    const file = input.files[0];

    convertFileToBase64(file, (Base64Image) => {
      setState((data) => ({
        ...data,
        [name]: Base64Image,
      }));
    });
  };

  return { handleChangeInputFile, handleChangeInput, errors, state, setState };
};

export default useForm;
