import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'
import ListOfResiepies from './components.js/listOfResiepies'

const Catagories = () => {
    const route = useRoute()
    const title = route.params
    const [recipes, setrespies] = useState([])
    const [loader,setloader] = useState(true)
    const navigation = useNavigation();

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = () => {
        setloader(true)

        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=ae27798fa24945d09f11694e5f3a03b6&query=${title}&addRecipeInformation=true`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                setrespies(result.results);
            })
            .catch((error) => console.error(error))
            .finally(() => setloader(false));
    }
    return (
        <View style={{flex:1}}>

            <View style={{flexDirection:'row',borderBottomEndRadius:15,borderBottomStartRadius:15,height:'7%'}}>
                <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.back}>
                <Image source={require('../../assets/back.png')} style={{ height: '50%', width: '50%' }} />
            </TouchableOpacity>
            <Text style={styles.title}>
                {title}
            </Text>
            </View>
            {
                loader ? 
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <ActivityIndicator size={'large'} color="#0000ff"/>
                </View>
                :
                <FlatList
                data={recipes}
                renderItem={({ item }) => {
                    return (
                        <Animatable.View animation={'slideInUp'} style={{flex:1}}>

                            <ListOfResiepies items={item}/>
                        </Animatable.View>

                    )


                }}
            />
            }
            
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
    searchedItems: {
        height: 101,
        width: '95%',
        flexDirection: 'row',
        margin: 5,
        borderWidth: 2,
        borderRadius: 4,
        alignSelf:'center',
        borderColor: '#969696'
    },
    itempic: {
        height: 100,
        width: 100,
        borderRadius: 10
    },

})
export default Catagories