import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Todo } from "../../@types/Participants";
import { DeleteButton } from "../atoms/DeleteButton";

interface ListItemProps {
  todo: Todo;
  removeTodoFromList: (todoID: string) => void;
}

export function ListItem({ todo, removeTodoFromList }: ListItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.nameDisplayContainer}>
        <Text style={styles.nameDisplay}>{todo.description}</Text>
      </View>
      <DeleteButton type="remove" onPress={() => removeTodoFromList(todo.id)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  nameDisplayContainer: {
    flex: 1,
    marginRight: 13,
    borderRadius: 5,
    backgroundColor: "#303030",
    justifyContent: "center",
    padding: 8,
  },
  nameDisplay: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
});
