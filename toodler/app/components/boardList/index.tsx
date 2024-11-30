import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import EachBoard from '../Board';
import {Board, getAllBoards} from '@/app/Services/JsonInterpreter';
import styles from './styles';


export const DisplayBoards: React.FC<{ navigation: any }> = ({ navigation }) => {

  const [boards, setBoards] = useState<Board[]>([]);

  useEffect(() => {
      const fetchedBoards = getAllBoards(); 
      setBoards(fetchedBoards); 
  }, []);

  return (
    <View style={styles.container}>

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
      
    </View>
  );
};

export default DisplayBoards;