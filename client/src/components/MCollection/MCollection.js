import React, { Component } from "react";
import { Container, Row, Col, Input, Icon, Button, CollectionItem } from "react-materialize";
import Invitation from "./invitation/invitation";
// import { MyEvent } from "./myEvent"
// import { PublicEvent } from "./publicEvent"
import API from "../../utils/API"

class MCollection extends React.Component {

	componentDidMount() {
		console.log("test")
	}

	render() {
		console.log("Render")
		console.log("type", this.props.type)
		console.log("data", this.props.data)
		if (this.props.type === "invitation" && this.props.data) {
			console.log("Suxcess")
			return (
				<Invitation data={this.props.data} />
			);
		} else if (!this.props.data) {
			return null;
		} else {
			return(
				<h1>Teeest</h1>
			)
		}


		// } else if (type == "myEvent") {
		//   return <MyEvent data={passdata} />
		// } else {
		//   return <PublicEvent data={passdata} />
		// }
	}
}

export default MCollection;