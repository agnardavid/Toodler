import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import { getAllListsByBoardId, getAllTasks, ListInterface, Task, getBoard} from '@/app/Services/JsonInterpreter';

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

  
  const BoardLists:ListInterface[] = getAllListsByBoardId(boardId); 

  
  const Tasks = getAllTasks();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{Board.name}</Text>
      <FlatList
        data={BoardLists} 
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => {
          // Filter tasks specific to the current list;
          const tasks = Tasks.filter((task) => task.listId === item.id);

          return (
            <TouchableOpacity
              style={styles.listCard}
              onPress={() => {
                console.log(`List card pressed for: ${item.name}`);
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
                    navigation.navigate('', { boardId: Board.id }); // put edit list here
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
                  e.stopPropagation(); // Prevent bubbling up to the list card button
                  console.log(`Delete button pressed for: ${item.name}`);
                }}
              >
                <Text style={styles.deleteButtonText}>Delete</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          );
        }}
        ListFooterComponent={
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => 
              navigation.navigate('CreateBoard')
            }
          >
            <Text style={styles.addButtonText}>+ Add List</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
};

export default Lists;
