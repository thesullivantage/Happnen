import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Input, Icon, Button, Radio, File, Checkbox, Select, Autocomplete, List } from "react-materialize";
import Logo from "../../components/Logo/index";
import { Redirect } from 'react-router'
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
        autofill: [],
        invited: [],
        attending: [],
        description: "",
        type: 0,
        ageReq: 0,
        picUrl: "",
        userSearch: "",
        autoFData: [],
        userInvited: [],
        // date: moment(),
        // added start and end date KB
        startDate: moment(),
        endDate: null,
        redirect: false
        //userQrs?
    };

    componentDidMount = () => {
        API.autofillusers()
            .then(res => {
                console.log("AUTOFILLDATA", res.data);
                this.setState({
                    autofill: [...this.state.autofill, res.data]
                }, () => {
                    console.log("STATE", this.state.autofill)
                    const autofills = this.state.autofill
                    const aFillSplit = autofills[0].map(obj => {
                        if (!obj.picLink) {
                            var rObj = {};
                            rObj[obj.username] = 'null';
                            return rObj;
                        } else {
                            var rObj = {};
                            rObj[obj.username] = obj.picLink;
                            return rObj;
                        }
                    })
                    const aFillData = aFillSplit.reduce(function (result, currentObject) {
                        for (var key in currentObject) {
                            if (currentObject.hasOwnProperty(key)) {
                                result[key] = currentObject[key];
                            }
                        }
                        return result;
                    }, {});
                    this.setState({
                        autoFData: [...this.state.autoFData, aFillData]
                    }, () => console.log(this.state.autoFData))

                });
            })
            .catch(err => console.log(err))
    }

    handleStartDateTimeChange = (date) => {
        this.setState({
            startDate: date
        });
    }

    handleEndDateTimeChange = (date) => {
        this.setState({
            endDate: date
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


        //API."findAllUsers"
        /*.then(result => {
            -- pull _id's and users from result, put them into an array of 
            new objects, store this array in state (ex: as ObjId)
            -- Down to Autocomplete Options:
                -- Map over each objects username and put that in an autocomplete option
                -- On addUser click (this logic goes in handle add user function):
                    -- Existing functionality (add user buttons)
                    NEW Stuff
                    -- Grab text from button added
                    -- search array ObjId for this username, which index it occurs at
                    -- find the _id at that index, push it to this.state.invited
        })*/
    };

    handleAdd = event => {
        event.preventDefault();
        console.log(this.state.userSearch);
        const pushY = this.state.userSearch
        console.log("pushY", pushY)
        const toSendArr = this.state.userInvited
        console.log("toSendArr", toSendArr)
            if (!toSendArr.includes(pushY)) {
                toSendArr.push(pushY)
                this.setState({
                    userInvited: toSendArr
                }, () => {
                    console.log(this.state.userInvited)
                    const indexedAutofills = this.state.autofill[0]
                    const indexz = indexedAutofills.findIndex(item => item['username'] === this.state.userSearch);
                    const toPush = this.state.autofill[0][indexz]['_id']
                    const newArr = this.state.invited
                        if (!newArr.includes(toPush)) {
                            newArr.push(toPush)
                            this.setState({
                                //this is what we need to send to 
                                invited: newArr,
                            }, () => console.log(this.state.invited))
                        } else {
                            return;                            
                        }
                })            
            } else {
                return;
            }
        // id pushing function

                
            
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
                startDate: this.state.startDate,
                endDate: this.state.endDate,
                description: this.state.description,
                invited: this.state.invited,
                // See above
                // mongoInvited: mongoInvitedArr,
                type: this.state.type,
                ageReq: this.state.ageReq,
            })
                .then(res => {
                    console.log("EVENT CREATED", res);
                    this.setState({
                        redirect: true
                    })
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
        let usersInvited = this.state.userInvited;
        let userInvited = this.state.userSearch;

        const { redirect } = this.state;

        if (redirect) {
          return <Redirect to='/mapdisplay' />;
        }

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
                        name="startDate"
                        type="date"
                        className="date"
                        placeholderText="Event Date/Time"
                        isClearable={true}
                        selected={this.state.startDate}
                        selectsStart
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        value={this.state.startDate}
                        showYearDropdown
                        dateFormatCalendar="MMMM"
                        scrollableYearDropdown
                        onChange={this.handleStartDateTimeChange}
                        showTimeSelect
                        minDate={moment()}
                        dateFormat="LLL"
                        withPortal />
                    {/* DOUBLED UP ON DATEPICKER KB */}
                </Row>

                <Row>
                    <DatePicker
                        s={12}
                        name="endDate"
                        type="date"
                        className="date"
                        placeholderText="Event Date/Time"
                        isClearable={true}
                        selected={this.state.endDate}
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        selectsEnd
                        value={this.state.endDate}
                        showYearDropdown
                        dateFormatCalendar="MMMM"
                        scrollableYearDropdown
                        onChange={this.handleEndDateTimeChange}
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
                            this.state.autoFData[0]
                        }
                    />

                    <Button
                        className="Add"
                        onClick={this.handleAdd}>Add</Button>
                </Row>

                <Row>
                    <Col>
                        {usersInvited.map(item =>
                            <UserInvitedBtn
                                id={item}
                                value={item}
                                onClick={this.deleteInvitee}
                            />
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