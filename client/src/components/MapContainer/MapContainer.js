import React from "react";
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { MarkerWithLabel } from "react-google-maps/lib/components/addons/MarkerWithLabel";

export const MapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCzhrxRlHVOD13tasY5VxcdBrOGeDjsPIU&v=3.exp&libraries=geometry,drawing,places",
    containerElement: <div style={{ height: `100vh`, width: `100vw` }} />,
    loadingElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 33.749, lng: -84.388 }}
  >
    <Marker position={{ lat: 33.749, lng: -84.388 }} />
  </GoogleMap>
);

export const MapWithAMarkerWithLabel = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCzhrxRlHVOD13tasY5VxcdBrOGeDjsPIU&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
  )(props =>
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 33.749, lng: -84.388 }}
    >
      <MarkerWithLabel
        position={{ lat: 33.749, lng: -84.388 }}
        labelStyle={{backgroundColor: "yellow", fontSize: "32px", padding: "16px"}}
      >
        <div>Hello There!</div>
      </MarkerWithLabel>
    </GoogleMap>
  );
  

{/* <MapComponent isMarkerShown /> */}