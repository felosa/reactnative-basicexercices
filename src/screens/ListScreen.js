import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    {
      name: "Jenny",
      age: 40
    },
    {
      name: "Jorge",
      age: 31
    },
    {
      name: "Jason",
      age: 31
    },
    {
      name: "Edu",
      age: 31
    },
    {
      name: "Javi",
      age: 32
    },
    {
      name: "Ruth",
      age: 28
    },
    {
      name: "Nacho",
      age: 29
    }
  ];

  return (
    <FlatList
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            Name: {item.name} - {item.age} years
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    marginVertical: 50
  }
});

export default ListScreen;
