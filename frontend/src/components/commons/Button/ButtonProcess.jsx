import React from "react";
import ButtonTooltip from "../Tooltips/ButtonTooltip";
const ButtonProcess = ({
  className = "mr-1",
  color = "primary",
  tooltipText = "Procesar",
  text = "Procesar",
  id = "proccess",
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
      {text} <i className="fa fa-spinner"></i>
    </ButtonTooltip>
  );
};

export default ButtonProcess;
