import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import data from '../views/data.json';

// Get screen width for responsive styling
const screenWidth = Dimensions.get('window').width;

const Lists = () => {
  const { boardId } = useLocalSearchParams();

  // Find the board by ID
  const board = data.boards.find((b) => b.id.toString() === boardId);

  // Filter lists by boardId
  const boardLists = data.lists.filter((list) => list.boardId.toString() === boardId);

  // Filter tasks by listId
  const getTasksForList = (listId: number) => {
    return data.tasks.filter((task) => task.listId === listId);
  };

  if (!board) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Board not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lists for: {board.name}</Text>
      <FlatList
        data={boardLists}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => {
          const tasks = getTasksForList(item.id);
          return (
            <View style={styles.listCard}>
              <View style={styles.cardContent}>
                {tasks.slice(0, 3).map((task) => (
                  <Text key={task.id} style={styles.taskText}>
                    • {task.name}
                  </Text>
                ))}
                {tasks.length > 3 && <Text style={styles.moreText}>...more tasks</Text>}
              </View>
              <Text style={styles.listTitle}>{item.name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5', // Light background color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333333', // Dark text color for good contrast with the light background
  },
  listCard: {
    width: screenWidth / 2 - 24, // Dividing screen width to fit 2 cards per row, with spacing
    height: 150, // Fixed height for the card
    margin: 8,
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#ffffff', // Light card background color
    borderWidth: 1,
    borderColor: '#dddddd', // Light border color for a clean appearance
    justifyContent: 'space-between',
    shadowColor: '#000', // Add a slight shadow to give depth to the card
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
  },
  taskText: {
    color: '#555555', // Slightly darker color for the task preview text for readability
    fontSize: 14,
  },
  moreText: {
    color: '#888888', // Light gray to indicate there are more tasks
    fontStyle: 'italic',
  },
  listTitle: {
    color: '#333333', // Dark color for list title
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  errorText: {
    fontSize: 18,
    color: '#ff0000',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Lists;
