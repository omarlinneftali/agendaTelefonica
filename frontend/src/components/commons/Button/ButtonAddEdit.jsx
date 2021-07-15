import React from "react";
import ButtonAdd from "./ButtonAdd";
import ButtonEdit from "./ButtonEdit";
const ButtonAddEdit = ({
  className = "mr-1",
  color = "primary",
  id,
  onClick,
  isEdit = false,
  ...rest
}) => {
  return (
    <>
      {isEdit ? (
        <ButtonEdit className={className} id={id} onClick={onClick} {...rest} />
      ) : (
        <ButtonAdd className={className} id={id} onClick={onClick} {...rest} />
      )}
    </>
  );
};

export default ButtonAddEdit;
