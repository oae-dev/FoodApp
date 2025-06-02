import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import GoBack from './components.js/GoBack'
import ListOfResiepies from './components.js/listOfResiepies'
import { FlatList } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'

const Favorites = () => {

const favData = useSelector((state)=>state.FavorateReducer)

useEffect(()=>{
  console.log(favData)
},[])

  return (
    <View style={{flex:1}}>
      <GoBack title={"favorite"} />


      <FlatList 
      data={favData}
      renderItem={({item})=>{
        return(
          <ListOfResiepies items={item}/>
        )
      }}/>
    </View>

  )
}

export default Favorites