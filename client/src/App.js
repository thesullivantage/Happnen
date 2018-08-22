import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        {/* None of these components are created yet */}
        <Route exact path="/" component={Homepage} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/events" component={Events} />

        {/* We can also avoid /:id and get user info from user stored in user state after login */}
        <Route exact path="/profile/:id" component={Profile} />
        <Route exact path="/profilesettings/:id" component={Events} />

        <Route exact path="/createevent" component={NewEvent} />
        
        <Route exact path="/event/:id" component={EventWithid} />


        <Route component={NoMatch} />
  
      </Switch>

      {/* Put nav button here as a jsx tag */}
    </div>
  </Router>
);

export default App;
