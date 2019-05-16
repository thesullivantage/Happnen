import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import { Redirect } from 'react-router';
import { Container, Row, Col, Input, Icon, Button } from "react-materialize";
import API from "../utils/API";
import preFab from "../components/Fab";

const Fab = withRouter(preFab)


//REDUX workaround, letting React Router change FAB as a conditional route rather than using a store for the time being
const Fabulous = ({ ...all }) => (
	<Route {...all} render={(props) => (
		// JWT
		sessionStorage.user
			? (<Component component={Fab} type="user" />)
			: (<Component component={Fab} type="nonuser" />)
	)} />
)
// class Homepage extens Component {
// 	constructor(props) {
// 		super(props);
// 		//rd1
// 		this.state = {
// 			loggedIn: "false"
// 		}
// 	}

// 	componentDidMount = props => {
// 		console.log("What this is: ", this.props)
// 	}

// 	render() {

// 		let {propObj} = this.props
// 		return (
// 			<Route
// 				{...rest}
// 				render={props =>
// 					sessionStorage.user ? (
// 						<Component {...props} />
// 					) : (
// 							<Redirect
// 								to={{
// 									pathname: "/login",
// 									state: { from: props.location }
// 								}}
// 							/>
// 						)
// 				}
// 			/>

// 		);
// 	}
// }

export default Fabulous;
