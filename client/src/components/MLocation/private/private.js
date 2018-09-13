import React, { Component } from "react";
import { Container, Row, Col, Input, Icon, Button, CollectionItem, Modal } from "react-materialize";
import API from "../../../utils/API";
import moment from 'moment';
import ShowButton from "./ShowButton";
import Grey from "./Grey";

// helper function to convert date
function convertDate(inputDate) {
	// adjust format here to adjust all dates displayed:
	return moment(inputDate).format("llll")
}

class Private extends React.Component {

	constructor(props) {
		super(props)
		// this.componentDidMount = this.componentDidMount.bind(this),
		// this.render = this.render.bind(this)
		// this.DeleteHandler.this
	}

	state = {
		data: "",
		user: ""
	};

	componentDidMount = () => {

		this.setState({
			data: this.props.data.obj.invites,
			user: this.props.data.obj._id
		}, () => console.log("WHOOP", this.state))
	}

	DeleteHandler = (value) => {

	}

	static getDerivedStateFromProps = (props, state) => {
		return {
			data: props.data.obj.invites,
			user: props.data.obj._id
		};
	}

	render = () => {
		console.log("impData", this.state)
		const data = this.props.data.obj.invites
		console.log("data", data)
		const user = this.props.data.obj._id

		// this.setState({
		// 	user: this.props.data.obj._id,
		// 	data: this.props.data.obj.invites
		// })

		// const data = this.state.data
		// const user = this.state.user

		if (data) {
			console.log("KEYZKEYZKEYZ", this.state)
			return (
				data.map(item =>
					<h1>placeholder</h1>
				)
			)

		} else {
			return <h4>Get your life together, make some friends, and get invited to things here!</h4>
		}
	}

}

export default Private;


