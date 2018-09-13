import React, { Component } from "react";
import { Container, Row, Col, Input, Icon, Button, CollectionItem, Collection, Modal } from "react-materialize";
import API from "../../../../utils/API";
import moment from 'moment';
import EventLabel from "../../misc/EventLabels";
import QRCode from 'react-qr-code';
import "./Show.css"


// helper function to convert date
function convertDate(inputDate) {
	// adjust format here to adjust all dates displayed:
	return moment(inputDate).format("llll")
}

class ShowButton extends React.Component {

	state = {
		accessed: false,
		eventid: this.props.data._id,
		data: this.props.data,
		userId: this.props.user,
		location: this.props.data.location
	}

	componentDidMount() {
		console.log("FINAL DATA", this.state.data)
	}

	handleClick = () => {

	}

	// handleUnaccept() {
	// 	const inviteObj = {
	// 		userId: this.state.userId,
	// 		eventId: this.state.eventid
	// 	}
	// 	console.log("inviteObj: ", inviteObj)
	// 	API.inviteUnaccept(inviteObj)
	// 		.then(res => {
	// 			// Do this if status is 200
	// 			this.setState({ attending: false })
	// 			console.log(res)
	// 		})
	// 		.catch(err => console.log(err));
	// }

	render() {
		const item = this.state.data

		// Conditional Rendering Here 
		if (this.state.accessed == true) {
			return (
				<Collection>
					<CollectionItem className="locationColl center-align">
						<h5 className="makeit">Make it Count...</h5>
						<h5>{this.state.location}</h5>
					</CollectionItem>
				</Collection>
			)
		} else {

			return (
				<Collection className="locationWarn">
					<CollectionItem className="center-align">
						<h5>You may only access this event's location once. Do you wish to proceed? </h5>
						<Button className="daBigOne" onClick={this.handleClick}>YES</Button>
					</CollectionItem>
				</Collection>

			)
		}

	}

}

export default ShowButton;


