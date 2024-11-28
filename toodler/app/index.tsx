import React from 'react';
import { View, StyleSheet } from 'react-native';
import Boards from './components/boardList/index';
import CreateBoard from './views/CreateBoard/index';
import AllBoards from './views/AllBoards';

export default function App() {
  return (
    <View >
      <AllBoards />
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
