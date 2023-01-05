import React, { useCallback } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Todo, TodosList } from "../../@types/Participants";
import { theme } from "../../themes/default";
import { ListItem } from "./../organisms/ListItem";

interface ListProps {
  todosList: TodosList;
  handleRemoveTodoByID: (todoID: string) => void;
}

interface RenderItemProps {
  item: Todo;
}

type KeyExtractorProps = Omit<Todo, "description">;

export function List({ todosList, handleRemoveTodoByID }: ListProps) {
  const { list, todosCompleted, todosCreated } = todosList;

  const renderItem = useCallback(
    ({ item }: RenderItemProps) => (
      <ListItem todo={item} removeTodoFromList={handleRemoveTodoByID} />
    ),
    [list, handleRemoveTodoByID]
  );

  function keyExtractor(item: KeyExtractorProps) {
    return item.id;
  }

  function itemSeparatorComponent() {
    return <View style={{ height: 12 }} />;
  }

  function listHeaderComponent() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "flex-end",
        }}
      >
        <View>
          <Text>ok</Text>
          <Text>{todosCreated}</Text>
        </View>
        <View>
          <Text>ok</Text>
          <Text>{todosCompleted}</Text>
        </View>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.container}
      data={list}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      ItemSeparatorComponent={itemSeparatorComponent}
      ListHeaderComponentStyle={{
        backgroundColor: "white",
        height: 68,
      }}
      ListHeaderComponent={listHeaderComponent}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray600,
  },
});
