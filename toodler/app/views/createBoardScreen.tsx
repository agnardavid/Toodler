import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { createBoard, editBoard } from '../Services/JsonInterpreter';

const createBoardScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleCreateBoard = () => {
    console.log('New board created:', { name, description, image });
    let newBoardId:number = createBoard();
    editBoard(newBoardId, name, image, description);
    navigation.navigate('AllBoards');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create New Board</Text>

      <TextInput
        style={styles.input}
        placeholder="Board Name"
        value={name}
        onChangeText={setName}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />

      <TextInput
        style={styles.input}
        placeholder="Image URL"
        value={image}
        onChangeText={setImage}
      />

      <Button title="Create Board" onPress={handleCreateBoard} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    fontSize: 16,
  },
});

export default createBoardScreen;
