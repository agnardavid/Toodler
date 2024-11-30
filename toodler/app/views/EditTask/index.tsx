import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, ScrollView, Alert } from 'react-native';
import styles from './styles';
import { getList, getAllListsByBoardId, getTask, editTask } from '@/app/Services/JsonInterpreter';
import { Picker } from '@react-native-picker/picker';



type EditTaskProps = {
  navigation: any;
  route: {
    params: {
      taskId: number;
    };
  };
};

const EditTask: React.FC<EditTaskProps> = ({ navigation, route }) => {
  let PickerValue:number;
  const { taskId } = route.params;
  
  

  // Get the current task details
  const Task = getTask(taskId);
  const currentList = getList(taskId);
  if (currentList === undefined){
    useEffect(() => {
      Alert.alert('Error', 'Current List not found!', [
        { text: 'OK', onPress: () => navigation.goBack() },
      ]);
    }, []);
    return null;
  }
  const listsForCurrentBoard = getAllListsByBoardId(currentList.boardId);

  // Check if Task is undefined
  if (!Task) {
    useEffect(() => {
      Alert.alert('Error', 'Task not found!', [
        { text: 'OK', onPress: () => navigation.goBack() },
      ]);
    }, []);

    return null; // Return null to render nothing while navigating back
  }

  // State to manage the form fields
  const [name, setName] = useState(Task.name);
  const [description, setDescription] = useState(Task.description);
  const [isFinished, setIsFinished] = useState(Task.isFinished);

  const [selectedValue, setSelectedValue] = useState(0);
  // Save button handler
  const handleSave = () => {
    
    const success: boolean = editTask(taskId, name, description, isFinished, selectedValue);

    if (success) {
      Alert.alert('Success', 'Task updated successfully!');
      navigation.navigate('TaskList', { listId: Task.listId });
    } else {
      Alert.alert('Error', 'Failed to update task. Please try again.');
    }
  };
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Edit Task</Text>

      {/* Task Name */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Task Name:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder="Enter task name"
        />
      </View>

      {/* Task Description */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Description:</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={description}
          onChangeText={(text) => setDescription(text)}
          placeholder="Enter task description"
          multiline
        />
      </View>

      {/* Task Status */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Task Status:</Text>
        <View style={styles.statusContainer}>
          <Button
            title={isFinished ? 'Mark as Pending' : 'Mark as Finished'}
            color={isFinished ? '#FF6F61' : '#4CAF50'}
            onPress={() => setIsFinished(!isFinished)}
          />
        </View>
      </View>
      
      <Text>Move task to list:</Text>
      
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(Number(itemValue))}
      >
        {listsForCurrentBoard.map((item) => (
          <Picker.Item key={item.id} label={item.name} value={item.id} />
        ))}
      </Picker>
      {/* Save Changes Button */}
      <Button title="Save Changes" onPress={handleSave} color="#4CAF50" />
    </ScrollView>
  );
};

export default EditTask;
