import React, { Component } from "react";
import { Container, Row, Col, Input, Icon, Button, CollectionItem, Collection, Modal } from "react-materialize";
import API from "../../../../utils/API";
import moment from 'moment';
import EventLabel from "../../misc/EventLabels";
import QRCode from 'react-qr-code';
import "./Show.css"
//Hopefully won't need the following in the future:
var Cryptr = require('cryptr')



// helper function to convert date
function convertDate(inputDate) {
	// adjust format here to adjust all dates displayed:
	return moment(inputDate).format("llll")
}

class ShowButton extends React.Component {

	state = {
		accessed: false,
		eventId: this.props.data._id,
		data: this.props.data,
		userId: this.props.user,
		location: this.props.data.location
	}

	handleDecrypt = () => {
		const cryptObj = {
			eventId: this.state.eventId,
			userId: this.state.userId
		}
		API.decrypter(cryptObj)
			.then(res => {
				API.spenter(cryptObj)
					.then(spentz => {
						var EKey = res.data.EKey
						const cryptr = new Cryptr(EKey)
						const dcLocat = cryptr.decrypt(this.state.location)
						this.setState({
							location: dcLocat,
							accessed: true
						})
					})
					.catch(err => console.log(err));

			})
			.catch(err => console.log(err));
	}

	// handleUnaccept() {
	// 	const inviteObj = {
	// 		userId: this.state.userId,
	// 		eventId: this.state.eventid
	// 	}
	// 	API.inviteUnaccept(inviteObj)
	// 		.then(res => {
	// 			// Do this if status is 200
	// 			this.setState({ attending: false })
	// 		})
	// 		.catch(err => console.log(err));
	// }

	render() {
		const item = this.state.data

		// Conditional Rendering Here 
		if (this.state.accessed == true) {
			return (
				<Collection className="accessGranted">
					<CollectionItem className="center-align">
						<h4>Access Granted</h4>
						<h5>{this.state.location}</h5>
					</CollectionItem>
				</Collection>
			)
		} else {

			return (
				<Collection className="locationWarn">
					<CollectionItem className="center-align">
						<h5>You may only access this event's location once. Do you wish to proceed? </h5>
						<Button className="daBigOne" onClick={this.handleDecrypt}>YES</Button>
					</CollectionItem>
				</Collection>

			)
		}

	}

}

export default ShowButton;


