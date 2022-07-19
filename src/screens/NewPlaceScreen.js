import React , {useState } from "react";
import { View, StyleSheet, Text, TextInput, Button, ScrollView} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useDispatch } from "react-redux";
import { addPlace } from "../store/place.slice";



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex:1,
    margin: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
  input:{
    borderBottomColor: Colors.black,
    borderBottomWidth:1,
    marginBottom: 20,
    padding:5
  }
});

const NewPlaceSreen = ({ navigation }) => {

const dispatch = useDispatch();
const [title, setTitle] = useState('');

const onHandleTitleChange = (text) =>{
  setTitle(text)

}

const onHandleSubmit = () =>{
  dispatch(addPlace(title));
  Navigation.navigate('Placce')
}




  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
    <Text style={styles.title}>Título</Text>
      <TextInput
      style={styles.input}
      placeholder="Nueva ubicación"
      value={title}
      onChangeText={onHandleTitleChange}
      />
      <Button
      title="Guardar dirección"
      color={Colors.primary}
      onPress={onHandleSubmit}
      />
      </View>
    </ScrollView>
  );
};

export default NewPlaceSreen;
