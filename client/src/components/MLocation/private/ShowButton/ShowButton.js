import React, { Component } from "react";
import { Container, Row, Col, Input, Icon, Button, CollectionItem, Modal } from "react-materialize";
import API from "../../../../utils/API";
import moment from 'moment';
import EventLabel from "../../misc/EventLabels";
import QRCode from 'react-qr-code';


// helper function to convert date
function convertDate(inputDate) {
	// adjust format here to adjust all dates displayed:
	return moment(inputDate).format("llll")
}

class ShowButton extends React.Component {

	state = {
		attending: false,
		eventid: this.props.data._id,
		data: this.props.data,
		userId: this.props.user
	}

	componentDidMount() {
		const attending = this.state.data.attending
		const userId = this.props.user
		if (attending.includes(userId)) {
			this.setState({
				attending: true
			})
		}
		console.log("PLZ WORK", this.props.data)
		// console.log("user", this.state.userId)
		//call to check and see if invitation confirmed yet
		// Accepting userid as well as eventid
	}

	handleAccept() {

		const userI = this.props.user
		const eventI = this.props.data._id

		console.log("TestPLZ", this.state)

		const inviteObj = {
			userId: this.state.userId,
			eventId: this.state.eventid
		}
		console.log("inviteObj: ", inviteObj)
		API.inviteAccept(inviteObj)
			.then(res => {
				// Do this if status is 200
				this.setState({ attending: true })
				console.log(res)
			})
			.catch(err => console.log(err));

		//alert if all fields aren't completed	}
	}

	handleReject() {
		// const userI = this.props.user
		// const eventI = this.props.data._id

		console.log("TestPLZ", this.state)

		const inviteObj = {
			userId: this.state.userId,
			eventId: this.state.eventid
		}
		console.log("inviteObj: ", inviteObj)
		API.inviteDeny(inviteObj)
			.then(res => {
				// Do this if status is 200
				console.log("DELETED", res)
			})
			.catch(err => console.log(err));
	}

	handleUnaccept() {
		const inviteObj = {
			userId: this.state.userId,
			eventId: this.state.eventid
		}
		console.log("inviteObj: ", inviteObj)
		API.inviteUnaccept(inviteObj)
			.then(res => {
				// Do this if status is 200
				this.setState({ attending: false })
				console.log(res)
			})
			.catch(err => console.log(err));
	}

	render() {
		const item = this.state.data

		// Conditional Rendering Here 
		if (this.state.attending == false) {
			return (
				<h1>placeholder</h1>
			)
		} else {
			const btnStyle = {
				background: "green"
			}
			return (
				<h1>placeholder</h1>
			)
		}

	}

}

export default ShowButton;


