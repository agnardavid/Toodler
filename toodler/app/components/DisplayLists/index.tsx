import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { getAllListsByBoardId, ListInterface } from '@/app/Services/JsonInterpreter';
import AddListButton from '../AddListButton'; 
import EachList from '../List';
import styles from './styles';

interface DisplayListsProps {
  boardId: number;
  navigation: any;
}

export const DisplayLists: React.FC<DisplayListsProps> = ({ boardId, navigation }) => {
  const [lists, setLists] = useState<ListInterface[]>([]);

  useEffect(() => {
    const fetchedLists = getAllListsByBoardId(boardId);
    setLists(fetchedLists);
  }, [boardId]);

  const ListsWithAddButton = [
    ...lists,
    { id: 'addButton', isAddButton: true }, 
  ];

  return (
    <FlatList
      data={ListsWithAddButton}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: 'space-between' }}
      renderItem={({ item }) => {

        if ('name' in item) {
            
            return (
                <EachList
                    key={item.id}
                    id={typeof item.id === 'number' ? item.id : parseInt(item.id, 10)}
                    name={item.name}
                    color={item.color}
                    tasks={item.tasks}
                    boardId={item.boardId}  
                    navigation={navigation}
                    setList={setLists} 
                    onPress={() => {
                      console.log(`List card pressed for: ${item.name}`);
                      navigation.navigate('TaskList', { listId: item.id });
                    }}
                />
            );
        }
        if ('isAddButton' in item && item.isAddButton) {
        return <AddListButton navigation={navigation} />;
        }  

        return null;
        }}
      />
    );
  };
  
  export default DisplayLists;