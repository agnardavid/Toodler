import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Routes from './routes/index'

export default function App() {
  return <Routes />;
  
}
// <Lists boardId={2}/>
// <AllBoards/>
// <CreateBoard/>
// <TaskList/>
// <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
