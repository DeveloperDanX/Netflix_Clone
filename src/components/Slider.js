import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native'

import Swiper from 'react-native-swiper'

const {width} = Dimensions.get('window')

const Slider = props => (
    <View style={styles.container}>
        <Image 
            style={styles.image}
            source={props.uri}
            >

        </Image>
    </View>
)

const styles = StyleSheet.create({
    container: {
        height: 240,
        flex: 1,
        justifyContent: 'center'
        
    },
    image: {
        height: '100%',
        width
    }
})

export default class extends Component {
    constructor(props){
        super(props)
        this.state = {
            imageSlider: [
                require('../images/1.jpg'),
                require('../images/2.jpg'),
                require('../images/3.jpg'),
            ]
        }
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <Swiper
                    autoplay
                    //height={240}
                >
                    {
                        this.state.imageSlider.map((item, i) => <Slider
                            uri={item}
                            key={i}
                        />)
                    }


                </Swiper>
            </View>
        )
    }
}



