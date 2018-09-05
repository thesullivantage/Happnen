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

class PublicEvent extends React.Component {

	componentDidMount() {

	}

	render() {
		const markers = this.props.markers
		console.log(markers)
		if (markers) {
			return (

				this.state.markers.map(event => (
					<SideNavItem waves key={event.eventName} eventName={event.eventName} onClick={() => console.log(event)}>



						

					</SideNavItem>
				))





				// impData.map(item =>
				// 	<CollectionItem>
				// 		<AcceptBtn />
				// 		<DeleteBtn />
				// 		<Modal
				// 			header
				// 			basic
				// 			trigger={<Button>{item.eventName}</Button>}>
				// 			<h1>{item.eventName}</h1>
				// 			<h3>Hosted by {item.host}</h3>
				// 			<h4>Start Date: {convertDate(item.startDate)}</h4>
				// 			<h4>End Date: {convertDate(item.endDate)}</h4>
				// 			<h5>Description: </h5>
				// 			<p>{item.description}</p>

				// 		</Modal>
				// 	</CollectionItem>
				// )
			)
		} else {
			return <h1>No Events Nearby :-(</h1>
		}
	}

}

export default PublicEvent;


