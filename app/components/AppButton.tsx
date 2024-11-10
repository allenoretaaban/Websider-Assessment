/* eslint-disable react-native/no-inline-styles */


import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';

const AppButton = React.memo(({ title, onPress }) => (
  <TouchableOpacity
    style={[styles.defaultButton, { width: 260 }]}
    onPress={onPress}
  >
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
));

export default AppButton;
