import React, { useCallback } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

import { Todo } from '../../@types/Participants';
import { useTodosService } from '../../hooks/useTodosService';
import { theme } from '../../themes/default';
import { ListItem } from './../organisms/ListItem';

interface RenderItemProps {
  item: Todo;
}

type KeyExtractorProps = Omit<Todo, 'description'>;

export function List() {
  const { todosList, todosCreated, todosChecked } = useTodosService();
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

  function listEmptyComponent() {
    return (
      <>
        <View style={styles.divider} />
        <View style={styles.emptyComponentContainer}>
          <Image
            source={require('../../../assets/clipboard.png')}
            style={styles.image}
          />
          <Text
            style={[
              styles.emptyComponentText,
              {
                fontFamily: theme.font.weight.bold,
                fontSize: theme.font.size.large,
              },
            ]}
          >
            Você ainda não tem tarefas cadastradas
          </Text>
          <Text style={styles.emptyComponentText}>
            Crie tarefas e organize seus itens a fazer
          </Text>
        </View>
      </>
    );
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.summaryContainer}>
          <Text style={[styles.summaryText, { color: theme.colors.blue }]}>
            Criadas
          </Text>
          <View style={styles.counterContainer}>
            <Text style={styles.counter}>{todosCreated}</Text>
          </View>
        </View>
        <View style={styles.summaryContainer}>
          <Text style={[styles.summaryText, { color: theme.colors.purple }]}>
            Concluídas
          </Text>
          <View style={styles.counterContainer}>
            <Text style={styles.counter}>{todosChecked}</Text>
          </View>
        </View>
      </View>
      <FlatList
        style={styles.list}
        data={todosList}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ItemSeparatorComponent={itemSeparatorComponent}
        ListEmptyComponent={listEmptyComponent}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 68,
  },
  list: {
    backgroundColor: theme.colors.gray600,
  },
  summaryContainer: {
    flexDirection: 'row',
  },
  summaryText: {
    fontFamily: theme.font.weight.bold,
  },
  counterContainer: {
    borderRadius: 10,
    backgroundColor: theme.colors.gray400,
    width: 28,
    marginLeft: 8,
  },
  counter: {
    color: theme.colors.gray100,
    textAlign: 'center',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: theme.colors.gray400,
    marginBottom: 20,
  },
  emptyComponentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 28,
  },
  emptyComponentText: {
    fontFamily: theme.font.weight.regular,
    fontSize: theme.font.size.normal,
    color: theme.colors.gray300,
  },
  image: { marginBottom: 16 },
});
