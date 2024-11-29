import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, ScrollView } from 'react-native';
import styles from './styles';
import { getBoard, editBoard } from '@/app/Services/JsonInterpreter';

type EditBoardProps = {
  navigation: any;
  route: {
    params: {
      boardId: number;
    };
  };
};

const EditBoard: React.FC<EditBoardProps> = ({ navigation, route }) => {
  const { boardId } = route.params;
  

  const Board = getBoard(boardId);

  // State to manage the form fields
  const [name, setName] = useState(Board.name);
  const [description, setDescription] = useState(Board.description);
  const [thumbnailPhoto, setThumbnailPhoto] = useState(Board.thumbnailPhoto);

  
  // Save button handler
  const handleSave = () => {
    const success:boolean = editBoard(Board.id, name, thumbnailPhoto, description);
    /*
    console.log("Board updated:");
    console.log({
      id: Board.id,
      name,
      description,
      thumbnailPhoto,
    });
    */
    alert(success);
    
    
    navigation.navigate('AllBoards');
  };
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Edit Board</Text>

      <Image source={{ uri: thumbnailPhoto }} style={styles.thumbnail} />

      <View style={styles.formGroup}>
        <Text style={styles.label}>Board Name:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder="Enter board name"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Description:</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={description}
          onChangeText={(text) => setDescription(text)}
          placeholder="Enter description"
          multiline
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Thumbnail Photo URL:</Text>
        <TextInput
          style={styles.input}
          value={thumbnailPhoto}
          onChangeText={(text) => setThumbnailPhoto(text)}
          placeholder="Enter thumbnail photo URL"
        />
      </View>

      <Button title="Save Changes" onPress={handleSave} color="#4CAF50" />
    </ScrollView>
  );
};

export default EditBoard;
