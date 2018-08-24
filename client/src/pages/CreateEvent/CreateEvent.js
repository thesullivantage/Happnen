import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Input, Icon, Button, Radio, File, Checkbox, DatePicker } from "react-materialize";
import Logo from "../../components/Logo/index";
import "./CreateEvent.css";
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class Event extends Component {
    state = {
        host: "",
        eventName: "",
        location: "",
        date: "",
        time: "",
        QR: "",
        invited: [],
        attending: [],
        description: "",
        type: 1,
        picUrl: ""
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
        this.setState({ eventName: "", location: "", date: "", time: "", QR: "", description: "", picUrl: "" });
    };

    render() {
        return (
            <Container>
                {/* Insert FAB */}

                <Row>
                    <Input
                        s={12}
                        label="Event Name"
                        name="eventName"
                        type="text"
                        className="validate"
                        value={this.state.eventName}
                        onChange={this.handleInputChange}>
                        <Icon></Icon>
                    </Input>
                </Row>

                <Row>
                    <Input
                        s={12}
                        label="Location"
                        name="location"
                        type="text"
                        className="validate"
                        value={this.state.location}
                        onChange={this.handleInputChange}>
                        <Icon></Icon>
                    </Input>
                </Row>

                <Row>
                    <Input
                        s={6}
                        label="Date"
                        name="date"
                        type="text"
                        className="datepicker"
                        value={this.state.date}
                        onChange={this.handleInputChange}>
                        <Icon></Icon>
                    </Input>

                    <Input
                        s={6}
                        label="Time"
                        name="time"
                        type="text"
                        className="validate"
                        value={this.state.time}
                        onChange={this.handleInputChange}>
                        <Icon></Icon>
                    </Input>
                </Row>

                <Row>
                    <Input
                        s={12}
                        label="QR Code"
                        name="QR"
                        type="checkbox"
                        value={this.state.QR} />
                </Row>

                <Row>
                    <Input
                        s={12}
                        label="Event Description"
                        name="description"
                        type="textarea"
                        className="validate"
                        value={this.state.description}
                        onChange={this.handleInputChange}>
                        <Icon></Icon>
                    </Input>
                </Row>

                <Row>
                <Input 
                name='type' 
                type='radio' 
                value='1' 
                label='Public' />
                <Input 
                name='type' 
                type='radio' 
                value='2' 
                label='Invite Only' />
                <Input 
                name='type' 
                type='radio' 
                value='3' 
                label='Private' />
                </Row>

                <Row>
                    <Input 
                    type="file" 
                    label="File" s={12} />
                </Row>

                <Row>
                    <Button 
                    className="Submit" 
                    onClick={this.handleFormSubmit}>Submit</Button>
                </Row>

            </Container>
        );
    }
}

export default Event;