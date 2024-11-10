/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { TextInput } from 'react-native';
import styles from '../styles/styles';

const OptimizedInput = React.memo(({ value, onChangeText, placeholder, secureTextEntry = false }) => (
  <TextInput
    style={[styles.inputText, { width: 260}]}
    value={value}
    onChangeText={onChangeText}
    placeholder={placeholder}
    secureTextEntry={secureTextEntry}
    placeholderTextColor="lightgray"
  />
));

export default OptimizedInput;
