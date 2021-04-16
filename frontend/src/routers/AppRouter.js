import React from "react";
import { Route, BrowserRouter as Router, Switch, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Home from '../pages/Home'
import Login from '../pages/Login'
import LoginRecruter from '../pages/LoginRecruter'
import RecruterHome from '../pages/RecruterHome'

const AppRouter = () => {
  return (
    <Router>
      <>
        <Header></Header>
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/login" component={Login} />
          <Route path="/recruter" component={RecruterHome} exact={true} />
          <Route path="/recruter/login" component={LoginRecruter} />

          {/* <Route path="/exp/:id" component={exp} /> */}

          {/* <Route component={NotFound} /> */}
        </Switch>
      </>
    </Router>)
}

export default AppRouter;
