import 'react-native-gesture-handler'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import App from './App'
import Search from './src/components/Search'
import Details from './src/components/Details'
import Video from './src/components/VideoPlayerView'

import Episodes from './src/components/Episodes'

import Info from './src/components/Info'

const Stack = createStackNavigator();

function IndexApp() {
  return (
      <NavigationContainer>
        <Stack.Navigator
            initialRouteName='App'
            headerMode='none'
        >
            <Stack.Screen 
                name='App'
                component={App}
                options={{
                    animationEnabled: false
                }}
                
            />
            <Stack.Screen 
                name="Search" 
                component={Search}
                options={{
                    animationEnabled: false
                }}                 
            />
            <Stack.Screen 
                name="Details" 
                component={Details} 
            />
            <Stack.Screen 
                name="Video" 
                component={Video}
                options={{
                    animationEnabled: false
                }}
            />
            <Stack.Screen 
                name="Info" 
                component={Info} 
            />
            <Stack.Screen 
                name="Episodes" 
                component={Episodes} 
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default IndexApp