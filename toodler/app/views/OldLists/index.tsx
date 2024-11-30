import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import AddListButton from '@/app/components/AddListButton';
import { getAllListsByBoardId, getAllTasks, getBoard, deleteList } from '@/app/Services/JsonInterpreter';

type ListsScreenProps = {
  navigation: any;
  route: {
    params: {
      boardId: number;
    };
  };
};

export const Lists: React.FC<ListsScreenProps> = ({ navigation, route }) => {
  const { boardId } = route.params;
  const Board = getBoard(boardId); 
  const BoardLists = getAllListsByBoardId(boardId); 
  const Tasks = getAllTasks();

  const BoardListsWithAddButton = [
    ...BoardLists,
    { id: 'addButton', isAddButton: true }, // Add button placeholder
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{Board.name}</Text>

      <View style={styles.listContainer}>
        <FlatList
          data={BoardListsWithAddButton} 
          keyExtractor={(item) => item.id.toString()}
          numColumns={2} 
          columnWrapperStyle={{ justifyContent: 'space-between' }}

          renderItem={({ item }) => {
            if ('isAddButton' in item && item.isAddButton) {
              return (
                <AddListButton navigation={navigation}/>
              );
            }
            
            const tasks = Tasks.filter((task) => task.listId === item.id);

            return (
              <TouchableOpacity
                style={[styles.listCard, { borderColor: item.color || '#dddddd' }]} // Dynamically set border color
                onPress={() => {
                  console.log(`List card pressed for: ${item.name}`);
                  navigation.navigate('TaskList', { listId: item.id });
                }}
              >
                {/* List title and Edit button */}
                <View style={styles.listHeader}>
                  <Text style={styles.listTitle}>{item.name}</Text>
                  <TouchableOpacity
                    style={styles.editButton}
                    onPress={(e) => {
                      e.stopPropagation(); // Prevent bubbling up to the list card button
                      console.log(`Edit button pressed for: ${item.name}`);
                      navigation.navigate('EditList', { listId: item.id }); // Replace with your edit list navigation
                    }}
                  >
                    <Text style={styles.editButtonText}>Edit</Text>
                  </TouchableOpacity>
                </View>
          
                {/* Display tasks inside the box */}
                <View style={styles.cardContent}>
                  {tasks.slice(0, 3).map((task) => (
                    <Text key={task.id} style={styles.taskText}>
                      • {task.name}
                    </Text>
                  ))}
                  {tasks.length > 3 && <Text style={styles.moreText}>...more tasks</Text>}
                </View>
            
                {/* Delete button in the bottom-right corner */}
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={(e) => {
                    e.stopPropagation();
                    console.log(`Delete button pressed for: ${item.name}, ${item.id}`);
                    if (typeof item.id === 'number') {
                      deleteList(item.id);
                    }
                    navigation.navigate('Lists', { boardId: Board.id });
                  }}
                >
                  <Text style={styles.deleteButtonText}>Delete</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Lists;
