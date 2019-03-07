import React from 'react';
import { StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import App from './App';


const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 16,

  },
  title: {
    fontSize: 30,
    fontFamily: 'Roboto-Bold',
    color: '#424242',
    textAlign: 'center',
    backgroundColor: 'transparent',
    marginBottom: 0,
  }, 
  text: {
    color: '#7b7b7b',
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Roboto-Light',
    marginHorizontal: 14,
    marginBottom: 32
  },
  image: {
    width: 220,
    height: 220,
  },
  corPonto: {
    backgroundColor: '#9f9f9f'
  },
  corPontoAtivo: {
    backgroundColor: '#575757'
  },
  estiloBotao: {
    backgroundColor: '#cc2826',
  }, 
  estiloTextoBotao: {
    fontFamily: 'Roboto'
  }, 
});

const slides = [
  {
    key: 'Alertas',
    title: 'Receba alertas',
    titleStyle: styles.title,
    text: 'Cadastre seu telefone e receba os alertas da Defesa Civil',
    textStyle: styles.text,
    image: require('./assets/imgs/alerta.png'),
    imageStyle: styles.image,
    backgroundColor: '#f6f6f6',
  },
  {
    key: 'Cadastro',
    title: 'Cadastre seu imóvel',
    titleStyle: styles.title,
    text: 'Adicione seu endereço para que a Defesa Civil monitore sua região',
    textStyle: styles.text,
    image: require('./assets/imgs/casa.png'),
    imageStyle: styles.image,
    backgroundColor: '#f6f6f6',
  },
  {
    key: 'Noticias',
    title: 'Notícias',
    titleStyle: styles.title,
    text: 'Acompanhe as notícias do Pinheiro em tempo real',
    textStyle: styles.text,
    image: require('./assets/imgs/noticias.png'),
    imageStyle: styles.image,
    backgroundColor: '#f6f6f6',
  },
  {
    key: 'Clima',
    title: 'Previsão do tempo',
    titleStyle: styles.title,
    text: 'Acompanhe a previsão do tempo para a região',
    textStyle: styles.text,
    image: require('./assets/imgs/clima.png'),
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
    this.setState({ showRealApp: true });
  }

  render() {
      if (this.state.showRealApp) {
        return <App />;
    } else {
        return <AppIntroSlider 
                  slides={slides}
                  bottomButton
                  buttonStyle={ styles.estiloBotao }
                  buttonTextStyle={ styles.estiloTextoBotao }
                  skipLabel='Pular'
                  doneLabel='Pronto' 
                  nextLabel='Próximo' 
                  prevLabel='Anterior'
                  dotStyle= { styles.corPonto }
                  activeDotStyle= { styles.corPontoAtivo }
                  onDone={this._onDone} 

                />;
    }
  }
}