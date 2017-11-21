import React from "react";
import { StatusBar } from "react-native";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchStart } from '../app/common/fetchTest/actions';
import { Container, Header, Title, Left,  Right, Button, Body, Content,Text, Card, CardItem } from "native-base";

class LoginScreen extends React.Component {
  render() {
    const { data, fetchStart } = this.props
    console.log('data is here')
    console.log(data)
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("Login")}>
              <Text>Login</Text>
            </Button>
          </Left>
          <Body>
            <Title>HomeScreen</Title>
            <Button onPress={() => {fetchStart()}}>
              <Text>Test</Text>
            </Button>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Container>
            <Text>Something here</Text>
            <Text>hey title: {data && data.title}</Text>
          </Container>
        </Content>
      </Container>
    );
  }
}

export default connect(
  ({api}) => ({data: api.data}),
  (dispatch) => bindActionCreators({
    fetchStart
  }, dispatch)
)(LoginScreen)
