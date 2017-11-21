import createStore from './app/common/store/store';
import Navigation from './navigation';
import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    const store = createStore();

    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
