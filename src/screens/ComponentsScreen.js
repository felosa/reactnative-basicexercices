import React from "react";
import { Text, View, StyleSheet } from "react-native";

const ComponentScreen = () => {

  const name = 'Fernando';

  return (
    <View>
      <Text style={styles.textStyle1}>Getting started with react native</Text>
      <Text style={styles.textStyle2}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle1: {
    fontSize: 45
  },
  textStyle2: {
    fontSize: 20
  }
});

export default ComponentScreen;
