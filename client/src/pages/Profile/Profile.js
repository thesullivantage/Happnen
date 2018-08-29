import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Input, Icon, Button } from "react-materialize";
import Logo from "../../components/Logo/index";
import HappnenIcon from "../../components/Icon/index";
import "./Profile.css";
<<<<<<< HEAD
import API from "../../utils/API"
=======
import cloudinary from "cloudinary";

cloudinary.config({
    cloud_name: 'happnen',
    api_key: '782769678216731',
    api_secret: 'GX7JX8WmSTNIhq4dlBLKkXqO_lE'
});

>>>>>>> 8b4d245f448e8ac11befdb98a434f6efd4eab806

class Profile extends Component {
    state = {
        bio: "",
<<<<<<< HEAD
        links: "",
=======
        link: "",
>>>>>>> 8b4d245f448e8ac11befdb98a434f6efd4eab806
        events: "",
        username: "",
        userData: ""
    };

    componentDidMount = () => {
        this.setState({ username: sessionStorage.user })
        const user = sessionStorage.user
        API.populateProfile()
    }

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

<<<<<<< HEAD
    handleFormSubmit = event => {
        event.preventDefault();
        alert("Profile settings saved.")
    };
=======
    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     this.setState({
    //         bio: this.state.bio,
    //         // if (this.state.bio & this.state.imgLink) {
    //         //API.saveProfile({
    //         //bio: this.state.bio
    //         //link: this.state.imgLink
    //         //})
    //         //.then(res => this.populateProfile())
    //         //}
    //     })
    //     alert("Profile settings saved.");
    //     console.log(this);
    //     if (this.state.link) {
    //         API.savePhoto({
    //         link: this.state.link
    //         })
    //         .then(res => this.loadPhoto())
    //         .catch(err => console.log(err));
    //     }
    // };
>>>>>>> 8b4d245f448e8ac11befdb98a434f6efd4eab806

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
                        name="link"
                        type="file"
                        label="Profile Photo"
                        className="profilePhoto"
                        value={this.state.link}
                        onChange={this.handleInputChange} />
                    {cloudinary.image(this.state.link, { width: 100, height: 150, crop: "fill" })}/>
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
                        onClick={this.handleFormSubmit}>Save Profile</Button>
                </Row>

            </Container>

        )
    };
}

export default Profile;