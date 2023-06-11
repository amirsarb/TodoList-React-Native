import React, { useState } from "react";
import { StyleSheet, TextInput, Button, View, Modal } from "react-native";

const InputView = (props) => {
  const [currentTask, setcurrentTask] = useState("");
  const addHandler = () => {
    props.addTaskToListProps(currentTask);
    setcurrentTask("");
  };
  return (
    <Modal visible={props.isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={setcurrentTask}
          value={currentTask}
          placeholder="Type here"
          style={styles.input}
        />
        <View style={styles.btnView}>
          <Button title="+Add" onPress={addHandler} />
          <Button title="Cancle" color="red" onPress={props.onCancle} />
        </View>
      </View>
    </Modal>
  );
};

export default InputView;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  btnView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "65%",
  },
});
