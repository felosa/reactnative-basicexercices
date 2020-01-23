import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [password, setPassword] = useState("");
  return (
    <View>
      <Text>Enter Password</Text>
      <TextInput
        autoCorrect={false}
        autoCapitalize="none"
        style={styles.input}
        value={password}
        onChangeText={newValue => {
          setPassword(newValue);
        }}
      ></TextInput>
      {password.length < 4 ? (
        <Text>Password must be atleast 4 characters</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "blue",
    borderWidth: 1
  }
});

export default TextScreen;
