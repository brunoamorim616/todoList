import Ionicon from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { theme } from '../../themes/default';

interface ButtonProps {
  onPress: () => void;
}

export function DeleteButton({ onPress }: ButtonProps) {
  const [iconColor, setIconColor] = useState<string>(theme.colors.gray300);
  const [iconBackgroundColor, setIconBackgroundColor] = useState<string>(
    theme.colors.transparent
  );
  function onPressIn() {
    setIconBackgroundColor(theme.colors.gray400);
    setIconColor(theme.colors.danger);
  }

  function onPressOut() {
    setIconBackgroundColor(theme.colors.transparent);
    setIconColor(theme.colors.gray300);
  }

  return (
    <TouchableOpacity
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}
      style={styles.buttonContainer}
    >
      <View
        style={[styles.iconContainer, { backgroundColor: iconBackgroundColor }]}
      >
        <Ionicon name='trash-outline' size={21} color={iconColor} />
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
  },
  iconContainer: {
    width: 38,
    height: 38,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
