import React, { useState } from "react";
import uuid from "react-native-uuid";

import { StyleSheet, View, FlatList, Modal, Button } from "react-native";
import TaskView from "./components/TaskView";
import InputView from "./components/InputView";
export default function App() {
  const [taskList, setTaskList] = useState([]);
  const [isVisible, setisVisible] = useState(false);

  function deleteItem(keys) {
    setTaskList(taskList.filter((data) => data.keys !== keys));
    // console.log(keys);
  }
  function addTaskToList(currentTask) {
    if (currentTask.length > 0) {
      setTaskList((taskList) => [
        ...taskList,
        { keys: uuid.v1(), value: currentTask },
      ]);
      setisVisible(false);
    }
  }
  const cancelHandler = () => {
    setisVisible(false);
  };
  return (
    <View style={styles.screen}>
      <Button title="Add New Task" onPress={() => setisVisible(true)} />
      <InputView
        addTaskToListProps={addTaskToList}
        isVisible={isVisible}
        onCancle={cancelHandler}
      />
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
    flex: 1,
    padding: 50,
  },
});
