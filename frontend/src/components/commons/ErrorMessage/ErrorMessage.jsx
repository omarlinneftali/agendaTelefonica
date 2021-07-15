import React from "react";
import { Button } from "reactstrap";

const ErrorMessage = ({ errors, name, type = "alert" }) => {
  let className =
    type === "feedback" ? "invalid-feedback" : "alert alert-danger";

  if (errors && typeof errors === "string") {
    return (
      <div className={`${className}`} style={{ fontSize: "1em" }}>
        {errors}
      </div>
    );
  }
  return (
    <>
      {errors && errors[name] && (
        <div className={`${className}`} style={{ fontSize: "1em" }}>
          {errors[name]}
        </div>
      )}
    </>
  );
};

export default ErrorMessage;
