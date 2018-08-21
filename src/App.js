import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Login from '../src/containers/Login';
import Layout from '../src/components/Layout';
import Dashboard from '../src/components/Dashboard';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fas,far);
class App extends Component {

  render() {
    let routes = (
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route exact path="/" component={Login} />
        <Redirect to="/" />
      </Switch>
    );
    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/" component={Login} />
          <Redirect to="/" />
        </Switch>
      );
    }
    return (
      <Layout>
        {routes}
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.token !== null
});

export default withRouter(connect(mapStateToProps)(App));
