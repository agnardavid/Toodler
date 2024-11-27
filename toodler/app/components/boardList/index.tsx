import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import ButtonCard from '../board';
import CreateBoardButton from '../createBoardButton';
import data from '../../resources/data.json';

const Boards = () => {

  const router = useRouter();
  const { newBoard } = useLocalSearchParams();

  const [boards, setBoards] = useState(data.boards);

  useEffect(() => {
    if (newBoard) {
      const parsedBoard = JSON.parse(newBoard as string);
      setBoards((prevBoards) => [...prevBoards, parsedBoard]);
    }
  }, [newBoard]);

  const deleteBoard = (id: number) => {
    if (id !== null) {
      setBoards((prevBoards) => prevBoards.filter((board) => board.id !== id));
    }
  };

  const renderBoard = ({ item }: { item: any }) => (
    <ButtonCard
      id={item.id}
      photo={item.thumbnailPhoto}
      name={item.name}
      onPress={() => console.log(`Clicked on board: ${item.name}`)}
      description={item.description}
      onDelete={() => deleteBoard(item.id)} 
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
      <CreateBoardButton />
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
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  confirmButton: {
    backgroundColor: '#ff4444',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 5,
    alignItems: 'center',
  },
  confButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginLeft: 5,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#333',
    fontWeight: 'bold',
  }
});

export default Boards;
