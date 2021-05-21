import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "../components/Header";
import Home from '../pages/Home'
import Login from '../pages/Login'
import LoginRecruter from '../pages/LoginRecruter'
import RecruterHome from '../pages/RecruterHome'
import SubscriptionSuccess from '../pages/SubscriptionSuccess'
import JobListing from '../pages/JobListing'
import JobDetails from '../pages/JobDetails'

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
          <Route path="/subscription/success" component={SubscriptionSuccess} />
          <Route path="/JobListing" component={JobListing} />
          <Route path="/jobDetails/:id" component={JobDetails} />
          

          {/* <Route path="/exp/:id" component={exp} /> */}

          {/* <Route component={NotFound} /> */}
        </Switch>
      </>
    </Router>)
}

export default AppRouter;
