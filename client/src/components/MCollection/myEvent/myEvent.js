import React from "react";
import React, { Component } from "react";
import { Container, Row, Col, Input, Icon, Button, CollectionItem } from "react-materialize";
import { Invitation } from "./invitation/";
import { MyEvent } from "./myEvent"
import { PublicEvent } from "./publicEvent"
import API from "../../utils/API"

const type = props => { props.type };
const passdata = props => { props.data }

class MyEvent extends React.Component {

	componentDidMount() {

	}

	render() {
		passdata.map(item =>
			<CollectionItem>
				<Modal
					header='Modal Header'
					bottomSheet
					trigger={<Button>MODAL BUTTOM SHEET STYLE</Button>}>
					<h1>{item.eventName}</h1>
					<h3>{item.host}</h3>
				</Modal>
			</CollectionItem>
		)
	}

}

export default MyEvent;
