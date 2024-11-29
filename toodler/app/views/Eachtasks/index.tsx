import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import { getAllTasksByListId } from '@/app/Services/JsonInterpreter';

// Hardcoded listId
const listId = 1;

const TaskList = () => {
  // Filter tasks for the specific listId
  const filteredTasks = getAllTasksByListId(listId);

  return (
    <View style={styles.container}>
      {/* Display the title of the list */}
      <Text style={styles.title}>Tasks for List {listId}</Text>

      {/* Display tasks */}
      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.taskCard}>
            <Text style={styles.taskName}>{item.name}</Text>
            <Text style={styles.taskDescription}>{item.description}</Text>
            <Text style={styles.taskStatus}>
              Status: {item.isFinished ? 'Finished' : 'Pending'}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default TaskList;
