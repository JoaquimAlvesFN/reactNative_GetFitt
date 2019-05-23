import React, { Component } from 'react';
import { Text, View, ImageBackground, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

import backImage from './assets/images/background/Fundo.png';
import logoImage from './assets/images/logo/logo.png';

export default class Login extends Component {
  render() {
    return (
        <ImageBackground source={backImage} style={styles.backImage}>
        <View>
            <Image source={logoImage} style={styles.logoImage}/>
        </View>
        <View>
            <Text style={styles.textHome}>E-MAIL:</Text>
            <TextInput style={styles.input} placeholder="Digite seu e-mail" />
            <Text style={styles.textHome}>SENHA:</Text>
            <TextInput style={styles.input} placeholder="Digite sua senha" />
            <TouchableOpacity style={styles.logar} onPress={() => this.props.navigation.navigate('Photo')}>
                <Text style={styles.textHome}>LOGAR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cadastrar}><Text style={styles.textHome}>CADASTRAR</Text></TouchableOpacity>
            <TouchableOpacity style={styles.reset}><Text style={styles.textHome}>ESQUECI MINHA SENHA</Text></TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity style={styles.button3}><Text style={styles.textHome}>FACEBOOK</Text></TouchableOpacity>
        </View>
        </ImageBackground>
    );
  }
}

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
    },
    input: {
        backgroundColor: 'white',
        padding: 8,
        borderRadius: 15,
        alignItems: 'center',
        width: 300,
        marginBottom: 10,
    },
    button3: {
        backgroundColor: '#165595',
        padding: 15,
        borderRadius: 25,
        alignItems: 'center',
        width: 300,
    },
    logar: {
        backgroundColor: '#2D3142',
        padding: 15,
        borderRadius: 25,
        alignItems: 'center',
        width: 300,
        marginTop: 40,
        marginBottom: 10,
    },
    cadastrar: {
        backgroundColor: '#EE4266',
        padding: 15,
        borderRadius: 25,
        alignItems: 'center',
        width: 300,
        marginBottom: 10,
    },
    reset: {
        alignItems: 'center',
    },
});