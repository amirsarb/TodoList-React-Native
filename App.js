import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [currentTask, setcurrentTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const addTask = () => {
    setTaskList((taskList) => [...taskList, currentTask]);
  };
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="type here"
          onChangeText={setcurrentTask}
          value={currentTask}
        />
        <Button title="Add" onPress={addTask} />

        <StatusBar style="auto" />
      </View>
      <View>
        {taskList.map((task) => (
          <Text key={task}>{task}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
});
