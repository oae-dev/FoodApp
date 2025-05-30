import { View, Text, StyleSheet, Image, Animated } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {

    const navigation = useNavigation()

    useEffect (()=>{
        setTimeout(() => {
          navigation.replace('Home')  
        }, 2000);
        
    },[navigation])

  return (
    <View style={styles.container}>
        <Animatable.Image animation="slideInUp" source={require('../../assets/logo.png')}/>
      <Animatable.Text animation="slideInUp" style={styles.title}>Respies</Animatable.Text>
      <Animatable.Text animation="slideInUp" style={styles.tagLine}>Search Recipes With Health Filters</Animatable.Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#05B681',
        justifyContent:'center',
        alignItems:'center'
    },
    logo:{
        height:200,
        width:200
    },
    title:{
        fontSize:29,
        fontWeight:'600'
    },
    tagLine:{
        position:'absolute',
        bottom: 50,
        fontSize: 19,
        fontWeight:'600'
    }
})

export default Splash