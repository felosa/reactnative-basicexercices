import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewRow1}>
        <Text style={styles.textOneStyle}>Child #1</Text>
        <Text style={styles.textTwoStyle}>Child #2</Text>
      </View>
      <View>
        <Text style={styles.textThreeStyle}>Child #3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderColor: "black",
    height: 100
  },
  viewRow1: {
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  textOneStyle: {
    backgroundColor: "red",
    width: '33%',
    height: 100
  },
  textTwoStyle: {
    backgroundColor: "purple",
    width: '33%',
    height: 100
  },
  textThreeStyle: {
    backgroundColor: "green",
    width: '33%',
    height: 100,
    alignSelf: 'center'
  }
});

export default BoxScreen;
