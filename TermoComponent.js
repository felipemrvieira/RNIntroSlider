import React, {Component} from 'react';
import {StyleSheet, Text, ScrollView, View, TouchableOpacity, Image} from 'react-native';

export default class Termo extends Component {
    constructor(props){
        super(props);
    }

  render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                <Image
                    style={{width: 25, height: 33, margin: 1}}
                    source={require('./assets/imgs/icon.png')}
                />
                    <Text style={styles.title}>Termos de uso do applicativo</Text>
                </View>
        
                <ScrollView style={styles.eulaContainer}>
                    <Text style={styles.eula}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac tortor elementum, fringilla diam at,'
                        facilisis nunc. Sed sagittis sapien velit, eu aliquam nibh tristique eget. Mauris et risus urna. Sed sagittis 
                        metus in lacus molestie aliquam. 
                        
                        Nunc efficitur dolor libero, at mollis sem viverra sed. Nunc vitae eleifend 
                        enim, quis gravida lectus. Aliquam ac justo nec purus bibendum molestie. Donec ultricies enim id cursus posuere. 
                        Ut consectetur blandit auctor Aenean vitae luctus orci, vitae lacinia mauris. Integer posuere varius diam. 
                        Aliquam nec ultricies ligula, viverra ultricies libero. Donec ut sem aliquet, porta arcu volutpat, molestie 
                        elit. Pellentesque habitant 
        
                        morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce iaculis, elit sit amet vehicula 
                        tincidunt, erat neque rutrum dolor, eget maximus elit lectus pulvinar felis. Sed efficitur molestie massa, 
                        gravida gravida ipsum efficitur in. Praesent pharetra metus vitae rhoncus dictum. Mauris finibus maximus 
                        purus, at elementum turpis dignissim ac. Suspendisse aliquam est id vehicula hendrerit. Proin placerat, 
                        augue non vulputate feugiat, elit mi sagittis leo, gravida viverra ante neque a dolor. Curabitur malesuada 
                        libero velit, at semper arcu laoreet in. Ut iaculis blandit eleifend. Nunc posuere auctor placerat. Proin 
                        placerat, purus id efficitur volutpat, massa orci posuere eros, sed ultrices risus sem a quam. Proin maximus 
                        id nisl sit amet rhoncus. Curabitur faucibus nisl vitae metus finibus, vel viverra metus vulputate. 
                        Etiam commodo, neque nec consectetur congue, elit nisl convallis sapien, id venenatis justo purus id sem.   
                        Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec vitae vestibulum eros. Ut congue vulputate 
                        tortor, in placerat lectus egestas eget. Fusce diam magna, accumsan ac nibh eu, viverra tempus ligula. In elementum 
                        leo vel tristique finibus. Praesent sit amet magna non augue sagittis rutrum. Quisque auctor ac tellus nec 
                        pulvinar. Donec varius varius est vel faucibus. Vestibulum vel tristique erat. Cras nulla lectus, volutpat 
                        eu rutrum eget, sollicitudin quis velit. Quisque mattis, arcu porta mattis rhoncus, nisl sapien aliquet risus, 
                        eget auctor ligula elit ut massa. Fusce id dolor eu justo pharetra semper. In pellentesque elit sit amet 
                        pulvinar ornare. Aenean vehicula maximus odio, ac ultrices felis tincidunt nec. Nullam molestie turpis leo. 
                        Donec tincidunt efficitur lacus, id ultricies felis convallis ut. Donec a dolor dui. Morbi quis eros quis 
                        dui sagittis fermentum. Nulla id luctus nibh, ut ultrices lorem. Integer id sapien felis. In vestibulum mi 
                        nec nulla molestie imperdiet. Curabitur feugiat lobortis ligula, vitae aliquam magna aliquam quis. Mauris 
                        pulvinar luctus fim
                    </Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.props.acceptTerm}
                    >
                        <Text style={styles.textButton}> Aceito os termos de uso </Text>
                    </TouchableOpacity>
        
              </ScrollView>
              
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F6F6',
    },
    titleContainer:{
        flexDirection:'row', 
        flexWrap:'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F6F6F6',

        paddingVertical: 15,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    title: {
        fontSize: 18,
        fontFamily: 'Roboto-Bold',
        color: '#424242',
        textAlign: 'center',
        marginLeft: 10,
    },
    eulaContainer: {
        paddingHorizontal: 20,
    },
    eula: {
        paddingTop: 10,
        fontSize: 16,
        color: '#7b7b7b',
        fontFamily: 'Roboto-Light',
        textAlign: 'justify',
    },
    button: {
        backgroundColor: '#bb2333',
        alignItems: 'center',
        padding: 10, 
        marginVertical: 20,
        borderRadius: 4,
        color: 'red',
    },
    textButton: {
        color: 'white',
        fontFamily: 'Roboto',
        fontSize: 18
    }, 
   
});
