import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './Home'
import Search from './Search'
import Details from './Details'
import Splash from './Splash'
import Catagories from './catagories'

const Stack = createStackNavigator()

const Naigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Splash' component={Splash}/>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Search' component={Search}/>
            <Stack.Screen name='Detail' component={Details}/>
            <Stack.Screen name='Catagories' component={Catagories}/>

        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Naigator