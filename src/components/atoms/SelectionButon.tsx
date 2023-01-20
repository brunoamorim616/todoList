import Ionicon from '@expo/vector-icons/Ionicons';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { theme } from '../../themes/default';

interface ButtonProps {
  itemChecked: boolean;
  onPress: () => void;
}

export function SelectionButton({ onPress, itemChecked }: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <View
        style={[
          styles.iconContainer,
          {
            backgroundColor: itemChecked
              ? theme.colors.purpleDark
              : theme.colors.transparent,
            borderColor: itemChecked
              ? theme.colors.purpleDark
              : theme.colors.gray100,
          },
        ]}
      >
        {itemChecked && (
          <Ionicon name='checkmark' color={theme.colors.gray100} />
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 52,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: -12,
  },
  iconContainer: {
    width: 16,
    height: 16,
    borderRadius: 25,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
