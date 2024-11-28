import React, { useEffect, useState } from 'react';
import { ScrollView, FlatList } from 'react-native';
import EachBoard from '../board';
import {Board, getAllBoards} from '@/app/Services/JsonInterpreter';
import styles from './styles';



const DisplayBoards = () => {

  const [boards, setBoards] = useState<Board[]>([]);

  useEffect(() => {
      const fetchedBoards = getAllBoards(); 
      setBoards(fetchedBoards); 
  }, []);

  return (
    <ScrollView style={styles.container}>

      {boards.map((board) => (
        <EachBoard
          key={board.id}
          id={board.id}
          photo={board.thumbnailPhoto} 
          name={board.name}
          description={board.description}
          setBoard={setBoards}
          onPress={() => console.log(`Board ${board.id} clicked`)} 
        />
      ))}
    </ScrollView>
  );
};

export default DisplayBoards;