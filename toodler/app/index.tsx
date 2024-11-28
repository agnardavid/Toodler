import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AllBoards from './views/AllBoards';
import Lists from './views/Eachlists';
import CreateBoard from './views/CreateBoard';
import TaskList from './views/Eachtasks';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <CreateBoard/>
    </View>
  );
}
// <Lists boardId={2}/>
// <AllBoards>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
