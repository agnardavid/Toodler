import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';

// Dummy data
const tasks = [
  {
    id: 1,
    name: 'Van Gogh Museum',
    description: 'Take a walk in the museum of Van Gogh!',
    isFinished: false,
    listId: 1,
    isDeleted: false,
  },
  {
    id: 2,
    name: 'Sunflower fields',
    description: 'Want to see the sunflower fields in the Netherlands!',
    isFinished: true,
    listId: 1,
    isDeleted: false,
  },
  {
    id: 3,
    name: 'Rotterdam port',
    description: 'See the biggest shipping port in Europe!',
    isFinished: false,
    listId: 2,
    isDeleted: false,
  },
  {
    id: 4,
    name: 'Helicopter ride over Amsterdam',
    description:
      'A breath-taking view over the infamous Amsterdam city in a helicopter',
    isFinished: true,
    listId: 2,
    isDeleted: false,
  },
];

// Hardcoded listId
const listId = 1;

const TaskList = () => {
  // Filter tasks for the specific listId
  const filteredTasks = tasks.filter((task) => task.listId === listId);

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
