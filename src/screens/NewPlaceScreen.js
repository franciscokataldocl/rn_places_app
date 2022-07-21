import React , {useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView} from "react-native";

import { useDispatch } from "react-redux";
import { savePlace, addPlace } from "../store/place.slice";
import ImageSelector from '../components/ImageSelector';
import colors from "../utils/colors";
import LocationSelector from '../components/LocationSelector';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black
  },
  content: {
    flex:1,
    margin: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    color: colors.primary
  },
  input:{
    borderBottomColor: colors.white,
    borderBottomWidth:1,
    marginBottom: 20,
    padding:5
  },
  btnCamera:{
    backgroundColor: colors.highlight,
    paddingVertical: 15,
    borderRadius:5,
   
  },
  btnCameraText:{
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }
});

const NewPlaceSreen = ({ navigation }) => {

const dispatch = useDispatch();

const [title, setTitle] = useState('');
const [image, setImage] = useState('');
const [location, setLocation] = useState('');

const onHandleTitleChange = (text) =>{
  setTitle(text)
}

const onHandleSubmit = () =>{
 dispatch(savePlace(title, image));
  navigation.navigate('Place')
}


const handleImageSelect = (imageUrl) => setImage(imageUrl);


const handleLocationSelect = (location) =>{
setLocation(location)
}

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
    <Text style={styles.title}>Título</Text>
      <TextInput
      style={styles.input}
      placeholder="Nueva ubicación"
      placeholderTextColor={colors.white}
      value={title}
      onChangeText={onHandleTitleChange}
      />
      <ImageSelector onImage={handleImageSelect}/>
      <LocationSelector onLocation={handleLocationSelect}/>
      <TouchableOpacity onPress={onHandleSubmit} style={styles.btnCamera}>
        <Text style={styles.btnCameraText}>Guardar dirección</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default NewPlaceSreen;
