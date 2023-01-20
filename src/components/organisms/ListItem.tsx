import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Todo } from '../../@types/Participants';
import { useTodosService } from '../../hooks/useTodosService';
import { theme } from '../../themes/default';
import { DeleteButton } from '../atoms/DeleteButton';
import { SelectionButton } from '../atoms/SelectionButon';

interface ListItemProps {
  todo: Todo;
}

export function ListItem({ todo }: ListItemProps) {
  const { handleCheckTodo, handleRemoveTodoByID } = useTodosService();
  const { description, id, checked } = todo;

  function handleOnPressDelete() {
    handleRemoveTodoByID(id);
  }

  function handleOnPressSelectionButton() {
    handleCheckTodo(id);
  }

  return (
    <View style={styles.container}>
      <SelectionButton
        onPress={handleOnPressSelectionButton}
        itemChecked={checked}
      />
      <View style={styles.nameDisplayContainer}>
        <Text style={styles.nameDisplay}>{description}</Text>
      </View>
      <DeleteButton onPress={handleOnPressDelete} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 52,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.colors.gray500,
    borderRadius: 5,
    borderColor: theme.colors.gray400,
    borderWidth: 1,
  },
  nameDisplayContainer: {
    flex: 1,
    marginRight: 13,
    justifyContent: 'center',
    padding: 8,
  },
  nameDisplay: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
});
