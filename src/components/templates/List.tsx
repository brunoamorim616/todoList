import React, { useCallback } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { Todo } from '../../@types/Participants';
import { useTodosService } from '../../hooks/useTodosService';
import { theme } from '../../themes/default';
import { ListItem } from './../organisms/ListItem';

interface RenderItemProps {
  item: Todo;
}

type KeyExtractorProps = Omit<Todo, 'description'>;

export function List() {
  const { todosList, todosChecked } = useTodosService();
  const renderItem = useCallback(
    ({ item }: RenderItemProps) => <ListItem todo={item} />,
    []
  );

  function keyExtractor(item: KeyExtractorProps) {
    return item.id;
  }

  function itemSeparatorComponent() {
    return <View style={{ height: 8 }} />;
  }

  return (
    <>
      <View style={styles.container}>
        <View>
          <Text>ok</Text>
          <Text>{todosList.length}</Text>
        </View>
        <View>
          <Text>ok</Text>
          <Text>{todosChecked}</Text>
        </View>
      </View>
      <FlatList
        style={styles.list}
        data={todosList}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ItemSeparatorComponent={itemSeparatorComponent}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    backgroundColor: 'white',
    height: 68,
  },
  list: {
    backgroundColor: theme.colors.gray600,
  },
});
