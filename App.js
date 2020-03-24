import React, {Component} from 'react';
import { Text, StyleSheet, View } from 'react-native';

import List from './src/components/List';
import Slider from './src/components/Slider';
import Header from './src/components/Header'

import SideMenu from 'react-native-side-menu';
import Menu from './src/components/Menu';

console.disableYellowBox = true;

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isOpen: false
    }
  }

  toggle(){
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  updateMenu(isOpen){
    this.setState({isOpen})
  }

  render() {
    return (
      <View style={{flex: 1}} >
          <SideMenu
            menu={<Menu />}
            isOpen={this.state.isOpen}
            onChange={(isOpen) => this.updateMenu(isOpen)}
            style={{flex: 1}} 
          >
            <View style={styles.container}>

              <Header
                navigation={this.props.navigation}
                toggle={this.toggle.bind(this)}/>

              <Slider />

              <List navigation={this.props.navigation}/>
              
            </View>
        </SideMenu>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1
  }
});
