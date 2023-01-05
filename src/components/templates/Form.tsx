import React, { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import { Todo } from "../../@types/Participants";
import { theme } from "../../themes/default";
import { AddButton } from "../atoms/AddButton";

interface FormProps {
  handleSetNewTodo: (todo: Todo) => void;
}

export function Form({ handleSetNewTodo }: FormProps) {
  const [newTodo, setNewTodo] = useState<string>("");
  const [inputIsFocused, setInputIsFocused] = useState<boolean>(false);

  function createNewTodo(todoDescription: string) {
    let todo: Todo;
    let id = Math.random().toString(36);
    todo = { id, description: todoDescription };
    return todo;
  }

  function addNewTodo() {
    if (newTodo.trim() === "")
      return Alert.alert(
        "Você precisa informar uma descrição para a nova tarefa."
      );
    const todo = createNewTodo(newTodo);
    handleSetNewTodo(todo);
    cleanTextField();
  }

  function cleanTextField() {
    setNewTodo("");
  }

  function handleInputFocus() {
    setInputIsFocused(!inputIsFocused);
  }

  return (
    <View style={styles.container}>
      <TextInput
        onFocus={handleInputFocus}
        onBlur={handleInputFocus}
        style={[
          styles.newTodo,
          {
            borderColor: inputIsFocused ? theme.colors.blue : "transparent",
          },
        ]}
        placeholder="Adicone uma nova tarfea"
        placeholderTextColor="grey"
        onChangeText={setNewTodo}
        value={newTodo}
      />
      <AddButton type="add" onPress={addNewTodo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: -28,
  },
  newTodo: {
    flex: 1,
    height: 54,
    marginRight: 4,
    paddingHorizontal: 8,
    borderRadius: 5,
    fontFamily: theme.font.weight.regular,
    fontSize: theme.font.size.large,
    backgroundColor: theme.colors.gray500,
    color: theme.colors.gray100,
    borderWidth: 1,
  },
});
