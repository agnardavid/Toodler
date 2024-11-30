import React, { useEffect, useState } from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import EachBoard from '../board';
import {Board, getAllBoards} from '@/app/Services/JsonInterpreter';
import styles from './styles';
import AddBoardButton from '../addBoardButton';



export const DisplayBoards: React.FC<{ navigation: any }> = ({ navigation }) => {

  const [boards, setBoards] = useState<Board[]>([]);

  useEffect(() => {
      const fetchedBoards = getAllBoards(); 
      setBoards(fetchedBoards); 
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>

      {boards.map((board) => (
        <EachBoard
          key={board.id}
          id={board.id}
          photo={board.thumbnailPhoto} 
          name={board.name}
          description={board.description}
          navigation={navigation}
          setBoard={setBoards}
          onPress={() =>
            navigation.navigate('Lists', { boardId: board.id })
          } 
        />
      ))}
      {/* Add the CreateBoardButton after rendering boards */}
      <AddBoardButton onPress={() => navigation.navigate('CreateBoardScreen')} />
    </ScrollView>
  );
};

export default DisplayBoards;