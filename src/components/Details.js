import React, { Component } from 'react'
import { 
    Share, 
    Dimensions, 
    Text, 
    View, 
    StyleSheet, 
    ImageBackground, 
    TouchableHighlight, 
    TouchableWithoutFeedback, 
    ScrollView,
    Animated 
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import IonIcon from 'react-native-vector-icons/Ionicons'
import * as Animatable from 'react-native-animatable'
import TabsEpisodes from './TabsEpisodes'
import LinearGradient from 'react-native-linear-gradient'
import Orientation from 'react-native-orientation'
import Video from 'react-native-video'

const {width, height} = Dimensions.get('window')

class Details extends Component {

    componentDidMount(){
        Orientation.lockToPortrait()
    }

    openVideo(){
        const {name} = this.props.route.params
        Orientation.lockToLandscape()
        this.props.navigation.navigate('Video', {name})
    }

    onShare(){
        Share.share({
            title: 'Designated Survivor',
            url: 'www.youtube.com',
            message: 'Awesome TV Show'
        }, {
            // Android
            dialogTitle: 'Share this awesome content',
        })
    }

    render() {
        // Values from Navigation
        //item
        const {item} = this.props.route.params
        // Episodes
        const {episodes} = item.details.episodes
    return (
        <View style={{flex: 1}}>

            <ScrollView style={styles.container}>
                <TouchableHighlight 
                    style={styles.closeButton}
                    onPress={() => this.props.navigation.goBack()}>
                    <Icon 
                        name="close"
                        color="white"
                        size={30}
                    />
                </TouchableHighlight>
                    <ImageBackground 
                        style={styles.thumbnail}
                        source={{uri: item.details.thumbnail}}
                    >
                        <View style={styles.buttonPlay}>
                            <TouchableWithoutFeedback
                                onPress={() => this.openVideo()}
                            >
                                <View>
                                    <Icon 
                                        style={styles.iconPlay}
                                        name="play-circle"
                                        size={90}
                                        color="white"
                                    />
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                        <View style={styles.nameContainer}>

                        <LinearGradient colors={['transparent', '#181818', '#181818']}>
                            <Text style={[styles.text, styles.titleShow]}>{item.name}</Text>
                        </LinearGradient>

                    </View>
                </ImageBackground>

                <View style={styles.descriptionContainer}>
                    <View style={styles.subtitle}>
                        <Text style={[styles.text, styles.subtitleText]}>{item.details.year}</Text>
                        <Text style={[styles.text, styles.subtitleText]}>{item.details.numOfEpisodes}</Text>
                        <Text style={[styles.text, styles.subtitleText]}>{item.details.season} Season</Text>
                    </View>

                    <View style={styles.description}>
                        <Text style={[styles.text, styles.light]}>{item.details.description}</Text>
                    </View>
                    <Text style={[styles.text]}>Cast: {item.details.cast}</Text>
                    <Text style={[styles.text]}>Creator: {item.details.creator}</Text>

                    <View style={styles.shareListIcons}>
                        <View style={styles.myListIcon}>
                            <TouchableHighlight >
                                <IonIcon 
                                    name='md-add'
                                    size={40}
                                    color='grey'
                                    style={styles.listIcon}
                                />
                            </TouchableHighlight>
                            <Text style={styles.text}>My List</Text>
                        </View>
                        <TouchableHighlight onPress={this.onShare}>
                            <View style={styles.myShareIcon}>
                                <Icon
                                    name='share-alt'
                                    size={25}
                                    color='grey'
                                    style={styles.shareIcon}
                                />
                                <Text style={styles.text}>Share</Text>
                            </View>
                        </TouchableHighlight>

                    </View>

                </View>

                <TabsEpisodes data = {episodes} />

            </ScrollView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    nameContainer: {
        backgroundColor: 'transparent'
    },
    header: {
        backgroundColor: 'red',
        paddingVertical: 10,
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1
    },
    closeButton: {
        position: 'absolute',
        top: 40,
        right: 20,
        zIndex: 2,
        opacity: 0.7
    },
    headerText: {
        color: 'white',
        fontSize: 40
    },
    titleShow: {
        fontSize: 35,
        paddingLeft: 10,
        marginBottom: 10,
        color: 'white'
    },
    container: {
        flex: 1,
        backgroundColor: '#181818'
    },
    thumbnail: {
        width: width,
        height: 350,
    },
    buttonPlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        top: 30
    },
    iconPlay: {
        opacity: 0.7
    },
    nameContainer: {
        backgroundColor: 'transparent',
    },
    titleShow: {
        fontSize: 40,
        paddingLeft: 10,
        marginBottom: 10,
        color: '#fff'
    },
    descriptionContainer: {
        paddingHorizontal: 20,
    },
    subtitle: {
        flexDirection: 'row'
    },
    subtitleText: {
        marginRight: 25
    },
    text: {
        color: '#b3b3b3',
        fontSize: 20
    },
    shareListIcons: {
        flexDirection: 'row',
        marginVertical: 30
    },
    listIcon: {
        height: 40
    }, 
    shareIcon: {
        height: 40,
        paddingTop: 8
    },
    myListIcon: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 40
    },
    myShareIcon: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    description: {
        marginVertical: 10,
    },
    light: {
        fontWeight: '200'
    }
})

export default Details
