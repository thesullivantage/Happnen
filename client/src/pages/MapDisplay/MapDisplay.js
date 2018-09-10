import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Input, Icon, Button } from "react-materialize";
import "./MapDisplay.css";
import { MapComponent } from "../../components/MapContainer/MapContainer";
import API from "../../utils/API"
import UserFab from "../../components/UserFab";
import NonUserFab from "../../components/NonUserFab";

class MapDisplay extends Component {
    componentDidMount() {
        console.log("Hello out there?")
    }
    render() {

        if (sessionStorage.user) {
            return (
                <div>
                    <MapComponent />

                    <Container>

                        <UserFab />

                    </Container>

                </div>
            );
        }

        else {
            return (
                <div>
                    <MapComponent />

                    <Container>

                        <NonUserFab />

                    </Container>

                </div>
            )
        }
    }
}

export default MapDisplay;