import React from 'react';
import { View, StyleSheet } from 'react-native';
import Boards from './views/boards';

export default function App() {
  return (
    <View style={styles.container}>
      <Boards />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
