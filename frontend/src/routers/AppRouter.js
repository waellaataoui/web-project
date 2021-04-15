import React from "react";
import { Route,  BrowserRouter as Router, Switch } from "react-router-dom";
// import Header from "../components/Header";
import Home from '../pages/Home'
import Login from '../pages/Login'

const AppRouter = () => (
  <Router>
    <>
      {/* <Header /> */}
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/login" component={Login} />

        {/* <Route path="/exp/:id" component={exp} /> */}

        {/* <Route component={NotFound} /> */}
      </Switch>
    </>
  </Router>
);

export default AppRouter;
