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
							<h3>Hosted by {item.host}</h3>
							<h4>Start Date: {convertDate(item.startDate)}</h4>
							<h4>End Date: {convertDate(item.endDate)}</h4>
							<h5>Description: </h5>
							<p>{item.description}</p>
							<AcceptBtn />
							<DeleteBtn />
						</Modal>
					</CollectionItem>
				)
			)
		} else {
			return <h1>Hello!!!</h1>
		}
	}

}

export default Invitation;


