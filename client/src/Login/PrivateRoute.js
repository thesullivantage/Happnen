import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import { Redirect } from 'react-router';
import { Container, Row, Col, Input, Icon, Button } from "react-materialize";
import API from "../utils/API";


//REDUX

const Private = ({ component: Component, ...rest }) => (
	<Route {...rest} render={(props) => (
		// JWT
		sessionStorage.user
			? (<Component {...props} />)
			: (<Redirect to={{
				pathname: '/',
				state: { from: props.location }
			}} />)
	)} />
)
// class Homepage extends Component {
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

export default Private;
