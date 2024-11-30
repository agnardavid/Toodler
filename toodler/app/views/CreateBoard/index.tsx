import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import CreateBoardButton from '@/app/components/CreateBoardButton/index';
import styles from './styles';
import { handleCreateBoard } from '@/app/components/HandleCreateBoard';

interface CreateBoardProps {
  navigation: any;
};

const CreateBoard: React.FC<CreateBoardProps> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

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

      <CreateBoardButton onPress={() => handleCreateBoard(name, image, description, navigation)}/>
    </View>
  );
};


export default CreateBoard