import React from "react";
import ButtonTooltip from "../Tooltips/ButtonTooltip";
const ButtonAdd = ({
  className = "mr-1",
  color = "primary",
  tooltipText = "Agregar",
  id = "add",
  onClick,
  isAdd = true,
  ...rest
}) => {
  return (
    <ButtonTooltip
      className="mr-1"
      color={color}
      tooltipText="Agregar"
      id={id || tooltipText}
      onClick={onClick}
      {...rest}
    >
      Agregar <i className="fa fa-plus"></i>
    </ButtonTooltip>
  );
};

export default ButtonAdd;
