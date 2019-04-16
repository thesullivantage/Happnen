import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router';
import { Container, Row, Col, Input, Icon, Button } from "react-materialize";
import Logo from "../../components/Logo/index";
import API from "../../utils/API";
import HappnenIcon from "../../components/Icon/index";
import NonUserFab from "../../components/NonUserFab";

//REDUX
class Homepage extends Component {
	constructor(props) {
        super(props);
        //rd1
        this.state = {
            loggedIn: "false"
        }
     }

	componentDidMount = props => {
		console.log("What this is: ", this.props)
	}
	handleInputChange = event => {
		const { name, value } = event.target;

		this.setState({
			[name]: value
		});
	};

    AuthCheck = () => {
        //JWT
        sessionStorage.user ? () : ()
    }

	render() {

		return (
			<div/>
		);
	}
}

export default Homepage;
