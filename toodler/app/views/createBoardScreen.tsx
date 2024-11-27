import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

const CreateBoardScreen = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const router = useRouter();

  // Sets parameters of new board, goes back to last page after it's finished
  const handleCreateBoard = () => {
    const newBoard = {
      id: Date.now(),
      name: name || 'Untitled Board',
      description: description || '',
      thumbnailPhoto: image || null, 
    };

    router.push({
      pathname: '/',
      params: {newBoard: JSON.stringify(newBoard) },          // Converts JSON data to string
    });

    console.log('New board created:', { name, description, image });
    
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

export default CreateBoardScreen;
