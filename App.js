import React, { useState } from "react";
import uuid from "react-native-uuid";

import { StyleSheet, View, FlatList, Alert } from "react-native";
import TaskView from "./components/TaskView";
import InputView from "./components/InputView";
export default function App() {
  const [taskList, setTaskList] = useState([]);
  function deleteItem(keys) {
    setTaskList(taskList.filter((data) => data.keys !== keys));
    // console.log(keys);
  }
  function addTaskToList(currentTask) {
    if (currentTask.length > 0)
      setTaskList((taskList) => [
        ...taskList,
        { keys: uuid.v1(), value: currentTask },
      ]);
  }
  return (
    <View style={styles.screen}>
      <InputView addTaskToListProps={addTaskToList} />
      <FlatList
        keyExtractor={(item, index) => item.key}
        data={taskList}
        renderItem={(data) => (
          <TaskView
            keys={data.item.keys}
            item={data.item.value}
            deleteTask={deleteItem}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
