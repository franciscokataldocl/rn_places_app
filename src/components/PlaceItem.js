import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import colors from '../utils/colors';


const styles = StyleSheet.create({
    container:{
        flex:1,
        borderBottomColor: colors.primary,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',

    },
    image:{
        width: 80,
        height: 80,
        borderRadius: 20,
        backgroundColor: colors.secondary,
    },
    info:{
        marginLeft: 15,
        flex:1,
        justifyContent: 'center',
        alignItems: 'flex-start',

    },
    title:{
        fontSize:16,
        color: colors.black,
        marginBottom: 10,

    },
    address:{
        fontSize:14,
        color: colors.highlight,


    }

})

const PlaceItem = ({id, title, image, address, onSelect}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onSelect(id)}>
        <Image source={{uri: image}} style={styles.image}/>
        <View style={styles.info}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.address}>{address}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default PlaceItem;