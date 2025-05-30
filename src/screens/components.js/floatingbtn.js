import { View, Text,TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Floatingbtn = ({onPress,lebel}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.flottingbtn}>
            <Text style={{ fontSize: 27, fontWeight: '600', color: 'white' }}>{lebel}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
     flottingbtn: {
        backgroundColor: '#05B681',
        height: 50,
        width: '30%',
        borderRadius: 25,
        position: 'absolute',
        bottom: 30,
        right: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    floatingIcon: {
        height: '50%',
        width: '50%',
    },
})
export default Floatingbtn