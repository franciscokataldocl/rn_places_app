import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../utils/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});

const PlaceDetailScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>PlaceDetailScreen</Text>
    </View>
  );
};

export default PlaceDetailScreen;
