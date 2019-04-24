import React from "react";
import { Router, Route, Switch, withRouter } from "react-router-dom";
import { } from "react-router";
import NoMatch from "./pages/NoMatch";
// Destructure all of the pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CreateEvent from "./pages/CreateEvent";
import Profile from "./pages/Profile";
import MapDisplay from "./pages/MapDisplay";
import "./main.css"
import PrivateRoute from "./Login/PrivateRoute"

import preFab from "./components/Fab";
import { createBrowserHistory } from "history";

// withRouter for access to the history object. TODO: TRY location first
const Fab = withRouter(preFab)

const customHistory = createBrowserHistory();


// Have one fab component that goes into store to get what it needs, but keep this janky system for now
//Steps:
// 1. Implement Redux
//Provider component, store within that
// 2. Conditional Rendering on Fab component instead of in App.js
// 3. Implement history redirect instead of redirect component locally in the login page
// 4. Settle on constructor vs. not for all

class App extends React.Component {
	state = {
		// fab: "nonuser",
		history: customHistory
	}

	// componentDidMount = () => {
	// 	this.setState({
	// 		fab: "nonuser"
	// 	})
	// }

	// JWT here
	// componentDidUpdate = () => {
	// 	if (this.state.fab === "nonuser") {
	// 		if (sessionStorage.user) {
	// 			this.setState({
	// 				fab: "user"
	// 			})
	// 		}
	// 	}
	// }


	render() {
		return (
			<div>
				<Router history={customHistory}>
					<Switch>
						{/* Change Homepage name to Login*/}
						<Route exact path="/" component={withRouter(Login)} />
						<PrivateRoute path="/signup" component={withRouter(Signup)} />
						<PrivateRoute path="/createevent" component={withRouter(CreateEvent)} />
						<PrivateRoute path="/profile" component={withRouter(Profile)} />
						<PrivateRoute path="/mapdisplay" component={withRouter(MapDisplay)} />
						{/* Need public map display */}


						{/* We can also avoid /:id and get user info from user stored in user state after login */}
						{/*
				<Route exact path="/profilesettings/:id" component={Events} /> 
				<Route exact path="/event/:id" component={EventWithid} /> */}

						<Route component={NoMatch} />

					</Switch>
				</Router>
				<Fab />
				{/* For Fab, ternary render based off of
					1. sessionStorage Object
					2. JWT in sessionStorage
					 */}
			</div>

		)
	}
};

export default App;
