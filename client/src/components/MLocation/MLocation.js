import React, { Component } from "react";
import { Container, Row, Col, Input, Icon, Button, CollectionItem } from "react-materialize";
// import { MyEvent } from "./myEvent"
// import { PublicEvent } from "./publicEvent"
import API from "../../utils/API"
import Collection from "react-materialize/lib/Collection";
import Private from "./private";
import Public from "./public";

class MLocation extends React.Component {

	constructor(props) {
		super(props);
	}

	state = {
		data: this.props.data
	}

	render() {
		console.log("Props", this.props.data)
		if (this.props.type === "invitation" && this.props.data) {
			return (
				<Collection>
					{/* changed from this.props.data */}
					<h1>placeholder</h1>
				</Collection>
			);

		} else if (this.props.type === "myEvents" && this.props.data) {
			return (
				<h1>placeholder</h1>
			);

		} else if (this.props.type === "publicEvents" && this.props.data) {
			console.log("SUCCES")
			console.log(this.props.markerObj)
			return (
				<h1>placeholder</h1>
			)

		} else if (!this.props.data) {
			return null;

		} else {
			return (
				<h1>placeholder</h1>
			)
		}


		// } else if (type == "myEvent") {
		//   return <MyEvent data={passdata} />
		// } else {
		//   return <PublicEvent data={passdata} />
		// }
	}
}

export default MLocation;