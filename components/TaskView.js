import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

export default function TaskView(props) {
  const createTwoButtonAlert = (key, item) =>
    Alert.alert("Delete " + item, "Are you sure?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => props.deleteTask(key) },
    ]);

  // function deleteTask(){
  //   return props.
  // }
  return (
    <TouchableOpacity
      key={props.keys}
      onLongPress={() => createTwoButtonAlert(props.keys, props.item)}
    >
      <View style={styles.taskList}>
        <Text key={props.keys}>{props.item}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  taskList: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});
