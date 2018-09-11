import React, { Component } from "react";
import { Container, Row, Col, Input, Icon, Button, CollectionItem, Modal } from "react-materialize";
import API from "../../../utils/API";
import moment from 'moment';
import DeleteBtn from "../../DeleteBtn";
import AcceptBtn from "../../AcceptBtn";
import EventLabel from "../misc/EventLabels";
import QRCode from 'react-qr-code';
import UnacceptBtn from "../../UnacceptBtn";
import InvModal from "./InvModal"


// helper function to convert date
function convertDate(inputDate) {
	// adjust format here to adjust all dates displayed:
	return moment(inputDate).format("llll")
}

class Invitation extends React.Component {


	render() {

		console.log("impData", this.props.data.obj.invites)
		const data = this.props.data.obj.invites
		const user = this.props.data.obj._id
		if (data) {
			// Conditional Rendering Here 
				return (
					data.map(item =>
						<CollectionItem>
							<InvModal data={item} user={user}/>
						</CollectionItem>
					)
				)

		} else {
			return <h4>Get your life together, make some friends, and get invited to things here!</h4>
		}
	}

}

export default Invitation;


