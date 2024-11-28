import React from 'react';
import { View, StyleSheet } from 'react-native';
import Boards from './components/boardList/index';
import CreateBoard from './views/CreateBoard/index';

export default function App() {
  return (
    <View >
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
