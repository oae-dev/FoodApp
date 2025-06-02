import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable';
import Favicon from './components.js/favicon';

const Details = () => {
  const navigation = useNavigation()
  const route = useRoute();
  const data = route.params;
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.topbar}>
        <Animatable.Image animation='slideInUp' source={{ uri: data.image }} style={{ height: '100%', width: '100%' }} />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.back}>
          <Image source={require('../../assets/back.png')} style={{ height: '50%', width: '50%' }} />
        </TouchableOpacity>
        <View style={styles.fav}>
          <Favicon />
        </View>
      </View>

      <Text style={styles.title}>{data.title}</Text>
      <Text style={{ fontSize: 19, fontWeight: '600' }}>ID={data.id}</Text>
      <Text>
        The Discription or Other ingradiouns are not in this api so make our coustom Discription
      </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  topbar: {
    height: 300,
    width: '100%'
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    margin: 10,
    alignSelf: "center"
  },
  back: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
    left: 30,
    backgroundColor: 'white',
    borderRadius: 20
  },
  fav:{
    height: 64,
    width: 64,
     position: 'absolute',
    top: '75%',
    right: 25,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom:10,
    backgroundColor: 'white',
    borderRadius: 32,
  }
})
export default Details;
