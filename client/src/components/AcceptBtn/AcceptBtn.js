import React from "react";
import "./AcceptInviteBtn.css";
import {Button} from "react-materialize";

const AcceptBtn = props => (
<Button className="accept-btn" {...props}>
Accept
</Button>
);

export default AcceptBtn;