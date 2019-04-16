import React from "react";
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import { } from "react-router";
import NoMatch from "./pages/NoMatch";
// Destructure all of the pages
import Homepage from "./pages/Homepage";
import Signup from "./pages/Signup";
import CreateEvent from "./pages/CreateEvent";
import Profile from "./pages/Profile";
import MapDisplay from "./pages/MapDisplay";
import "./main.css"

import preFab from "./components/Fab";
// withRouter for access to the history object. TODO: TRY location first
const Fab = withRouter(preFab)

import { createBrowserHistory } from "history";
const customHistory = createBrowserHistory();


// Have one fab component that goes into store to get what it needs, but keep this janky system for now
//Steps:
// 1. Implement Redux
//Provider component, store within that
// 2. Conditional Rendering on Fab component instead of in App.js
// 3. Implement history redirect instead of redirect component locally in the login page

class App extends React.Component {
	render() {
			return (
				<div>
					<Router history={customHistory}>
						<Switch>
							{/* Change Homepage name to Login*/}
							<Route exact path="/" component={withRouter(Homepage)} />
							<Route path="/signup" component={withRouter(Signup)} />
							<Route path="/createevent" component={withRouter(CreateEvent)} />
							<Route path="/profile" component={withRouter(Profile)} />
							<Route exact path="/mapdisplay" component={withRouter(MapDisplay)} />
							

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
		// else if (!sessionStorage.user) {
		// 	return (
		// 		<div>
		// 			<Router>
		// 				<Switch>
		// 					{/* None of these components are created yet */}
		// 					<Route exact path="/" component={Homepage} />
		// 					<Route exact path="/signup" component={Signup} />
		// 					<Route exact path="/createevent" component={Signup} />
		// 					<Route exact path="/profile" component={Signup} />
		// 					<Route exact path="/mapdisplay" component={Homepage} />
				

		// 					{/* We can also avoid /:id and get user info from user stored in user state after login */}
		// 					{/*
        //     <Route exact path="/profilesettings/:id" component={Events} /> 
        //     <Route exact path="/event/:id" component={EventWithid} /> */}

		// 					<Route component={NoMatch} />
		// 				</Switch>
		// 				{/* Put nav button here as a jsx tag */}
		// 			</Router>
		// 			<NonUserFab />
		// 		</div>


		// 	)
		// }
	}
};

export default App;
