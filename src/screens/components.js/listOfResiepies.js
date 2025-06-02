import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Favicon from './favicon'

const ListOfResiepies = (props) => {
    const item = props.items
    const [isFavorite, setFavorite] = useState(false)

    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Detail', item)} style={styles.searchedItems}>
                <Image source={{ uri: item.image }} style={styles.itempic} />
                <Text style={{ fontSize: 16, width: '70%', marginStart: 10, alignSelf: 'center' }}>{item.title}</Text>
            </TouchableOpacity>

            <Favicon items ={item}/>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 101,
        width: '95%',
        margin: 5,
        borderWidth: 2,
        borderRadius: 4,
        borderColor: '#969696',
        flexDirection:'row',
        elevation:1
    },

    searchedItems: {
        flexDirection: 'row',
        width:'85%'
    },
    itempic: {
        height: 85,
        width: 85,
        alignSelf:'center',
        marginStart:7,
        borderRadius: 10
    },
   
})
export default ListOfResiepies