import React, { Component } from "react";
import { Container, Row, Col, Input, Icon, Button, CollectionItem, Modal } from "react-materialize";
import moment from 'moment';
import API from "../../../utils/API";
import CancelBtn from "../../CancelBtn";

// helper function to convert date
function convertDate (inputDate) {
	// adjust format here to adjust all dates displayed:
  return moment(inputDate).format("llll")
}

class MyEvent extends React.Component {

	componentDidMount() {

	}

	render() {

		const impData = this.props.data.obj.myEvents
		console.log("MyEvent", this.props.data.obj)
		if (impData) {
			return (
				// <h1>Here I am</h1>
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
							<CancelBtn />

						</Modal>
					</CollectionItem>
				)
			)
		} else {
			return <h4>Get your life together, make some friends, and invite them to things here!</h4>
		}

	}

}

export default MyEvent;
