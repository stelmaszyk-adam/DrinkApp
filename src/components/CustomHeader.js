import React from "react";
import { View, StyleSheet } from "react-native";
import Typography from "./Typography";

const CustomHeader = ({ navigation, text }) => (
  <View style={[styles.container]}>
    <Typography>{text}</Typography>
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 2,
    height: 70,
    paddingTop: 20,
    fontWeight: 'bold',
    tintColor: '#000',
    borderBottomWidth: 2,
    fontSize: 12,
  }
});

export default CustomHeader;