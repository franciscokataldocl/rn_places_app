import React, { useState } from 'react';
import { View, Image, Text, Button, StyleSheet,Alert, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import colors from '../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20
  },
  preview: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.gray,
    borderWidth:1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  btnCamera:{
    backgroundColor: colors.black,
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

const ImageSelector = ({ onImage }) => {
  const [pickedUrl, setPickedUrl] = useState('');



  const verifyPermissions = async () => {
    const {status} = await ImagePicker.requestCameraPermissionsAsync();
    if(status !== 'granted'){
        Alert.alert(
            'Permisos insuficientes', 
            'Necesitas permisos para usar la cámara',
            [{text: 'OK'}]

            );
        return false;
    }
    return true;

  };


  const handleTakeImage = async () => {
    const cameraPermission = await verifyPermissions();

    if(!cameraPermission){
        return
    }
    const image = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [16, 9],
        quality: 0.7,
    });

    setPickedUrl(image.uri);
    onImage(image.uri)

  };

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!pickedUrl ? (
          <Text>No hay imagen seleccionada</Text>
        ) : (
          <Image source={{ uri: pickedUrl }} style={styles.image} />
        )}
      </View>

      <TouchableOpacity onPress={handleTakeImage} style={styles.btnCamera}>
        <Text style={styles.btnCameraText}>Tomar Foto</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ImageSelector;
