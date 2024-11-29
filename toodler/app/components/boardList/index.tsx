import React, { useEffect, useState } from 'react';
import { ScrollView, FlatList } from 'react-native';
import EachBoard from '../board';
import {Board, getAllBoards} from '@/app/Services/JsonInterpreter';
import styles from './styles';



export const DisplayBoards: React.FC<{ navigation: any }> = ({ navigation }) => {

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
          onPress={() =>
            navigation.navigate('Lists', { boardId: board.id })
          } 
        />
      ))}
    </ScrollView>
  );
};

export default DisplayBoards;