import React from 'react';
import { StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import App from './App';


const styles = StyleSheet.create({
    mainContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    image: {
        width: 250,
        height: 250,
    },
    text: {
        color: '#424242',
        backgroundColor: 'transparent',
        textAlign: 'center',
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 28,
        color: '#424242',
        backgroundColor: 'transparent',
        textAlign: 'center',
        marginBottom: 16,
    }
});

const slides = [
  {
    key: 'somethun',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('./assets/1.png'),
    imageStyle: styles.image,
    backgroundColor: '#f6f6f6',
  },
  {
    key: 'somethun-dos',
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('./assets/2.png'),
    imageStyle: styles.image,
    backgroundColor: '#f6f6f6',
  },
  {
    key: 'somethun1',
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: require('./assets/3.png'),
    imageStyle: styles.image,
    backgroundColor: '#f6f6f6',
  }
];

export default class Intro extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          showRealApp: false
        }
    }
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  }
  render() {
    if (this.state.showRealApp) {
      return <App />;
    } else {
      return <AppIntroSlider 
      slides={slides} 
      onDone={this._onDone} 
      skipLabel='Pular'
      doneLabel='Pronto' 
      nextLabel='Próximo' 
      prevLabel='Anterior'
      />;
    }
  }
}