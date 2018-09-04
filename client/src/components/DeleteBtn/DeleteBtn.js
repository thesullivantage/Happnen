import React from "react";
import "./DeleteBtn.css";
import Button from "react-materialize/lib/Button";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const DeleteBtn = props => (
  <Button className="delete-btn" {...props}>
    Decline
  </Button>
);

export default DeleteBtn;
