import React, { useState } from "react";

import { StyleSheet, View, FlatList } from "react-native";
import TaskView from "./components/TaskView";
import InputView from "./components/InputView";
export default function App() {
  const [taskList, setTaskList] = useState([]);
  function addTaskToList(currentTask) {
    if (currentTask.length > 0)
      setTaskList((taskList) => [
        ...taskList,
        { key: Math.random.toString, value: currentTask },
      ]);
  }
  return (
    <View style={styles.screen}>
      <InputView addTaskToListProps={addTaskToList} />

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
});
