import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TaskView = (props) => {
  return (
    <View style={styles.taskList}>
      <Text>{props.item}</Text>
    </View>
  );
};

export default TaskView;

const styles = StyleSheet.create({
  taskList: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});
