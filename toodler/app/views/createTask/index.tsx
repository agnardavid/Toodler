import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import styles from './styles';
import { createTask, editTask } from '@/app/Services/JsonInterpreter';

export const CreateTask: React.FC<{ navigation: any; route: { params: { listId: number } } }> = ({ navigation, route }) => {
  const { listId } = route.params; // Get the list ID where the task will be added

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isFinished, setIsFinished] = useState(false);

  const handleCreateTask = () => {
    if (!name.trim()) {
      alert('Task name is required!');
      
    }
    else{

      
      // Step 1: Create a new task with default values
      const newTaskId = createTask(listId);

      // Step 2: Edit the task to add user-provided details
      const success = editTask(newTaskId, name, description, isFinished, listId);

      if (success) {

        navigation.navigate('TaskList', { listId: listId });
      } else {
        alert('Failed to create task. Please try again.');
      }
    }
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create New Task</Text>

      {/* Task Name Input */}
      <TextInput
        style={styles.input}
        placeholder="Task Name"
        value={name}
        onChangeText={setName}
      />

      {/* Task Description Input */}
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      {/* Task Status Toggle */}
      <TouchableOpacity
        style={[styles.TextContainerWrapper, styles.TextContainer, {backgroundColor: isFinished ? '#4CAF50' : '#FF6F61'}]}
        onPress={() => setIsFinished(!isFinished)}
      >
        <Text style={styles.finishedButton}>
          {isFinished ? 'Mark as Pending' : 'Mark as Finished'}
        </Text>
      </TouchableOpacity>

      {/* Create Task Button */}
      <View style={[styles.TextContainerWrapper, styles.TextContainer]}>
        <Button title="Create Task" onPress={handleCreateTask} color="#4CAF50" />
      </View>
    </View>
  );
};

export default CreateTask;
