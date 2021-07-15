import React from "react";
import { FaPlusCircle,FaEdit  } from "react-icons/fa";
import InputIcon from "./InputIcon";
const InputAdd = ({
  name,
  label,
  errors,
  id,
  value,
  onChange,
  onClick,
  btnClass = "btn-primary",
  iconSize = "1.5em",
  isEdit=false,
  isRequired=false,
  ...rest
}) => {
  return (
    <InputIcon
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      errors={errors}
      isRequired={isRequired}
      {...rest}
      AppendComponent={
        <button
          className={`btn ${btnClass}`}
          type="button"
          onClick={onClick}
          style={{ fontSize: "14px" }}
        >
          {" "}
          {isEdit?        <FaEdit size={iconSize} />:  <FaPlusCircle size={iconSize} />
}
        </button>
      }
    />
  );
};

export default InputAdd;
