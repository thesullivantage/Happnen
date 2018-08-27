import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Input, Icon, Button, Radio, File, Checkbox, DatePicker, Select } from "react-materialize";
import Logo from "../../components/Logo/index";
import "./CreateEvent.css";
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';

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
        type: 0,
        ageReq: 0,
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

                <Button floating fab='horizontal' toolbarEnabled='true' className='red' icon='add' large style={{ top: '45px', left: '24px' }}>
                    <Button floating icon='assignment_ind' className='red' node='a' href='http://localhost:3000/profile' />
                    <Button floating icon='add_box' className='yellow darken-1' node='a' href='http://localhost:3000/createevent' />
                    <Button floating icon='person_add' className='green' node='a' href='http://localhost:3000/signup' />
                    <Button floating icon='attach_file' className='blue' node='a' href='http://localhost:3000/mapdisplay'/>
                </Button>

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
                        s={4}
                        label="Date"
                        name="date"
                        type="date"
                        className="datepicker"
                        value={this.state.date}
                        onChange={this.handleInputChange}>
                        <Icon></Icon>
                    </Input>

                    <TimePicker
                        s={4}
                        name="time"
                        type="time"
                        className="timepicker"
                        onChange={this.onChange}
                        value={this.state.time} />
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
                        s={6}
                        name='type'
                        type='select'
                        label="Privacy"
                        defaultValue='0'>
                        <option value='0'>Public</option>
                        <option value='1'>Invite Only</option>
                        <option value='2'>Private</option>
                    </Input>

                    <Input
                        s={6}
                        name='ageReq'
                        type='select'
                        label="Age Restrictions"
                        defaultValue='0'>
                        <option value='0'>All Ages</option>
                        <option value='1'>18+</option>
                        <option value='2'>21+</option>
                    </Input>
                </Row>

                <Row>
                    <Input
                        type="file"
                        label="Event Photo" s={12} />
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
                    <Button
                        className="Submit"
                        onClick={this.handleFormSubmit}>Submit</Button>
                </Row>

            </Container>
        );
    }
}

export default Event;