import React from 'react';
import { StyleSheet, View } from 'react-native';

import { theme } from '../themes/default';
import { Form } from './../components/templates/Form';
import { Header } from './../components/templates/Header';
import { List } from './../components/templates/List';

export function Home({ onLayout }: { onLayout: () => void }) {
  return (
    <View style={styles.container} onLayout={onLayout}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <View style={styles.listContainer}>
        <Form />
        <List />
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
