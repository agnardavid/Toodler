import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ButtonCard from './eachBoard';
import data from './data.json';

const Boards = () => {
  const boards = data.boards;

  const renderBoard = ({ item }: { item: any }) => (
    <ButtonCard
          key={item.id}
          photo={item.thumbnailPhoto}
          name={item.name}
          onPress={() => console.log(`Clicked on board: ${item.name}`)}
          description={item.description}    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={boards}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderBoard}
        contentContainerStyle={styles.listContainer}
      />
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
