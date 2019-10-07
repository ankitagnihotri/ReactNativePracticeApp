import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Text,
  Button,
} from 'native-base';
import { StyleSheet } from 'react-native';
import { AsyncStorage } from 'react-native';
import { deleteUserSession } from './../actions/Login';

class Home extends Component {
  handlePress = () => {
    AsyncStorage.clear();
    this.props.deleteUserSession('Ankit');
  };

  render() {
    return (
      <Container>
        <Content>
          <Text>hello {this.props.email}</Text>
          <Button bordered onPress={this.handlePress}>
            <Text>Logout</Text>
          </Button>
        </Content>
        <Footer>
          <FooterTab>
            <Button>
              <Text>Apps</Text>
            </Button>
            <Button>
              <Text>Camera</Text>
            </Button>
            <Button active>
              <Text>Navigate</Text>
            </Button>
            <Button>
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const mapStatetoProps = ({ Login }) => {
  const { email } = Login;
  return {
    email,
  };
};

export default connect(
  mapStatetoProps,
  {
    deleteUserSession,
  },
)(Home);
