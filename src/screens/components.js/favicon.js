import { View, Text,TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const Favicon = () => {

    const [isFavorite,setFavorite] = useState(false)

  return (
    <View>
      {
                      isFavorite ?
                          <TouchableOpacity
                          onPress={()=>setFavorite(!isFavorite)}>
                              <Image source={require('../../../assets/fav.png')}
                                  style={styles.fav}
                              />
                          </TouchableOpacity>
                          :
                          <TouchableOpacity
                          onPress={()=>setFavorite(!isFavorite)}>
                              <Image source={require('../../../assets/notFav.png')}
                                  style={styles.fav}
                              />
                          </TouchableOpacity>
                  }
    </View>
  )
}

const styles = StyleSheet.create({
   fav:{
        height:40,
        width:40,
        marginTop:'50%'
    }
})

export default Favicon