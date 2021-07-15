import React, { useState } from "react";
import Tooltip from "./Tooltip";
import { Button } from "reactstrap";
const TooltipButton = ({
  placement = "bottom",
  id,
  tooltipText,
  children,
  outline = false,
  ...rest
}) => (
  <>
    {/* <Tooltip placement={placement} id={id} tooltipText={tooltipText}> */}
    {/* {(id) => (
      <Button id={id} outline={outline} {...rest}>
        {children}
      </Button>
    )} */}
    {/*  </Tooltip> */}
    <Button id={id} outline={outline} {...rest}>
      {children}
    </Button>
  </>
);
export default TooltipButton;
