import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router'
import { Container, Row, Col, Input, Icon, Button } from "react-materialize";
import Logo from "../../components/Logo/index";
import "./Login.css";
import API from "../../utils/API"
import HappnenIcon from "../../components/Icon/index"

class Homepage extends Component {
  state = {
    username: "",
    password: "",
    redirect: false
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    }, () => console.log(this.state.password));
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(`Username: ${this.state.username}\nPassword: ${this.state.password}`);

    const loginObj = {
      username: this.state.username,
      password: this.state.password
    }
    console.log("suObj: ", loginObj)
    API.login(loginObj)
      .then(res => {
        sessionStorage.user = loginObj.username;
        // Do this if status is 200
        this.setState({ username: "", password: "", redirect: true })
        console.log(res)
      })
      .catch(err => console.log(err));
      //alert if all fields aren't completed
  };

  render() {

    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/mapdisplay'/>;
    }

    return (
      <Container>

        <Button floating fab='horizontal' toolbarEnabled='true' className='red' icon='add' large style={{ bottom: '45px', left: '24px' }}>
          <Button floating icon='pin_drop' className='purple' node='a' href='http://localhost:3000/mapdisplay'
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
            height="500px"
            width="100%"
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
