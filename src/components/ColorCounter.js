import React from "react";
import { View, Text, Button } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button
        title={`More ${color}`}
        onPress={() => {
          onIncrease();
        }}
      ></Button>
      <Button
        title={`Less ${color}`}
        onPress={() => {
          onDecrease();
        }}
      ></Button>
    </View>
  );
};

export default ColorCounter;
