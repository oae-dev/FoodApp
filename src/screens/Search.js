import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, Modal, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { TextInput } from 'react-native-gesture-handler'
import * as Animatable from 'react-native-animatable';
import { CUISINE_FILTERS, DIET_FILTERS, DISH_FILTERS } from '../Data';
import ListOfResiepies from './components.js/listOfResiepies';
import Floatingbtn from './components.js/floatingbtn';


const Search = () => {
    const navigation = useNavigation()
    const [searchword, setsearchword] = useState('')
    const [respie, setrespies] = useState([])
    const [showmodal, setmodal] = useState(false)
    const [cuisineDish, setcuisineDish] = useState();
    const [dietDish, setdietDish] = useState();
    const [intoDish, setIntoDish] = useState();
    const [loader, setloader] = useState()

    const fetchdata = () => {
        setloader(true)
        setrespies([])

        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        let uri = ''
        if (cuisineDish == '' && dietDish == '' && intoDish == '') {
            uri = `https://api.spoonacular.com/recipes/complexSearch?apiKey=ae27798fa24945d09f11694e5f3a03b6&query=${searchword}&addRecipeInformation=true`
        } else if (cuisineDish != '') {
            uri = `https://api.spoonacular.com/recipes/complexSearch?apiKey=ae27798fa24945d09f11694e5f3a03b6&query=${searchword}&cuisine=${cuisineDish}&addRecipeInformation=true`
        } else if (dietDish != '') {
            uri = `https://api.spoonacular.com/recipes/complexSearch?apiKey=ae27798fa24945d09f11694e5f3a03b6&query=${searchword}&diet=${dietDish}&addRecipeInformation=true`
        } else if (intoDish != '') {
            uri = `https://api.spoonacular.com/recipes/complexSearch?apiKey=ae27798fa24945d09f11694e5f3a03b6&query=${searchword}&cuisine=${cuisineDish}&diet=${dietDish}&excludeIngredients=${intoDish}&addRecipeInformation=true`
        }


        fetch(uri, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                setrespies(result.results);
            })
            .catch((error) => console.error(error))
            .finally(() => setloader(false));
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', borderBottomEndRadius: 15, borderBottomStartRadius: 15, height: '7%' }}>


                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.back}>
                    <Image source={require('../../assets/back.png')} style={{ height: '50%', width: '50%' }} />
                </TouchableOpacity>

                <Text style={styles.title}>
                    Search
                </Text>
            </View>

            <View style={styles.search} activeOpacity={0.7}>
                <Image source={require('../../assets/seachLogo.png')} style={styles.searchLogo} />
                <TextInput style={styles.placeholder}
                    placeholder='Please Search Here..'
                    value={searchword}
                    placeholderTextColor={'#9e9e9e'}
                    onChangeText={(Text) => setsearchword(Text)} />

                {
                    searchword != '' &&
                    <TouchableOpacity onPress={() => {
                        setsearchword('');
                        setrespies([]);
                        setIntoDish('')
                        setcuisineDish('')
                        setdietDish('')
                    }}>
                        <Image source={require('../../assets/cross.png')} style={[styles.searchLogo, { marginRight: 8, height: 15, aspectRatio: 1 }]} />
                    </TouchableOpacity>
                }
            </View>
            {
                searchword != '' &&
     
                <Floatingbtn onPress={()=>fetchdata()} lebel={"Search"} />
            }

            {
                searchword == '' &&
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={{
                        alignSelf: 'center',
                        fontSize: 20,
                        fontWeight: '600'
                    }}>Please Search</Text>
                </View>

            }

            {
                loader ?
                    <View style={{ height: '90%', justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator size={'large'} color="#0000ff" />
                    </View>
                    :
                    <View>
                        <FlatList
                            data={respie}
                            renderItem={({ item }) => {
                                return (
                                    <ListOfResiepies items={item}/>
                                )
                            }} />
                    </View>

            }



            {
                Array.isArray(respie) && respie.length != 0 &&
                <Floatingbtn onPress={()=>setmodal(true)} lebel={"Filter"}/>
            }

            <Modal
                visible={showmodal}
                transparent>
                <View style={styles.modalContainer}>
                    <View style={styles.Modal}>
                        <View style={{ height: 2, width: '30%', backgroundColor: 'black', alignSelf: 'center', marginTop: 7, borderRadius: 1 }}></View>
                        <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                            <Text>
                                Filters
                            </Text>
                            <TouchableOpacity
                                onPress={() => {
                                    setIntoDish('')
                                    setcuisineDish('')
                                    setdietDish('')
                                }}>
                                <Text>Clear</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.heading}>CUISINE</Text>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            data={CUISINE_FILTERS}
                            horizontal
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    onPress={() => setcuisineDish(item)}>
                                    <View style={[
                                        styles.itemcontainer,
                                        { backgroundColor: cuisineDish === item ? '#05B681' : 'white' },
                                    ]}>
                                        <Text style={[styles.filteritem, { color: cuisineDish === item ? 'white' : 'black' }]}>{item}</Text>
                                    </View>

                                </TouchableOpacity>
                            )}
                        />
                        <Text style={styles.heading}>DIET</Text>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            data={DIET_FILTERS}
                            horizontal
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    onPress={() => setdietDish(item)}>
                                    <View style={[
                                        styles.itemcontainer,
                                        { backgroundColor: dietDish === item ? '#05B681' : 'white' },
                                    ]}>
                                        <Text style={[styles.filteritem, { color: dietDish === item ? 'white' : 'black' }]}>{item}</Text>
                                    </View>

                                </TouchableOpacity>
                            )}
                        />
                        <Text style={styles.heading}>INTOLERRANCES</Text>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            data={DISH_FILTERS}
                            horizontal
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    onPress={() => setIntoDish(item)}>
                                    <View style={[
                                        styles.itemcontainer,
                                        { backgroundColor: intoDish === item ? '#05B681' : 'white' },
                                    ]}>
                                        <Text style={[styles.filteritem, { color: intoDish === item ? 'white' : 'black' }]}>{item}</Text>
                                    </View>

                                </TouchableOpacity>
                            )}
                        />
                        <TouchableOpacity
                            onPress={() => {
                                setmodal(false)
                                fetchdata()
                            }}>
                            <View style={[styles.searchBtn, { marginBottom: 6 }]}>
                                <Text style={{ fontSize: 20, fontWeight: '600', color: 'white' }}>Apply</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

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
    title: {
        fontSize: 19,
        alignSelf: 'center',
        fontWeight: '600',
        marginTop: 3
    },
    search: {
        height: 50,
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 5,
        elevation: 5
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
        flex: 1
    },
    searchBtn: {
        height: 50,
        width: '40%',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 15,
        backgroundColor: '#05B681'
    },
   
    
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    Modal: {
        height: '45%',
        width: '100%',
        backgroundColor: 'white',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    heading: {
        fontSize: 19,
        fontWeight: '600',
        margin: 5
    },
    itemcontainer: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        margin: 5,

    },
    filteritem: {
        fontSize: 19,
        fontWeight: '400',
        padding: 5
    }
})
export default Search