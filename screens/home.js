import React from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Left,  Right, Button, Body, Content,Text, Card, CardItem } from 'native-base';
import { StatusBar } from 'react-native';

class HomeScreen extends React.Component {
  render() {
    const { testProp } = this.props;
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
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Chat App to talk some awesome people!</Text>
                <Text>{testProp}</Text>
              </Body>
            </CardItem>
          </Card>
          <Button full rounded dark
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Chat")}>
            <Text>Chat With People</Text>
          </Button>
          <Button full rounded primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Profile")}>
            <Text>Goto Profiles</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
export default connect(({test}) => ({testProp: test.propOne}), () => ({}))(HomeScreen)
