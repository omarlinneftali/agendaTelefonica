import React from "react";
import Input from "./Input";
import { isInvalidInput } from "../../../validations/generalValidations";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function InputIcon({
  label,
  iconTextPrepend,
  iconTextAppend,
  iconPrepend,
  iconAppend,
  PrependComponent,
  AppendComponent,
  id,
  onChange,
  onEnter,
  children,
  value,
  labelClass,
  name,
  errors,
  isRequired = false,
  ...rest
}) {
  const handlePressEnter = ({ code }) => {
    if (code == "Enter") {
      onEnter && onEnter();
    }
  };

  return (
    <div className="form-group">
      {label && (
        <label
          htmlFor={id ? id : name}
          className={`text-left ${isRequired ? "is-required" : ""}`}
          // style={{ fontSize: "14px" }}
        >
          {label}
        </label>
      )}
      <div className="input-group  has-validation">
        {(PrependComponent || iconPrepend || iconTextPrepend) && (
          <>
            <span className="input-group-prepend">
              {PrependComponent ? (
                PrependComponent
              ) : iconPrepend ? (
                <span className="input-group-text">
                  <i className={`fa ${iconPrepend}`} aria-hidden="true"></i>
                </span>
              ) : (
                <span className="input-group-text">{iconTextPrepend}</span>
              )}
            </span>
          </>
        )}
        {children ? (
          children
        ) : (
          <input
            className={`form-control ${isInvalidInput() ? "is-invalid" : ""}`}
            name={name}
            id={id ? id : name}
            value={value}
            onChange={onChange}
            onKeyUp={handlePressEnter}
            {...rest}
          />
        )}
        {(AppendComponent || iconAppend || iconTextAppend) && (
          <>
            <span className="input-group-append">
              {AppendComponent ? (
                AppendComponent
              ) : iconAppend ? (
                <span className="input-group-text">
                  <i className={`fa ${iconAppend}`} aria-hidden="true"></i>
                </span>
              ) : (
                <span className="input-group-text">{iconTextAppend}</span>
              )}
            </span>
          </>
        )}
      </div>
      <ErrorMessage errors={errors} name={name} type="alert" />
    </div>
  );
}

export default InputIcon;
