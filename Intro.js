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
    width: 220,
    height: 220,
  },
  text: {
    color: '#7b7b7b',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 16,
    
  },
  title: {
    fontSize: 22,
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
    titleStyle: styles.title,
    text: 'Description.\nSay something cool',
    textStyle: styles.text,
    image: require('./assets/1.png'),
    imageStyle: styles.image,
    backgroundColor: '#f6f6f6',
  },
  {
    key: 'somethun',
    title: 'Title 1',
    titleStyle: styles.title,
    text: 'Description.\nSay something cool',
    textStyle: styles.text,
    image: require('./assets/2.png'),
    imageStyle: styles.image,
    backgroundColor: '#f6f6f6',
  },
  {
    key: 'somethun',
    title: 'Title 1',
    titleStyle: styles.title,
    text: 'Description.\nSay something cool',
    textStyle: styles.text,
    image: require('./assets/3.png'),
    imageStyle: styles.image,
    backgroundColor: '#f6f6f6',
  }
];


export default class Intro extends React.Component {
  _renderItem = props => (
    <LinearGradient
    style={[styles.mainContent, {
      paddingTop: props.topSpacer,
      paddingBottom: props.bottomSpacer,
      width: props.width,
      height: props.height,
    }]}
    colors={props.colors}
    start={{x: 0, y: .1}} end={{x: .1, y: 1}}
    >
      {/* <Ionicons style={{ backgroundColor: 'transparent' }} name={props.icon} size={150} color="white" /> */}
      <View>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </LinearGradient>
  );
  
  render() {
    return (
      <AppIntroSlider
      slides={slides}
      // renderItem={this._renderItem}
      bottomButton
      skipLabel='Pular'
      doneLabel='Pronto' 
      nextLabel='Próximo' 
      prevLabel='Anterior'
      />
      );
    }
  }

// export default class Intro extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//           showRealApp: false
//         }
//     }
//   _onDone = () => {
//     // User finished the introduction. Show real app through
//     // navigation or simply by controlling state
//     this.setState({ showRealApp: true });
//   }
//   render() {
//     if (this.state.showRealApp) {
//       return <App />;
//     } else {
//       return <AppIntroSlider 
//       slides={slides} 
//       onDone={this._onDone} 
//       skipLabel='Pular'
//       doneLabel='Pronto' 
//       nextLabel='Próximo' 
//       prevLabel='Anterior'
//       />;
//     }
//   }
// }