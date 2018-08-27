import React, {Component} from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
    
    state = {
        selectedPlace: {
            name: "Testing"
        } 
    }

    render() {
        const style = {
            width: '100vw',
            height: '100vh'
        }

        return (
            <div style={style}>
                <Map 
                    google={this.props.google} 
                    zoom={14}>

                    <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />

                    <InfoWindow onClose={this.onInfoWindowClose}>
                        <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                        </div>
                    </InfoWindow>
                </Map>
            </div>
        );
    }
};

export default GoogleApiWrapper({ apiKey: "AIzaSyCzhrxRlHVOD13tasY5VxcdBrOGeDjsPIU" })(MapContainer);