import React, { useState } from "react";
import { StyleSheet, TextInput, Button, View } from "react-native";

const InputView = (props) => {
  const [currentTask, setcurrentTask] = useState("");
  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={setcurrentTask}
        value={currentTask}
        placeholder="Type here"
        style={styles.input}
      />
      <Button
        title="+Add"
        onPress={() => props.addTaskToListProps(currentTask)}
      />
    </View>
  );
};

export default InputView;

const styles = StyleSheet.create({
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
