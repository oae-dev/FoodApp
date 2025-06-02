import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MEAL_FILTERS } from '../Data'
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'
import Floatingbtn from './components.js/floatingbtn'

const Home = () => {
    const [respie, setrespie] = useState([])
    const navigation = useNavigation()
    const API_KEY = 'ae27798fa24945d09f11694e5f3a03b6'
    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = () => {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        fetch('https://api.spoonacular.com/recipes/complexSearch?diet=low-carb&query=food&apiKey=ae27798fa24945d09f11694e5f3a03b6', requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                setrespie(result.results);
            })
            .catch((error) => console.error(error));
    }
    return (
        <View style={styles.container}>
            <Animatable.View animation={'slideInDown'} style={styles.topView}>
                <Image source={require('../../assets/homeBanner.png')} style={styles.banner} />
                <View style={styles.transparent} >
                    <Text style={styles.appName}>Recipie Pro</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Search')} style={styles.search} activeOpacity={0.7}>
                        <Image source={require('../../assets/seachLogo.png')} style={styles.searchLogo} />
                        <Text style={styles.placeholder}>Please Search Here...</Text>
                    </TouchableOpacity>
                    <Text style={styles.note}>Search 10000+ Recipies easily with one click</Text>
                </View>
            </Animatable.View>

            <Text style={styles.heading}>Catagories</Text>
            <View>
                <FlatList
                    data={MEAL_FILTERS}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Catagories', item.title)
                            }}
                            style={styles.catagoriesItems}>
                            <Animatable.View animation={'fadeIn'}>
                                <View>
                                    <Image source={item.icon} style={styles.itemlogo} />
                                </View>
                                <Text style={styles.itemTitle}>{item.title}</Text>
                            </Animatable.View>


                        </TouchableOpacity>
                    }
                />
            </View>

            <Text style={styles.heading}>Trendy Recipies</Text>
            <View>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={respie}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Detail', item)}
                            style={styles.resipieItems}>
                            <Animatable.View animation={'slideInUp'}>
                                <Image source={{ uri: item.image }} style={styles.respieImg} />

                                <View style={styles.transparent}>
                                    <Text style={[styles.note, { marginHorizontal: 5 }]}>{item.title}</Text>
                                </View>
                            </Animatable.View>
                        </TouchableOpacity>

                    )} />
            </View>
            <Floatingbtn
                onPress={() => navigation.navigate('Favorite')}
                lebel={'fav'}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topView: {
        height: '30%',
        width: '100%'
    },
    banner: {
        height: '100%',
        width: '100%'
    },
    transparent: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        borderRadius: 8,
        backgroundColor: 'rgba(0,0,0,0.6)'
    },
    appName: {
        fontSize: 40,
        fontWeight: '600',
        color: 'white',
        position: 'absolute',
        top: 10,
        left: 20
    },
    search: {
        height: 50,
        width: '90%',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',

    },
    searchLogo: {
        height: '70%',
        width: 25,
        marginStart: 7,
        resizeMode: 'contain'
    },
    placeholder: {
        fontSize: 15,
        marginStart: 15,
        color: '#9e9e9e'
    },
    note: {
        color: 'white',
        marginTop: 10,
        alignSelf: 'center',
        fontWeight: '500',
    },
    heading: {
        fontSize: 20,
        fontWeight: '600',
        margin: 20
    },
    catagoriesItems: {
        width: 150,
        aspectRatio: 1,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 8,
        elevation: 5,
    },
    itemlogo: {
        height: 100,
        margin: 10,
        alignSelf: 'center',
        aspectRatio: 1,
        tintColor: '#05B681'
    },
    itemTitle: {
        alignSelf: 'center',
        fontSize: 14,
        fontWeight: '600'
    },
    respieImg: {

        height: '100%',
        width: '100%',
        borderRadius: 8,
        resizeMode: 'cover'

    },
    resipieItems: {
        width: 150,
        height: 250,
        borderRadius: 8,
        backgroundColor: 'white',
        margin: 10,
        elevation: 5,

    }

})
export default Home