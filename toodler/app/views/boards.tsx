import React from 'react';
import { View, StyleSheet, FlatList, Button } from 'react-native';
import ButtonCard from './eachBoard';
import data from './data.json';
import { Link } from 'expo-router';

const Boards = ({}: any) => {

  const boards = data.boards;

  const renderBoard = ({ item }: { item: any }) => (
    <ButtonCard
          key={item.id}
          photo={item.thumbnailPhoto}
          name={item.name}
          onPress={() => console.log(`Clicked on board: ${item.name}`)}
          description={item.description} 
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={boards}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderBoard}
        contentContainerStyle={styles.listContainer}
      />
      <Link href="/views/createBoardScreen">
        <Button title="Create New Board" />
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
    width: '90%',
  },
  listContainer: {
    paddingBottom: 20,
  },
});

export default Boards;
