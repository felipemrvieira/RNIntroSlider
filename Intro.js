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
    backgroundColor: '#bb2333',
    borderRadius: 4
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
  },
  // {
  //   key: 'Termo',
  //   title: 'Termo de aceite',
  //   titleStyle: styles.title,
  //   text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac tortor elementum, fringilla diam at,' + 
  //   'facilisis nunc. Sed sagittis sapien velit, eu aliquam nibh tristique eget. Mauris et risus urna. Sed sagittis ' +
  //   'metus in lacus molestie aliquam. Nunc efficitur dolor libero, at mollis sem viverra sed. Nunc vitae eleifend ' +
  //   'enim, quis gravida lectus. Aliquam ac justo nec purus bibendum molestie. Donec ultricies enim id cursus posuere. ' +
  //   'Ut consectetur blandit auctor Aenean vitae luctus orci, vitae lacinia mauris. Integer posuere varius diam. ' +
  //   'Aliquam nec ultricies ligula, viverra ultricies libero. Donec ut sem aliquet, porta arcu volutpat, molestie ' +
  //   'elit. Pellentesque habitant ' +
  //   'morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce iaculis, elit sit amet vehicula ' +
  //   'tincidunt, erat neque rutrum dolor, eget maximus elit lectus pulvinar felis. Sed efficitur molestie massa, ' +
  //   'gravida gravida ipsum efficitur in. Praesent pharetra metus vitae rhoncus dictum. Mauris finibus maximus ' +
  //   'purus, at elementum turpis dignissim ac. Suspendisse aliquam est id vehicula hendrerit. Proin placerat, ' +
  //   'augue non vulputate feugiat, elit mi sagittis leo, gravida viverra ante neque a dolor. Curabitur malesuada ' +
  //   'libero velit, at semper arcu laoreet in. Ut iaculis blandit eleifend. Nunc posuere auctor placerat. Proin ' +
  //   'placerat, purus id efficitur volutpat, massa orci posuere eros, sed ultrices risus sem a quam. Proin maximus ' +
  //   'id nisl sit amet rhoncus. Curabitur faucibus nisl vitae metus finibus, vel viverra metus vulputate. ' +
  //   'Etiam commodo, neque nec consectetur congue, elit nisl convallis sapien, id venenatis justo purus id sem.   ' +
  //   'Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec vitae vestibulum eros. Ut congue vulputate ' +
  //   'tortor, in placerat lectus egestas eget. Fusce diam magna, accumsan ac nibh eu, viverra tempus ligula. In elementum ' +
  //   'leo vel tristique finibus. Praesent sit amet magna non augue sagittis rutrum. Quisque auctor ac tellus nec ' +
  //   'pulvinar. Donec varius varius est vel faucibus. Vestibulum vel tristique erat. Cras nulla lectus, volutpat ' +
  //   'eu rutrum eget, sollicitudin quis velit. Quisque mattis, arcu porta mattis rhoncus, nisl sapien aliquet risus, ' +
  //   'eget auctor ligula elit ut massa. Fusce id dolor eu justo pharetra semper. In pellentesque elit sit amet ' +
  //   'pulvinar ornare. Aenean vehicula maximus odio, ac ultrices felis tincidunt nec. Nullam molestie turpis leo. ' +
  //   'Donec tincidunt efficitur lacus, id ultricies felis convallis ut. Donec a dolor dui. Morbi quis eros quis ' +
  //   'dui sagittis fermentum. Nulla id luctus nibh, ut ultrices lorem. Integer id sapien felis. In vestibulum mi ' +
  //   'nec nulla molestie imperdiet. Curabitur feugiat lobortis ligula, vitae aliquam magna aliquam quis. Mauris ' +
  //   'pulvinar luctus ornare.',
  //   textStyle: styles.text,
  //   backgroundColor: '#f6f6f6',
  // }
  
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