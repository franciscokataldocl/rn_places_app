import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";
import PlaceItem from '../components/PlaceItem';
import colors from "../utils/colors";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black
  },
  emptyContainer: {
    marginVertical:20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyContainerText: {
    fontSize: 20,
    color: colors.white
  },
  
});

const PlaceListScreen = ({ navigation }) => {
const places = useSelector((state)=> state.place.places)

const onSelectPlace = (id)=>{
  navigation.navigate('PlaceDetail', {placeId: id})
}

const renderItem = ({item}) =>(
<PlaceItem {...item} address="123, calle, ciudad, pais" onSelect={onSelectPlace}/>
)


const listEmptyComponent = () => (
  <View style={styles.emptyContainer}>
    <Text style={styles.emptyContainerText}>No hay lugares disponibles</Text>
  </View>
)


  return (
    <FlatList style={styles.container}
    data={places}
    keyExtractor={(item) => item.id.toString()}
    renderItem={renderItem}
    ListEmptyComponent={listEmptyComponent}
    />
  );
};

export default PlaceListScreen;
