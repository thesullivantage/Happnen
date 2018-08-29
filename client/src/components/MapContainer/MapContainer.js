import React from "react";
import { compose, withProps, withStateHandlers } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
import { MarkerWithLabel } from "react-google-maps/lib/components/addons/MarkerWithLabel";

export const MapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCzhrxRlHVOD13tasY5VxcdBrOGeDjsPIU&v=3.exp&libraries=geometry,drawing,places",
    containerElement: <div style={{ height: `100vh`, width: `100vw` }} />,
    loadingElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 33.749, lng: -84.388 }}
  >
    <Marker position={{ lat: 33.749, lng: -84.388 }} />

    <Marker
      position={{ lat: 33.752, lng: -84.4 }}
      onClick={props.onToggleOpen}
    >
      {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
        <div>ASDF1234</div>
      </InfoWindow>}
    </Marker>

  </GoogleMap>
);

// export class MapComponent extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       currentLatLng: {
//         lat: 0,
//         lng: 0
//       },
//       isMarkerShown: false
//     }
//   }

//   showCurrentLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         position => {
//           this.setState(prevState => ({
//             currentLatLng: {
//               ...prevState.currentLatLng,
//               lat: position.coords.latitude,
//               lng: position.coords.longitude
//             },
//             isMarkerShown: true
//           }))
//         }
//       )
//       // console.log(position)
//     } else {
//       error => console.log(error)
//     }
//   }


//   // componentDidMount() {
//   //   this.showCurrentLocation()
//   // }

//   render() {
//     return (
//       <div>
//         <Map
//           center = {this.showCurrentLocation}
//           isMarkerShown={this.state.isMarkerShown}
//           currentLocation={this.state.currentLatLng} />
//       </div>
//     );
//   }
// }

// const showCurrentLocation = () => {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(
//       position => {
//         this.setState(prevState => ({
//           currentLatLng: {
//             ...prevState.currentLatLng,
//             lat: position.coords.latitude,
//             lng: position.coords.longitude
//           },
//           isMarkerShown: true
//         }))
//       }
//     )
//   } else {
//     error => console.log(error)
//   }
// }

// export const MapWithAMarkerWithLabel = compose(
//   withProps({
//       googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCzhrxRlHVOD13tasY5VxcdBrOGeDjsPIU&v=3.exp&libraries=geometry,drawing,places",
//       containerElement: <div style={{ height: `100vh`, width: `100vw` }} />,
//       loadingElement: <div style={{ height: `100%` }} />,
//       mapElement: <div style={{ height: `100%` }} />,
//   }),
//   withScriptjs,
//   withGoogleMap
// )(props =>
//   <GoogleMap
//     defaultZoom={14}
//     defaultCenter={{ lat: 33.749, lng: -84.388 }}
//   >
//     <MarkerWithLabel
//       position={{ lat: 33.749, lng: -84.388 }}
//       labelStyle={{backgroundColor: "yellow", fontSize: "32px", padding: "16px"}}
//     >
//       <div>Hello There!</div>
//     </MarkerWithLabel>
//   </GoogleMap>
// );


{/* <MapComponent isMarkerShown /> */}