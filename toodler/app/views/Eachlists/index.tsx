import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';

const Lists = () => {
  // Replace this dummy board data with real board data fetched from an API or state
  const mockBoard = {
    id: 1,
    name: 'My Board',
  };

  // Replace this dummy list data with real lists for the board, fetched from an API or state
  const mockBoardLists = [
    { id: 1, name: 'List 1', boardId: 1 },
    { id: 2, name: 'List 2', boardId: 1 },
  ];

  // Replace this dummy tasks data with real tasks associated with lists, fetched from an API or state
  const mockTasks = [
    { id: 1, name: 'Task 1', listId: 1 },
    { id: 2, name: 'Task 2', listId: 1 },
    { id: 3, name: 'Task 3', listId: 1 },
    { id: 4, name: 'Task 4', listId: 2 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{mockBoard.name}</Text>
      <FlatList
        data={mockBoardLists} // Replace mockBoardLists with real data
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => {
          // Filter tasks specific to the current list; replace mockTasks with real data
          const tasks = mockTasks.filter((task) => task.listId === item.id);

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
            onPress={() => {
              console.log('Add List button pressed');
            }}
          >
            <Text style={styles.addButtonText}>+ Add List</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
};

export default Lists;
