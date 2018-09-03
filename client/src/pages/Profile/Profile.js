import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Input, Icon, Button, Collection, CollectionItem } from "react-materialize";
import Logo from "../../components/Logo/index";
import HappnenIcon from "../../components/Icon/index";
import "./Profile.css";
import cloudinary from "cloudinary";
import API from "../../utils/API"

cloudinary.config({
    cloud_name: 'happnen',
    api_key: '782769678216731',
    api_secret: 'GX7JX8WmSTNIhq4dlBLKkXqO_lE'
});


class Profile extends Component {

    state = {
        userData: [],
        username: "",
        bio: "",
        picLink: "",
        events: ""
    };


    // componentDidMount() {
    //     API.populateProfile(username);
    //     
    // }

    // loadEvents = (username) => {
    //     API.getEvents(username)
    //     .then(res =>
    //     this.setState({eventsShit}))
    //     .catch(err => console.log(err));
    // };

    componentDidMount = () => {
        this.setState({ username: sessionStorage.user }, () => {



            console.log(this.state.username + " ogstate.username")


            if (this.state.username) {
                let userObj = {
                    username: this.state.username
                }
                console.log(userObj)
                API.populateProfile(userObj)
                    .then(res => {
                        console.log(res)
                        this.setState({
                            user: res,
                            // bio: this.state.user.bio, 
                            // picLink: this.state.user.picLink, 
                            // events: this.state.user.myEvents
                        }, () => {
                            console.log(this.state.user)
                        })
                        console.log("SUCCESS")
                    })
                    .catch(err => console.log(err));
            }
        })
    };


    //Don't worry about this:
    populateFunction = () => {
        const userObj = {
            username: 'MrRoboto'
        }
        API.populateProfile(userObj)
            .then(res => {
                console.log(res)
                this.setState({
                    user: res,
                    // bio: this.state.user.bio, 
                    // picLink: this.state.user.picLink, 
                    // events: this.state.user.myEvents
                })
                console.log("SUCCESS")

            })
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        console.log(this.state)

        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        alert("Profile settings saved.");
        if (this.state.username) {
            API.updateProfile({
                bio: this.state.bio,
                picLink: this.state.picLink
            })
                .then(res => {
                    console.log(this);
                    this.populateFunction()
                })
                .catch(err => console.log(err));
        };
    }
    // if (this.state.picLink) {
    //     API.savePhoto({
    //     picLink: this.state.picLink
    //     })
    //     .then(res => this.loadPhoto())
    //     .catch(err => console.log(err));



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

                <HappnenIcon
                    className="Icon"
                    alt="HappnenIcon"
                    height="300px"
                    width="75%" />

                <Row>
                    <h1>USERNAME: {this.state.username}</h1>

                </Row>

                <Row>
                    <Icon>camera_roll</Icon>
                    <Input
                        s={4}
                        name="picLink"
                        type="file"
                        label="Profile Photo"
                        className="profilePhoto"
                        value={this.state.picLink}
                        onChange={this.handleInputChange} />
                    {/* {cloudinary.image(this.state.picLink, { width: 100, height: 150, crop: "fill" })}/> */}
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

                {/* Invite List */}

                <Row>
                    <Col>
                    {if(this.state.userData.invites){
                        
                    }
                    }
                    
                        <Collection>
                            {this.state.userData.invites.map(invite => {
                                <CollectionItem>
                                    {/* modal stuff */}
                                </CollectionItem>
                            })}
                        </Collection>
                    </Col>
                </Row>

                {/* Current Events */}

                <Row>
                    <Col>
                        <Collection>
                        </Collection>
                    </Col>
                </Row>

                <Row>
                    <Button
                        className="Submit"
                        onClick={this.handleFormSubmit}>Save Profile</Button>
                </Row>

            </Container>

        )
    };
}

export default Profile;