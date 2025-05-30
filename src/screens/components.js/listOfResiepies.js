import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ListOfResiepies = (props) => {

        const item = props.items
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Detail', item)}
            style={styles.searchedItems}>
            <Image source={{ uri: item.image }} style={styles.itempic} />
            <Text style={{ fontSize: 16, width: '70%', marginStart: 10, alignSelf: 'center' }}>{item.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
searchedItems: {
        height: 101,
        width: '95%',
        flexDirection: 'row',
        margin: 5,
        borderWidth: 2,
        borderRadius: 4,
        borderColor: '#969696'
    },
    itempic: {
        height: 100,
        width: 100,
        borderRadius: 10
    },
})
export default ListOfResiepies