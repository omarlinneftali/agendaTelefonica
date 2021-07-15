import React from "react";
import ButtonTooltip from "../Tooltips/ButtonTooltip";
const ButtonSave = ({
  className = "mr-1",
  color = "success",
  tooltipText = "Guardar",
  text = "Guardar",
  id = "save",
  onClick,
  isAdd = true,
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
      {text} <i className="fa fa-floppy-o"></i>
    </ButtonTooltip>
  );
};

export default ButtonSave;
