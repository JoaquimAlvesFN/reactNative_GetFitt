import React, { Component } from 'react';
import { Text, View, ImageBackground, StatusBar, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation'

import backImage from './assets/images/background/Fundo.png';
import logoImage from './assets/images/logo/logo.png';

import Login from './login';
import Photo from './photo';

class Home extends Component {
  render() {
    return (
            <ImageBackground
            source={backImage} style={styles.backImage}
            >
                <StatusBar backgroundColor="#6155CC" />
                <View>
                    <Image source={logoImage} style={styles.logoImage}/>
                </View>
                <View>
                    <Text style={styles.textHome}>ESCOLHA SEU TIPO DE CONTA:</Text>
                    <TouchableOpacity style={styles.buttonClient}><Text style={styles.textHome}>CLIENTE</Text></TouchableOpacity>
                    <Text style={styles.textHome}>---OU---</Text>
                    <TouchableOpacity style={styles.buttonProfessional}><Text style={styles.textHome}>PROFISSIONAL</Text></TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity 
                    style={styles.button3}
                    onPress={() => this.props.navigation.navigate('Login')}                    
                    >
                        <Text style={styles.textHome}>JÁ TENHO CONTA</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
    );
  }
}

const Routes = createAppContainer(
    createStackNavigator({
        Home: {
            screen: Home,
            navigationOptions: {
                header: null,
            }
        },
        Login: {
            screen: Login,
            navigationOptions: {
                header: null,
            }
        },
        Photo: {
            screen: Photo,
            navigationOptions: {
                header: null,
            }
        },
    })
);

export default Routes;

const styles = StyleSheet.create({
    logoImage: {
        marginTop: 60,
    },
    backImage: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    textHome: {
        color: 'white',
        padding: 8,
    },
    buttonClient: {
        backgroundColor: '#EE4266',
        padding: 8,
        borderRadius: 25,
        alignItems: 'center',
        width: 300,
    },
    buttonProfessional: {
        backgroundColor: '#2D3142',
        padding: 8,
        borderRadius: 25,
        alignItems: 'center',
        width: 300,
    },
    button3: {
        backgroundColor: '#3EC8BC',
        padding: 8,
        borderRadius: 25,
        alignItems: 'center',
        width: 300,
    },
});