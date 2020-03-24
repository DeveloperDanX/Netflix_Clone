import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, Image } from 'react-native'



export class Info extends Component {
    render() {
        const {item} = this.props.route.params
        return (
            <View style={styles.container}>
                <Button 
                    title='Go Back'
                    onPress={() => this.props.navigation.goBack()}
                ></Button>
                <Text> {item.name} </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default Info
