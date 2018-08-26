import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiComponent } from 'google-maps-react';

export class MapContainer extends React.Component {
    render() {
        return (
            <Map google={this.props.google} zoom={14}>
            {console.log("this.props=", this.props)}

                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiComponent({ apiKey: "AIzaSyCzhrxRlHVOD13tasY5VxcdBrOGeDjsPIU" })(MapContainer)