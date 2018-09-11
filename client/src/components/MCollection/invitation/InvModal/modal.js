import React, { Component } from "react";
import { Container, Row, Col, Input, Icon, Button, CollectionItem, Modal } from "react-materialize";
import API from "../../../../utils/API";
import moment from 'moment';
import DeleteBtn from "../../../DeleteBtn";
import AcceptBtn from "../../../AcceptBtn";
import EventLabel from "../../misc/EventLabels";
import QRCode from 'react-qr-code';
import UnacceptBtn from "../../../UnacceptBtn";


// helper function to convert date
function convertDate(inputDate) {
	// adjust format here to adjust all dates displayed:
	return moment(inputDate).format("llll")
}

class Invitation extends React.Component {
	
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

	}

	handleUnaccept() {

	}

	render() {
		const item = this.state.data

		// Conditional Rendering Here 
		if (this.state.attending == false) {
			return (
				<Modal
					header
					basic
					trigger={<Button >{item.eventName}</Button>}>
					<Row>
						<Col>
							<h1>{item.eventName}</h1>
							<h4>Hosted by {item.host}</h4>
						</Col>
						<Col>
							<QRCode size={96} value={item.eventQr} />
						</Col>
					</Row>
					<h5>Location: {item.location}</h5>
					<h5>Start Date: {convertDate(item.startDate)}</h5>
					<h5>End Date: {convertDate(item.endDate)}</h5>
					<h5>Description: {item.description}</h5>
					<p className="event-description">{item.description}</p>
					<AcceptBtn status onClick={this.handleAccept.bind(this)} />
					<DeleteBtn status onClick={this.handleReject} />
				</Modal>
			)
		} else {
			const btnStyle = {
				background: "green"
			}
			return (
				<Modal
					header
					basic
					trigger={<Button style={btnStyle}>{item.eventName}</Button>}>
					<Row>
						<Col>
							<h1>{item.eventName}</h1>
							<h4>Hosted by {item.host}</h4>
						</Col>
						<Col>
							<QRCode size={96} value={item.eventQr} />
						</Col>
					</Row>
					<h5>Location: {item.location}</h5>
					<h5>Start Date: {convertDate(item.startDate)}</h5>
					<h5>End Date: {convertDate(item.endDate)}</h5>
					<h5>Description: {item.description}</h5>
					<p className="event-description">{item.description}</p>
					<UnacceptBtn />
				</Modal>
			)
		}

	}

}

export default Invitation;


