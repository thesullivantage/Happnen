import React, { Component } from "react";
import { Container, Row, Col, Input, Icon, Button, CollectionItem } from "react-materialize";
import Invitation from "./invitation/invitation";
// import { MyEvent } from "./myEvent"
// import { PublicEvent } from "./publicEvent"
import API from "../../utils/API"
import Collection from "react-materialize/lib/Collection";
import MyEvent from "./myEvent";
import PublicEvent from "./publicEvent";

class MCollection extends React.Component {

	constructor(props) {
		super(props);
	}

	state = {
		data: this.props.data
	}


	render() {

		if (this.props.type === "invitation" && this.props.data) {
			return (
				<Collection>
					{/* changed from this.props.data */}
					<Invitation data={this.props.data} />
				</Collection>
			);

		} else if (this.props.type === "myEvents" && this.props.data) {
			return (
				<Collection>
					<MyEvent data={this.props.data} />
				</Collection>
			);

		} else if (this.props.type === "publicEvents") {
			return (
				<PublicEvent markerObj={this.props.markerObj} />
			)

		} else if (!this.props.data) {
			return null;

		} else {
			return (
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