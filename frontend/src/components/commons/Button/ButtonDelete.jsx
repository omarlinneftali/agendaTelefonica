import React from "react";
import ButtonTooltip from "../Tooltips/ButtonTooltip";
const ButtonDelete = ({
  className = "mr-1",
  color = "danger",
  tooltipText = "Eliminar",
  id,
  onClick,
  text = "Eliminar",
  ...rest
}) => {
  return (
    <ButtonTooltip
      className={className}
      color={color}
      tooltipText={tooltipText}
      id={id || tooltipText}
      onClick={onClick}
      {...rest}
    >
      {text} <i className="fa fa-trash"></i>
    </ButtonTooltip>
  );
};

export default ButtonDelete;
