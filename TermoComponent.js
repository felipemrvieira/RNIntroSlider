import React, {Component} from 'react';
import {StyleSheet, Text, Linking, View, TouchableOpacity, Image} from 'react-native';

export default class Termo extends Component {
    constructor(props){
        super(props);
    }

  render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Termos de uso do applicativo</Text>
                </View>

                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require('./assets/imgs/icon.png')}
                    /> 
                </View>


            <Text style={styles.eulaContainer}>
                <Text style={styles.eula}>Leia nossa </Text>
                <Text
                    style={styles.link}
                    onPress={() => Linking.openURL("http://pinheiro.al.gov.br")}
                >
                    Política de privacidade.
                </Text>
                <Text style={styles.eula}>Toque em "Aceito os termos de uso" para aceitar os </Text>
                <Text
                    style={styles.link}
                    onPress={() => Linking.openURL("http://pinheiro.al.gov.br")}
                >
                    Termos de uso 
                </Text>
                <Text style={styles.eula}> deste aplicativo. </Text>
            </Text>
                

                <TouchableOpacity
                    style={styles.button}
                    onPress={this.props.acceptTerm}
                >
                    <Text style={styles.textButton}> Aceito os termos de uso </Text>
                </TouchableOpacity>
              
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F6F6F6',
    },
    titleContainer:{
        flexDirection:'row', 
        flexWrap:'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F6F6F6',
        paddingVertical: 20,  
    },
    title: {
        fontSize: 20,
        fontFamily: 'Roboto-Bold',
        color: '#424242',
        textAlign: 'center',
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    image: {
        width: 161,
        height: 210, 
        alignSelf: 'center',
    },
    eulaContainer: {
      
        flexDirection:'row', 
        flexWrap:'wrap',
        paddingVertical: 15,
        paddingHorizontal: 30, 
    },  
    eula: {
        fontSize: 16,
        color: '#7b7b7b',
        fontFamily: 'Roboto-Light',
        textAlign: 'justify',
      
    },

    link: {
        color: '#05398e',
        fontSize: 16,
        fontFamily: 'Roboto-Light',
        textAlign: 'justify',
    },

    button: {
        backgroundColor: '#bb2333',
        alignSelf: 'center', 
        paddingVertical: 8, 
        paddingHorizontal: 30, 
        borderRadius: 4,
        color: 'red',
        justifyContent: 'flex-end',
        marginBottom: 20,
        
    },
    textButton: {
        color: 'white',
        fontFamily: 'Roboto',
        fontSize: 18,
        
    }, 
   
});
