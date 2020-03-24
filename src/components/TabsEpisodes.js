import React, { Component } from 'react';
import {View,Dimensions,Platform, StyleSheet} from 'react-native';
import {SceneMap,TabView, TabBar,PagerPan,ScrollPager } from 'react-native-tab-view';
import Episodes from './Episodes';
import Trailers from './Trailers';

const FirstRoute = () => (
  <Episodes />
);
const SecondRoute = () => (
 <Trailers />
);

export default class TabsEpisodes extends Component {
 
 state = {
     index: 0,
  routes: [
      { key: 'first', title: 'Episodes' },
      { key: 'second', title: 'Trailers & More' },
  ],
   };

     _handleIndexChange = index => this.setState({ index });

    _renderTabBar = props => <TabBar {...props}     indicatorStyle={{ backgroundColor: 'red', top: 0, height: 4 }}
    style={{ backgroundColor: 'transparent' }}/>;

   _renderScene = SceneMap({
     first: () => <FirstRoute />,
     second: () => <SecondRoute />
   });


   _renderPager(props){
     return (Platform.OS === 'ios') ? <ScrollPager {...props} /> : <PagerPan {...props} />
   }

  render() {
     return (
        <TabView
          style={styles.container}
          navigationState={this.state}
          renderScene={this._renderScene}
          renderTabBar={this._renderTabBar}
          onIndexChange={this._handleIndexChange}
          initialLayout={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height
          }}
          renderPager={this._renderPager}
        />
     );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopWidth: 2,
        borderColor: '#000'
    },
})

