import React from "react";

import { isInvalidInput } from "../../../validations/generalValidations";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
const Input = ({
  name,
  label,
  errors,
  id,
  value,
  onChange,
  type = "text",
  hasInnerErrorMessage = false,
  onEnter,
  placeholder = "",
  className = "",
  isRequired = false,
  disabled = false,
  readOnly = false,
  ...rest
}) => {
  const handlePressEnter = (e) => {
    if (e?.code == "Enter" || e?.code == "NumpadEnter") {
      onEnter && onEnter();
    }
  };

  return (
    <div className="form-group">
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
        className={`form-control ${
          isInvalidInput(errors, name) ? "is-invalid" : ""
        }   ${className} `}
        name={name}
        id={id ? id : name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        onKeyUp={handlePressEnter}
        disabled={disabled}
        readOnly={readOnly}
        {...rest}
      />

      <ErrorMessage
        errors={errors}
        name={name}
        type="feedback"
        isInnerErrorProperty={hasInnerErrorMessage}
      />
    </div>
  );
};

export default Input;
