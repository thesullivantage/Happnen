import React, { Component } from "react";
import { Redirect } from 'react-router'
import { Container, Row, Col, Input, Icon, Button } from "react-materialize";
import API from "../../utils/API"


class UserFab extends Component {

    state = {
        username: "",
        password: "",
    };

    // REDUX
    handleLogout = event => {
        // this.setState({ username: "", password: ""})
        let { history } = this.props
        sessionStorage.setItem('user', null)
        // Or use history here
        .then(() => {
            history.push("/")
        })
    };

    render() {
        return (
            <div>
                {sessionStorage.user ? (
                    <Container>
                        <Button floating fab='horizontal' toolbarEnabled='true' className='red' icon='add' large style={{ top: '40px', left: '24px' }}>
                            <Button floating icon='pin_drop' className='purple' node='a' href='/mapdisplay'
                                data-position="top" data-delay="50" tooltip="What's Happnen" />
                            {/* <Button floating icon='person' className='blue' node='a' href='/'
                        data-position="top" data-delay="50" tooltip="Login" />
                    <Button floating icon='person_add' className='green' node='a' href='/signup'
                        data-position="top" data-delay="50" tooltip="Create Account" /> */}
                            <Button floating icon='add_box' className='blue' node='a' href='/createevent'
                                data-position="top" data-delay="50" tooltip="Create Event" />
                            <Button floating icon='assignment_ind' className='green' node='a' href='/profile'
                                data-position="top" data-delay="50" tooltip="Profile" />
                            <Button floating icon='person' className='yellow darken-1' node='a' href='/'
                                data-position="top" data-delay="50" tooltip="Logout" onClick={this.handleLogout} />
                        </Button>
                    </Container>
                ) : (
                        <Container>
                            <Button floating fab='horizontal' toolbarEnabled='true' className='red' icon='add' large style={{ top: '45px', left: '24px' }}>
                                <Button floating icon='pin_drop' className='purple' node='a' href='/mapdisplay'
                                    data-position="top" data-delay="50" tooltip="What's Happnen" />
                                <Button floating icon='person' className='blue' node='a' href='/'
                                    data-position="top" data-delay="50" tooltip="Login" />
                                <Button floating icon='person_add' className='yellow darken-1' node='a' href='/signup'
                                    data-position="top" data-delay="50" tooltip="Create Account" />
                            </Button>
                        </Container>
                    )}
            </div>
        );
    }
}

export default UserFab;

