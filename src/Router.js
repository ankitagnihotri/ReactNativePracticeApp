import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Scene, Router, Stack } from 'react-native-router-flux';
import Login from './screens/Login';
import Home from './screens/Home';
import Register from './screens/Register';
import { verifyClientSession } from './actions/Login';

class RouterComponent extends Component {
  componentWillMount() {
    this.props.verifyClientSession();
  }
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene
            key="home"
            component={this.props.loggedIn ? Home : Login}
            hideTabBar
            hideNavBar={false}
          />
          <Scene key="login" component={Login} hideTabBar hideNavBar={false} />
          <Scene key="register" component={Register} hideNavBar={false} />
        </Stack>
      </Router>
    );
  }
}

const mapStatetoProps = ({ Login }) => {
  const { loggedIn } = Login;
  return {
    loggedIn,
  };
};

export default connect(
  mapStatetoProps,
  {
    verifyClientSession,
  },
)(RouterComponent);
