import React from "react";
import { compose, withProps, withStateHandlers, withHandlers } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow} from "react-google-maps"
import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";
import API from "../../utils/API"

const Map = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCzhrxRlHVOD13tasY5VxcdBrOGeDjsPIU&v=3.exp&libraries=geometry,drawing,places",
    containerElement: <div style={{ height: `100vh`, width: `100vw` }} />,
    loadingElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withStateHandlers(() => ({
    markerOpen: null,
  }), {
    onToggleOpen: ({ markerOpen }) => (markerId) => ({
      markerOpen: markerId
    })
  }),
  withHandlers({
    onMarkerClustererClick: () => (markerClusterer) => {
      const clickedMarkers = markerClusterer.getMarkers()
      console.log(`Current clicked markers length: ${clickedMarkers.length}`)
      console.log(clickedMarkers)
    },
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 33.749, lng: -84.388 }}
  >
    <MarkerClusterer
      onClick={props.onMarkerClustererClick}
      averageCenter
      enableRetinaIcons
      gridSize={60}
    >
      {props.markers.map(marker => (
        <Marker
          key={marker._id}
          position={{ lat: marker.latitude, lng: marker.longitude }}
          currentMarkerClicked={false}
          onClick={props.onToggleOpen.bind(null, marker._id)}       
        > 
          {props.markerOpen === marker._id ? <InfoWindow onCloseClick={props.onToggleOpen.bind(null, marker._id)}>
            <div>
              <h2>{marker.eventName}</h2>
              <p>{marker.location}</p>
              <p>{marker.date}</p>
              <button></button>
            </div>
          </InfoWindow> : null}
        </Marker>
      ))}
    </MarkerClusterer>
  </GoogleMap>
);

//=============================================================================

export class MapComponent extends React.Component {
  componentWillMount() {
    this.setState({ markers: [] })
  }

  componentDidMount() {
    API.getEventLocations()
      .then(res => {
        this.setState({ markers: res.data });
      });
  }

  render() {
    return (
      <Map markers={this.state.markers} />
    )
  }
}

<MapComponent />
