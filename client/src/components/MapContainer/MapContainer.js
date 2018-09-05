import React from "react";
import { compose, withProps, withStateHandlers, withHandlers } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";
import { Button, Icon, Modal } from 'react-materialize';
import API from "../../utils/API";
import moment from 'moment';
import QRCode from 'react-qr-code';

// helper function to convert date
function convertDate(inputDate) {
	// adjust format here to adjust all dates displayed:
	return moment(inputDate).format("llll")
}

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
							{/* EVENT INFORMATION DISPLAYED IN MARKER */}
							<h5>{marker.eventName}</h5>
							<p>{marker.location}</p>
							<p>Starts: {convertDate(marker.startDate)}</p>
							<p>Ends: {convertDate(marker.endDate)}</p>
							<Modal
								header={marker.eventName}
								trigger={<Button waves='light'>More Info<Icon right>event</Icon></Button>}>
								{/* EVENT INFORMATION DISPLAYED IN MODAL */}
								<p>{marker.location}</p>
								<p>{marker.description}</p>
								<div>
									pics/guest list
                </div>
								<p>Starts: {convertDate(marker.startDate)}</p>
								<p>Ends: {convertDate(marker.endDate)}</p>
								<QRCode size={96} value={marker.eventQr} />
								<Button waves='light'>button<Icon right>event_available</Icon></Button>
							</Modal>
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

// What does the following actually do?
<MapComponent />
