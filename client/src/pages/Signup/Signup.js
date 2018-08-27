import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Input, Icon, Button } from "react-materialize";
import Logo from "../../components/Logo/index";
import "./Signup.css";
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class Signup extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    over18: false,
    events: [],
    userEvents: [],
    invites: []
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({ username: "", password: "", email: "", over18: false });
  };

  render() {
    return (
      <Container>

        <Button floating fab='horizontal' toolbarEnabled='true' className='red' icon='add' large style={{ top: '45px', left: '24px' }}>
          <Button floating icon='assignment_ind' className='red' node='a' href='http://localhost:3000/profile' />
          <Button floating icon='add_box' className='yellow darken-1' node='a' href='http://localhost:3000/createevent' />
          <Button floating icon='person_add' className='green' node='a' href='http://localhost:3000/signup' />
          <Button floating icon='attach_file' className='blue' node='a' href='http://localhost:3000/mapdisplay'/>
        </Button>

        <Row>
          <Logo
            className="Logo"
            alt="HappnenLogo"
            height="300px"
            width="75%"
          />
        </Row>

        <Row>
          <Input
            s={12}
            label="Username"
            name="username"
            type="text"
            className="validate"
            value={this.state.username}
            onChange={this.handleInputChange}>
            <Icon>account_box</Icon>
          </Input>
        </Row>

        <Row>
          <Input
            s={6}
            label="Password"
            name="password"
            type="password"
            className="validate"
            value={this.state.password}
            onChange={this.handleInputChange}>
            <Icon>lock</Icon>
          </Input>

          <Input
            s={6}
            label="Validate Your Password"
            name="passwordValidate"
            type="password"
            className="validate"
            value={this.state.passwordValidate}>
            <Icon>lock</Icon>
          </Input>
        </Row>

        <Row>
          <Input
            s={12}
            label="Birthday"
            name="birthday"
            type="date"
            className="validate"
            value={this.state.birthday}
            onChange={this.handleInputChange}>
            <Icon>event</Icon>
          </Input>
        </Row>

        <Row>
          <Input
            s={12}
            label="Email"
            name="email"
            type="text"
            className="validate"
            value={this.state.email}
            onChange={this.handleInputChange}>
            <Icon>email</Icon>
          </Input>
        </Row>

        <Row>
          <Button className="Submit" onClick={this.handleFormSubmit}>Submit</Button>
        </Row>

        <p> Continue Without Account </p> <p> Forgot Your Account/Password? </p>
      </Container>
    );
  }
}

export default Signup;