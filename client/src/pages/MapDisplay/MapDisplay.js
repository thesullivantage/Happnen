import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Input, Icon, Button } from "react-materialize";
import Logo from "../../components/Logo/index";
import "./MapDisplay.css";
import { MapContainer } from "../../components/MapContainer/MapContainer";
import { Map } from "../../components/Map/Map";
// import { GoogleApiWrapper } from 'google-maps-react';

class MapDisplay extends Component {


    render() {
        return (

            <Container>

                <Button floating fab='horizontal' toolbarEnabled='true' className='red' icon='add' large style={{ top: '45px', left: '24px' }}>
                    <Button floating icon='assignment_ind' className='red' node='a' href='http://localhost:3000/profile' />
                    <Button floating icon='add_box' className='yellow darken-1' node='a' href='http://localhost:3000/createevent' />
                    <Button floating icon='person_add' className='green' node='a' href='http://localhost:3000/signup' />
                    <Button floating icon='attach_file' className='blue' node='a' href='http://localhost:3000/mapdisplay'/>
                </Button>
                {/* <GoogleApiWrapper> */}
                <MapContainer>
                    {/* <Map /> */}
                </MapContainer>
                {/* </GoogleApiWrapper> */}
            </Container>
        );
    }
}

export default MapDisplay;