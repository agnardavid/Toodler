import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import { getAllTasksByListId, deleteTask } from '@/app/Services/JsonInterpreter'; // Ensure deleteTask is imported

type TaskListProps = {
  navigation: any;
  route: {
    params: {
      listId: number;
    };
  };
};

export const TaskList: React.FC<TaskListProps> = ({ navigation, route }) => {
  const { listId } = route.params;

  // Filter tasks for the specific listId
  const filteredTasks = getAllTasksByListId(listId);

  const handleDeleteTask = (taskId: number) => {
    // Call the delete function and refresh the list
    console.log(`Delete task with ID: ${taskId}`);
    deleteTask(taskId); // Simulate task deletion
    navigation.replace('TaskList', { listId }); // Refresh the screen
  };

  const handleEditTask = (taskId: number) => {
    console.log(`Edit task with ID: ${taskId}`);
    navigation.navigate('EditTask', { taskId }); // Navigate to the EditTask screen
  };

  const AddTask = () => {
    console.log(`Navigating to CreateTask for listId: ${listId}`);
    navigation.navigate('createTask', { listId }); // Pass listId to CreateTask
  };
  

  return (
    <View style={styles.container}>
      {/* Display the title of the list */}
      <Text style={styles.title}>Tasks for List {listId}</Text>

      {/* Display tasks */}
      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          // Make the entire card clickable
          <TouchableOpacity
            style={styles.taskCard}
            onPress={() => handleEditTask(item.id)}
          >
            {/* Task Information */}
            <View style={styles.taskInfo}>
              <Text style={styles.taskName}>{item.name}</Text>
              <Text style={styles.taskDescription}>{item.description}</Text>
              <Text style={styles.taskStatus}>
                Status: {item.isFinished ? 'Finished' : 'Pending'}
              </Text>
            </View>

            {/* Buttons Section */}
            <View style={styles.buttonContainer}>
              {/* Edit Button */}
              <TouchableOpacity
                style={styles.editButton}
                onPress={(e) => {
                  e.stopPropagation(); // Prevent triggering the card's onPress
                  handleEditTask(item.id);
                }}
              >
                <Text style={styles.editButtonText}>Edit</Text>
              </TouchableOpacity>

              {/* Delete Button */}
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={(e) => {
                  e.stopPropagation(); // Prevent triggering the card's onPress
                  handleDeleteTask(item.id);
                }}
              >
                <Text style={styles.deleteButtonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          
        )}
        ListFooterComponent={
            <TouchableOpacity
              style={styles.addButton}
              onPress={AddTask} // Directly call AddTask
              >
            
            
              <Text style={styles.addButtonText}>+ Add Task</Text>
            </TouchableOpacity>
          }
        
      />
    </View>
  );
};

export default TaskList;
