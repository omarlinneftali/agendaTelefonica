import React from "react";

import { isInvalidInput } from "../../../validations/generalValidations";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
const InputFile = ({
  name,
  label,
  innerLabel = "Seleccionar",
  errors,
  id,
  onChange,
  isRequired = false,
  hasInnerErrorMessage = false,
  ...rest
}) => {
  return (
    <>
      <div className="custom-file">
        {label && (
          <label
            htmlFor={id ? id : name}
            className={`text-left ${isRequired ? "is-required" : ""}`}
            style={{ fontSize: "14px" }}
          >
            {label}
          </label>
        )}

        <input
          {...rest}
          name={name}
          id={id ? id : name}
          onChange={onChange}
          type="file"
          className="custom-file-input"
          id="customFileLang"
        />

        <label className="custom-file-label " htmlFor="customFileLang">
          {innerLabel}
        </label>
      </div>
      <ErrorMessage
        errors={errors}
        name={name}
        type="feedback"
        isInnerErrorProperty={hasInnerErrorMessage}
      />
    </>
  );
};

export default InputFile;
