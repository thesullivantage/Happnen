import React from "react";
import "./public.css";
import { Button } from "react-materialize";

const Public = props => (
	<Button className="accept-btn" {...props}>
		Accept
	</Button>
);

export default Public;