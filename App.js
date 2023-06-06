import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import TaskView from "./components/TaskView";

export default function App() {
  const [currentTask, setcurrentTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  function addTaskToList() {
    if (currentTask.length > 0)
      setTaskList((taskList) => [
        ...taskList,
        { key: Math.random.toString, value: currentTask },
      ]);
  }
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={setcurrentTask}
          value={currentTask}
          placeholder="Type here"
          style={styles.input}
        />
        <Button title="+Add" onPress={addTaskToList} />
      </View>

      <FlatList
        keyExtractor={(item, index) => item.key}
        data={taskList}
        renderItem={(data) => <TaskView item={data.item.value} />}
      />
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
