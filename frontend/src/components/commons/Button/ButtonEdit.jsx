import React from "react";
import ButtonTooltip from "../Tooltips/ButtonTooltip";
const ButtonEdit = ({
  className = "mr-1",
  color = "success",
  tooltipText = "Editar",
  id = "edit",
  text = "Editar",
  onClick,
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
      {text} <i className="fa fa-pencil-square-o"></i>
    </ButtonTooltip>
  );
};

export default ButtonEdit;
