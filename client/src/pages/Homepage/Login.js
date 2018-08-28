import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Input, Icon, Button } from "react-materialize";
import Logo from "../../components/Logo/index";
import "./Login.css";
import API from "../../utils/API"

class Homepage extends Component {
  state = {
    username: "",
    password: "",
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);

    const suObj = {
      username: this.state.username,
      password: this.state.password
    }
    console.log("suObj: ", suObj)
    API.signUp(suObj)
      .then(res => {
        this.setState({ username: "", password: "" })
        console.log(res)
      })
      .catch(err => console.log(err));

  };

  render() {
    return (
      <Container>

        <Button floating fab='horizontal' toolbarEnabled='true' className='red' icon='add' large style={{ top: '45px', left: '24px' }}>
          <Button floating icon='pin_drop' className='blue' node='a' href='http://localhost:3000/mapdisplay'
            data-position="top" data-delay="50" tooltip="What's Happnen" />
          <Button floating icon='person' className='blue' node='a' href='http://localhost:3000/'
            data-position="top" data-delay="50" tooltip="Login" />
          <Button floating icon='person_add' className='green' node='a' href='http://localhost:3000/signup'
            data-position="top" data-delay="50" tooltip="Create Account" />
          <Button floating icon='add_box' className='yellow darken-1' node='a' href='http://localhost:3000/createevent'
            data-position="top" data-delay="50" tooltip="Create Event" />
          <Button floating icon='assignment_ind' className='red' node='a' href='http://localhost:3000/profile'
            data-position="top" data-delay="50" tooltip="Profile" />
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
            s={6}
            label="Username"
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
            label="Password"
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

        <p> Continue Without Account </p> <p> Create Account </p> <p>Forgot Your Account/Password</p>

      </Container>
    );
  }
}

export default Homepage;
