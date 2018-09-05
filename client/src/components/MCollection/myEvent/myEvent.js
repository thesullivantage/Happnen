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
							<h3>Hosted by {item.host}</h3>
							<h4>Start Date: {convertDate(item.startDate)}</h4>
							<h4>End Date: {convertDate(item.endDate)}</h4>
							<h5>Description: </h5>
							<p>{item.description}</p>
							<CancelBtn />

						</Modal>
					</CollectionItem>
				)
			)
		} else {
			return <h1>Hello!!!</h1>
		}

	}

}

export default MyEvent;
