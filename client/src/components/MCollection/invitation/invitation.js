import React, { Component } from "react";
import { Container, Row, Col, Input, Icon, Button, CollectionItem, Modal } from "react-materialize";
import API from "../../../utils/API"

const type = props => { props.type };
const passdata = props => { props.data };

class Invitation extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			passdata.map(item =>
				<CollectionItem>
					<Modal
						header='Modal Header'
						bottomSheet
						trigger={<Button>MODAL BUTTOM SHEET STYLE</Button>}>
						<h1>{item.eventName}</h1>
						<h3>Hosted by {item.host}</h3>
						<h4>Start Date: {item.startDate}</h4>
						<h4>End Date: {item.endDate}</h4>
						<h5>Description:</h5>
						<p>{item.description}</p>
					</Modal>
				</CollectionItem>
			)
		)
	}

}

export default Invitation;


