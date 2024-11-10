import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles/styles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.centerText}>Home Page</Text>
    </View>
  );
}
