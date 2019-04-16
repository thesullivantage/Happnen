import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router';
import { Container, Row, Col, Input, Icon, Button } from "react-materialize";
import Logo from "../../components/Logo/index";
import API from "../../utils/API";
import HappnenIcon from "../../components/Icon/index";
import NonUserFab from "../../components/NonUserFab";


class Homepage extends Component {
	state = {
		username: "",
		password: "",
		redirect: false
	};

	componentDidMount = props => {
		console.log("What this is: ", this.props)
	}

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();



		const loginObj = {
			username: this.state.username,
			password: this.state.password
		}
		API.login(loginObj)
			.then(res => {
				sessionStorage.setItem('user', this.state.username);
			})
			.then(() => {
				this.setState({ username: "", password: ""});
				// const { history } = this.props;
				// history.push('/mapdisplay')
				// this.setState({redirect: "true"})
			})
			.then(() => {
				this.setState({redirect: "true"});				
			})
			.catch(err => console.log(err));
	};

	render() {

		let { from } = this.props.location.state || { from: { pathname: "/" } };
		let { redirect } = this.state;

		if (redirect) { return <Redirect  to={from} /> }

		return (
			<Container>

				<Row>
					<Logo
						className="Logo"
						alt="HappnenLogo"
						height="500px"
						width="100%"
					/>
				</Row>

				<Row>

					<Input
						s={6}
						// label="Username"
						name="username"
						type="text"
						className="validate"
						value={this.state.username}
						onChange={this.handleInputChange}>
						<Icon>face</Icon>
					</Input>
				</Row>

				<Row>
					<Input
						s={6}
						// label="Password"
						name="password"
						type="password"
						value={this.state.password}
						onChange={this.handleInputChange}>
						<Icon>lock</Icon>
					</Input>
				</Row>

				<Row>
					<Button className="Submit" onClick={this.handleFormSubmit}>Submit</Button>
				</Row>

				<HappnenIcon
					className="Icon"
					alt="HappnenIcon"
					height="320px"
					width="100%" />

			</Container>
		);
	}
}

export default Homepage;
