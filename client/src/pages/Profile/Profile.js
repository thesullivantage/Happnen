import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Input, Icon, Button } from "react-materialize";
import Logo from "../../components/Logo/index";
import "./Profile.css";

class Profile extends Component {
    state = {
        bio: "",
        links: "",
        events: "",
    };

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        alert("Profile settings saved.")
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
                    <h1>USERNAME:{this.state.username}</h1>

                </Row>

                <Row>
                    <Icon>camera_roll</Icon>
                    <Input
                        type="file"
                        label="Profile Photo" s={4} />
                </Row>

                <Row>
                    <Input
                        s={12}
                        label="Bio"
                        name="bio"
                        type="textarea"
                        className="validate"
                        value={this.state.bio}
                        onChange={this.handleInputChange}>
                        <Icon>mode_edit</Icon>
                    </Input>
                </Row>

                <Row>
                    <Button
                        className="Submit"
                        onClick={this.handleFormSubmit}>Submit</Button>
                </Row>

            </Container>

        )
    };
}

export default Profile;