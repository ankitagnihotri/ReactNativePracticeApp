import { connect } from 'react-redux';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Container,
  Content,
  Item,
  Input,
  Icon,
  Card,
  CardItem,
  Text,
  Button,
} from 'native-base';

import Toast from 'react-native-easy-toast';
import LinearGradient from 'react-native-linear-gradient';
import {
  verifyClient,
  clearLoginState,
  openRegisterScreen,
  verifyClientSession,
} from './../actions/Login';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  componentDidMount() {
    this.props.verifyClientSession();
  }

  handlePress = () => {
    // console.log('handlePress login.js', this.state);
    this.props.verifyClient(this.state);
  };

  handlePressRegister = () => {
    this.props.openRegisterScreen();
  };

  render() {
    if (this.props.error) {
      this.refs.toast.show(this.props.error);
      this.props.clearLoginState();
    }
    return (
      <Container>
        <Toast
          ref="toast"
          position="top"
          positionValue={500}
          fadeInDuration={750}
          fadeOutDuration={1000}
        />
        <LinearGradient
          style={{ backgroundColor: 'black', flex: 1 }}
          colors={['#e4eef0', '#f7e9d5']}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 0 }}
        >
          <Content padder style={styles.contentStyle}>
            <Card style={styles.cardStyle}>
              <CardItem header style={styles.cardText}>
                <Text>Login</Text>
              </CardItem>
              <CardItem style={{ backgroundColor: 'transparent' }}>
                <Item>
                  <Icon active name="mail" type="Entypo" />
                  <Input
                    placeholder="Email"
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                  />
                </Item>
              </CardItem>
              <CardItem style={{ backgroundColor: 'transparent' }}>
                <Item>
                  <Icon type="Entypo" active name="keyboard" />
                  <Input
                    secureTextEntry={true}
                    placeholder="Password"
                    onChangeText={password => this.setState({ password })}
                  />
                </Item>
              </CardItem>
              <CardItem style={{ backgroundColor: 'transparent' }}>
                <View style={styles.buttonParent}>
                  <Button bordered onPress={this.handlePress}>
                    <Text>Login</Text>
                  </Button>
                </View>
              </CardItem>
              <CardItem style={{ backgroundColor: 'transparent' }}>
                <View style={styles.buttonParent}>
                  <Button bordered onPress={this.props.openRegisterScreen}>
                    <Text>Register</Text>
                  </Button>
                </View>
              </CardItem>
            </Card>
          </Content>
        </LinearGradient>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  cardStyle: {
    marginTop: '30%',
    backgroundColor: 'transparent',
  },
  cardText: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  buttonParent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  contentStyle: {},
});

const mapStatetoProps = ({ Login }) => {
  const { error } = Login;
  return {
    error,
  };
};

export default connect(
  mapStatetoProps,
  {
    verifyClient,
    clearLoginState,
    openRegisterScreen,
    verifyClientSession,
  },
)(Login);
