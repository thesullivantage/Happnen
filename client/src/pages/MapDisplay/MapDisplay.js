import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Input, Icon, Button } from "react-materialize";
import "./MapDisplay.css";
import { MapComponent } from "../../components/MapContainer/MapContainer";
import API from "../../utils/API"

class MapDisplay extends Component {

    render() {
        return (
            <div>
                <MapComponent />

                <Container>

                    <Button floating fab='horizontal' toolbarEnabled='true' className='red mapButton' icon='add' large style={{ top: '45px', left: '24px' }}>
                        <Button floating icon='pin_drop' className='blue' node='a' href='http://localhost:3000/mapdisplay'
                            data-position="top" data-delay="50" tooltip="What's Happnen" />
                        <Button floating icon='person' className='blue' node='a' href='http://localhost:3000/'
                            data-position="top" data-delay="50" tooltip="Login" />
                        <Button floating icon='person_add' className='green' node='a' href='http://localhost:3000/signup'
                            data-position="top" data-delay="50" tooltip="Create Account" />
                        <Button floating icon='add_box' className='yellow darken-1' node='a' href='http://localhost:3000/createevent'
                            data-position="top" data-delay="50" tooltip="Create Event" />
                        <Button floating icon='assignment_ind' className='red mapButton' node='a' href='http://localhost:3000/profile'
                            data-position="top" data-delay="50" tooltip="Profile" />
                    </Button>

                </Container>
            
            </div>
        );
    }
}

export default MapDisplay;