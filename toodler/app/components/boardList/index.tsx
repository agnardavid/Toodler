import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import ButtonCard from '../board/index';
import CreateBoardButton from '../addBoardButton';
// import data from '../../resources/data.json';
import { getAllBoards, Board, deleteBoard } from '@/app/Services/JsonInterpreter';



const Boards = () => {

  const router = useRouter();
  const { newBoard } = useLocalSearchParams();

  const [boards, setBoards] = useState<Board[]>(getAllBoards());
  console.log(boards);


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
