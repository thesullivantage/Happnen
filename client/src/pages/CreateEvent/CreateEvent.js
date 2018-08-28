import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Input, Icon, Button, Radio, File, Checkbox, Select } from "react-materialize";
import Logo from "../../components/Logo/index";
import "./CreateEvent.css";
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

class Event extends Component {
    state = {
        host: "",
        eventName: "",
        location: "",
        QR: "",
        invited: [],
        attending: [],
        description: "",
        type: 0,
        ageReq: 0,
        picUrl: ""
    };

    constructor(props) {
        super(props)
        this.state = {
            date: moment()
        };
        this.handleDateTimeChange = this.handleDateTimeChange.bind(this);
    }

    handleDateTimeChange(date) {
        this.setState({
            date: date
        });
    }

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
                <Logo
                    className="Logo"
                    alt="HappnenLogo"
                    height="300px"
                    width="75%"
                />

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
                    <DatePicker
                        s={12}
                        name="date"
                        type="date"
                        className="date"
                        placeholderText="Event Date/Time"
                        isClearable={true}
                        selected={this.state.date}
                        value={this.state.date}
                        showYearDropdown
                        dateFormatCalendar="MMMM"
                        scrollableYearDropdown
                        onChange={this.handleDateTimeChange}
                        showTimeSelect
                        minDate={moment()}
                        dateFormat="LLL"
                        withPortal />
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