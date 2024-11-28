import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import ButtonCard from '../board';
import CreateBoardButton from '../createBoardButton';
import data from '../../resources/data.json';
import styles from './styles';
import { deleteBoard } from '@/app/Services/JsonInterpreter';
import DeleteButton from '../deleteBoard';

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

  const renderBoard = ({ item }: { item: any }) => (
    <ButtonCard
      id={item.id}
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
      <CreateBoardButton />
    </View>
  );
};



export default Boards;
