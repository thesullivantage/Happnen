import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Homepage from "./pages/Homepage";
import Signup from "./pages/Signup";
import CreateEvent from "./pages/CreateEvent";
import Profile from "./pages/Profile";
import MapDisplay from "./pages/MapDisplay";

const App = () => (
  <Router>
    <div>
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
  
      </Switch>

      {/* Put nav button here as a jsx tag */}
    </div>
  </Router>
);

export default App;
