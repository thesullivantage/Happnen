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

	state = {
		GTG: false,
		invited: true,
		userId: ""
	};

	componentDidMount = () => {


		const checkObj = {
			eventId: this.props.data._id,
			username: sessionStorage.user
		}

		//checking on front end
		
		API.findUser(checkObj)
			.then(user => {
				this.setState({
					userId: user.data._id
				}, () => {
					//Still using API.checker to avoid taking away the backend checking potential altogether
					
					
					var spentArr = this.props.data.spentIds
					var spent;
					if (spentArr.length == 0) {
						this.setState({
							GTG: true
						})
					} else if (spentArr.length > 0) {
						const checkSpent = spentArr.includes(this.state.userId)
						if (checkSpent == false) {
							this.setState({
								GTG: true
							})
						} else {
							return;
						}
					}
					
					
					// API.checker(checkObj)
					// 	.then(res => {
					// 		var invArr = res.invited
					// 		var invited = true
					// 		if (invArr) {
					// 			invited = invArr.includes(this.state.userId)
					// 		}
					// 		if (invited == true) {
					// 				var spentArr = res.spentIds
					// 				var spent = true;
					// 				if (spentArr === undefined) {
					// 					spent = false
					// 				} else if (spentArr.length) {
					// 					spent = spentArr.includes(this.state.userId)
					// 				}
					// 				if (spent == false) {
					// 					this.setState({
					// 						GTG: true
					// 					})
					// 				} else {
					// 					return;
					// 				}

					// 		} else {
					// 			return;
					// 		}
					// 	})
					// 	.catch(err => console.log("BAD CHECKER ERR!", err));
				})
			})
			.catch(err => console.log("BAD USER ERR: ", err));



		// API.
	}


	render = () => {
		if (this.state.GTG == true) {
			return (
				//add props here
				<ShowButton data={this.props.data} user={this.state.userId}/>
			)
		}
		else {
			return (
				<Grey />
			)
		}
	}

}

export default Private;


