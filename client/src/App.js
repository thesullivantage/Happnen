import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { } from "react-router";
import NoMatch from "./pages/NoMatch";
// Destructure all of the pages
import Homepage from "./pages/Homepage";
import Signup from "./pages/Signup";
import CreateEvent from "./pages/CreateEvent";
import Profile from "./pages/Profile";
import MapDisplay from "./pages/MapDisplay";
import "./main.css"
import UserFab from "./components/UserFab";
import NonUserFab from "./components/NonUserFab";
import history from './history';


// Have one fab component that goes into store to get what it needs, but keep this janky system for now
//Steps:
// 1. Implement Redux
//Provider component, store within that
// 2. Conditional Rendering on Fab component instead of in App.js
// 3. Implement history redirect instead of redirect component locally in the login page
// 4. Looking at Higher Order Functions
class App extends React.Component {
	render() {
		if (sessionStorage.user) {
			return (
				<div>
					<Router>
						<Switch>
							{/* None of these components are created yet */}
							<Route exact path="/" component={Homepage} />
							<Route exact path="/signup" component={Signup} />
							<Route exact path="/createevent" component={CreateEvent} />
							<Route exact path="/profile" component={Profile} />
							<Route exact path="/mapdisplay" component={MapDisplay} />
							{/*<Route exact path="/login" component={Login} />
				<Route exact path="/events" component={Events} /> */}

							{/* We can also avoid /:id and get user info from user stored in user state after login */}
							{/*
				<Route exact path="/profilesettings/:id" component={Events} /> 
				<Route exact path="/event/:id" component={EventWithid} /> */}

							<Route component={NoMatch} />

							{/* FOR AARON: */}
							{/* <FAB type="logged"/> */}


						</Switch>
						{/* Put nav button here as a jsx tag */}
					</Router>
					<UserFab />
				</div>


			)
		} else if (!sessionStorage.user) {
			return (
				<div>
					<Router>
						<Switch>
							{/* None of these components are created yet */}
							<Route exact path="/" component={Homepage} />
							<Route exact path="/signup" component={Signup} />
							<Route exact path="/createevent" component={Signup} />
							<Route exact path="/profile" component={Signup} />
							<Route exact path="/mapdisplay" component={Homepage} />
				

							{/* We can also avoid /:id and get user info from user stored in user state after login */}
							{/*
            <Route exact path="/profilesettings/:id" component={Events} /> 
            <Route exact path="/event/:id" component={EventWithid} /> */}

							<Route component={NoMatch} />
						</Switch>
						{/* Put nav button here as a jsx tag */}
					</Router>
					<NonUserFab />
				</div>


			)
		}
	}
};

export default App;
