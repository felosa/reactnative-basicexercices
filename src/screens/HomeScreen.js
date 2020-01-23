import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Fer Aspp</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => navigation.navigate("Components")}
      ></Button>
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate("List")}
      ></Button>
      <Button
        title="Go to Image Demo"
        onPress={() => navigation.navigate("Image")}
      ></Button>
      <Button
        title="Go to Counter Demo"
        onPress={() => navigation.navigate("Counter")}
      ></Button>
      <Button
        title="Go to Color Demo"
        onPress={() => navigation.navigate("Color")}
      ></Button>
      <Button
        title="Go to Color Square"
        onPress={() => navigation.navigate("Square")}
      ></Button>
      <Button
        title="Go to Text Demo"
        onPress={() => navigation.navigate("Text")}
      ></Button>
      <Button
        title="Go to Box Demo"
        onPress={() => navigation.navigate("Box")}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "green",
    fontSize: 30
  }
});

export default HomeScreen;
