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
				<Collection>
					<Invitation data={this.props.data} />
				</Collection>
			);

		} else if(this.props.type === "myEvents") {
			return (
				<Collection>
					<MyEvent data={this.props.data}/>
				</Collection>
			);

		} else if (this.props.type === "publicEvents") {
			console.log("SUCCES")
			console.log(this.props.markerObj)
			return (
				<PublicEvent markerObj={this.props.markerObj}/>
			)
			
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