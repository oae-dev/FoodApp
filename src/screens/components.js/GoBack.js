import { View, Text, StyleSheet,TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const GoBack = ({title}) => {
    const navigation = useNavigation()
  return (
    <View style={{flexDirection:'row',borderBottomEndRadius:15,borderBottomStartRadius:15,height:'7%'}}>
                    <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.back}>
                    <Image source={require('../../../assets/back.png')} style={{ height: '50%', width: '50%' }} />
                </TouchableOpacity>
                <Text style={styles.title}>
                    {title}
                </Text>
                </View>
  )
}

const styles = StyleSheet.create({
    back: {
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 25,
        marginVertical: 15,
        backgroundColor: 'white',
        borderRadius: 20
    },
    title:{
    fontSize:19,
    alignSelf:'center',
    fontWeight:'600'
    },
})

export default GoBack