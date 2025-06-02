import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFav, removeFromFav } from '../../Redux/Action';

const Favicon = (props) => {
  const data = props.items;
  const favData = useSelector((state) => state.FavorateReducer);
  const dispatch = useDispatch();

  const isFavorite = favData.some((favItem) => favItem.id === data.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFav(data));
    } else {
      dispatch(addToFav(data));
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleFavorite}>
        <Image
          source={
            isFavorite
              ? require('../../../assets/fav.png')
              : require('../../../assets/notFav.png')
          }
          style={styles.fav}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  fav: {
    height: 40,
    width: 40,
    marginTop: '50%',
  },
});

export default Favicon;
