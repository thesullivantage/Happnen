import React, { Component } from "react";
import { Container, Row, Col, Input, Icon, Button, CollectionItem, Modal } from "react-materialize";
import API from "../../../utils/API";
import moment from 'moment';
import DeleteBtn from "../../DeleteBtn";
import AcceptBtn from "../../AcceptBtn";
import EventLabel from "../misc/EventLabels";

// helper function to convert date
function convertDate(inputDate) {
	// adjust format here to adjust all dates displayed:
	return moment(inputDate).format("llll")
}

class Invitation extends React.Component {

	// state = {
		
	// }

	componentDidMount() {

	}

	render() {
		console.log("PATHFINDER", this.props.data.obj.invites)
		const impData = this.props.data.obj.invites
		console.log("impData", impData)
		if (impData) {
			return (
				impData.map(item =>
					<CollectionItem>
						<Modal
							header
							basic
							trigger={<Button>{item.eventName}</Button>}>
							<h1>{item.eventName}</h1>
							<h4>Hosted by {item.host}</h4>
							<h5>Start Date: {convertDate(item.startDate)}</h5>
							<h5>End Date: {convertDate(item.endDate)}</h5>
							<h5>Description: </h5>
							<p className="event-description">{item.description}</p>
							<AcceptBtn status/>
							<DeleteBtn status/>

						</Modal>
					</CollectionItem>
				)
			)
		} else {
			return <h4>Get your life together, make some friends, and get invited to things here!</h4>
		}
	}

}

export default Invitation;


