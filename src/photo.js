import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import profile from './assets/images/profile/document.png';

export default class Photo extends Component {
  render() {
    return (
        <View style={styles.container}>
            <View style={styles.buttonBack}>
                <TouchableOpacity onPress={() => {this.props.navigation.goBack()}}>
                    <Text style={styles.buttonBackText}>{'<'}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.containerText}>
                <Text style={styles.textFirst}>Vamos começar com sua</Text>
                <Text style={styles.textFirst}>foto do perfil</Text>
                <Image source={profile}/>
                <Text>Escolha ou tire uma foto para</Text>
                <Text>colocar no seu perfil. Se quiser</Text>
                <Text>pode adicionar depois.</Text>
                <TouchableOpacity><Text style={styles.buttonAdd}>Adicionar foto</Text></TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.buttonWizard}><Text style={styles.buttonText}>CONTINUAR</Text></TouchableOpacity>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F6FA',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    containerText: {
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
    },
    buttonWizard: {
        backgroundColor: '#7869FF',
        width: 300,
        padding: 15,
        borderRadius: 25,
        alignItems: 'center',
    },
    textFirst: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 15,
        fontWeight: 'bold',
    },
    buttonAdd: {
        color: '#7265E3',
    },
    buttonBack: {
        marginTop: 10,
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'flex-start',
        alignSelf: 'flex-start'
    },
    buttonBackText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});