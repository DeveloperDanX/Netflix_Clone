import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const Header = (props) => (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={() => props.toggle()}>
                    <Icon 
                        name='bars'
                        color='#fff'
                        size={32}
                    />   
                </TouchableWithoutFeedback>
                <Image
                    source={require('../images/Netflix-logo.png')}
                    style={styles.logo}
                />
                <TouchableWithoutFeedback 
                    onPress={() => props.navigation.navigate('Search')}>
                    <Icon 
                        name='search'
                        color='#fff'
                        size={32}
                    />   
                </TouchableWithoutFeedback>
            </View>

)
    

const styles =StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingBottom: 10,
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'space-between',
        backgroundColor: '#000',
        paddingHorizontal: 15
    },
    logo: {
        width: 120,
        height: 40
    }
})

export default Header
