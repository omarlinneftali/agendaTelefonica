import React from "react";
import { FaSearch } from "react-icons/fa";
import InputIcon from "./InputIcon";
const InputSearch = ({
  name,
  label,
  errors,
  id,
  value,
  onChange,
  onClick,
  btnClass = "btn-primary",
  iconSize = "1.5em",
  disabled = false,
  isRequired = false,

  ...rest
}) => {
  return (
    <InputIcon
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      errors={errors}
      disabled={disabled}
      isRequired={isRequired}
      {...rest}
      AppendComponent={
        <button className={`btn ${btnClass}`} type="button" onClick={onClick}>
          {" "}
          <FaSearch />
        </button>
      }
    />
  );
};

export default InputSearch;
