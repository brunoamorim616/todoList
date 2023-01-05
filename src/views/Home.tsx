import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Todo, TodosList } from "../@types/Participants";
import { theme } from "../themes/default";
import { Form } from "./../components/templates/Form";
import { Header } from "./../components/templates/Header";
import { List } from "./../components/templates/List";

export function Home({ onLayout }: { onLayout: () => void }) {
  const [todosList, setTodosList] = useState<TodosList>({
    list: [],
    todosCompleted: 0,
    todosCreated: 0,
  });

  function handleSetNewTodo(newTodo: Todo) {
    setTodosList((previousState) => {
      return {
        ...previousState,
        list: [...previousState.list, newTodo],
        todosCreated: previousState.todosCreated + 1,
      };
    });
  }

  function handleRemoveTodoByID(todoID: string) {
    setTodosList((previousState) => {
      const newList = previousState.list.filter((todo) => todo.id !== todoID);
      return {
        ...previousState,
        list: newList,
        todosCreated: previousState.todosCreated - 1,
      };
    });
  }

  useEffect(() => {
    console.log(todosList);
  }, [todosList.list]);

  return (
    <View style={styles.container} onLayout={onLayout}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <View style={styles.listContainer}>
        <Form handleSetNewTodo={handleSetNewTodo} />
        <List
          todosList={todosList}
          handleRemoveTodoByID={handleRemoveTodoByID}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray700,
  },
  headerContainer: {
    marginBottom: 76,
    paddingTop: 21,
  },
  listContainer: {
    flex: 1,
    backgroundColor: theme.colors.gray600,
    paddingHorizontal: 21,
  },
});
