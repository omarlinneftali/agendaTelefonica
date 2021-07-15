/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, { useState } from "react";
import { Tooltip, Button } from "reactstrap";

const TooltipComponent = ({
  placement = "bottom",
  id,
  children: Component,
  tooltipText,
  ...rest
}) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  Component = typeof Component == "function" ? Component(id, rest) : Component;

  return (
    <>
      {Component}
      {/* <Tooltip
        placement={placement}
        isOpen={tooltipOpen}
        target={id}
        toggle={toggle}
      > */}
      {/* {tooltipText} */}
      {/* </Tooltip> */}
    </>
  );
};

export default TooltipComponent;
