import React from "react";
import ButtonTooltip from "../Tooltips/ButtonTooltip";
const ButtonDetail = ({
  className = "mr-1",
  color = "primary",
  tooltipText = "Detalle",
  id = "detail",
  text = "Detalle",

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
      {" "}
      <i className="fa fa-info-circle"></i>
    </ButtonTooltip>
  );
};

export default ButtonDetail;
