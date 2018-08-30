import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Input, Icon, Button, Radio, File, Checkbox, Select, Autocomplete, List } from "react-materialize";
import Logo from "../../components/Logo/index";
import "./CreateEvent.css";
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import API from '../../utils/API';
import UserInvitedBtn from "../../components/UserInvitedBtn";

class Event extends Component {

    state = {
        host: "",
        eventName: "",
        location: "",
        // property for geocoded location:
        QR: "",
        invited: [],
        attending: [],
        description: "",
        type: 0,
        ageReq: 0,
        picUrl: "",
        userSearch: "",
        date: moment()
        //userQrs?
    };


    handleDateTimeChange = (date) => {
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

    handleAutocomplete = value => {
        console.log(value)
        this.setState({
            userSearch: value
        });
    };

    handleAdd = event => {
        event.preventDefault();
        console.log(this.state.userSearch);
        console.log(this.state.invited);
        this.setState({
            invited: [...this.state.invited, this.state.userSearch]
        })
    }

    deleteInvitee = event => {
        event.preventDefault();
        console.log(this);
    }

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.eventName && this.state.location) {
            
            // Use this if need to define type for db query
            // const invited = this.state.invited;
            // const mongoInvitedArr = invited.map(arr => mongoose.Types.String(arr));
            
            API.createEvent({
                host: sessionStorage.user,
                eventName: this.state.eventName,
                location: this.state.location,
                date: this.state.date,
                description: this.state.description,
                invited: this.state.invited,
            // See above
            // mongoInvited: mongoInvitedArr,
                type: this.state.type,
                ageReq: this.state.ageReq,
            })
            .then(res => {
                console.log(res);
                //Do this all on backend (controller) 
                // API.findAndInvite({
                //     people: this.state.invited
                // })
            })
            .catch(err => console.log(err));
        }
        alert(`${this.state.eventName}\n Created!`);
        this.setState({ eventName: "", location: "", description: "" });
    };



    render() {
        let usersInvited = this.state.invited;
        let userInvited = this.state.userSearch;
        return (
            <Container fluid>
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
                        <option value='1'>21+</option>
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
                    <Autocomplete
                        s={8}
                        type="text"
                        name="userSearch"
                        value={this.state.userSearch}
                        // onChange={this.handleUserSearchChange}
                        onAutocomplete={this.handleAutocomplete}
                        title='Invite Users'
                        data={
                            {
                                'Apple': "null",
                                'Microsoft': "null",
                                'Google': 'http://placehold.it/250x250'
                            }
                        }
                    />

                    <Button
                        className="Add"
                        onClick={this.handleAdd}>Add</Button>
                </Row>

                <Row>
                    <Col>
                        {usersInvited.map(userInvited =>
                            <UserInvitedBtn
                                id={userInvited}
                                value={userInvited}
                                onClick={this.deleteInvitee} />
                        )}
                    </Col>
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