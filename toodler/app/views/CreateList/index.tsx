import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, TextInput } from 'react-native';
import { createList, editList } from '@/app/Services/JsonInterpreter';
import TextIn from '@/app/components/textInputField';
import styles from './styles';

type CreateListProps = {
  navigation: any;
  route: {
    params: {
      boardId: number;
    };
  };
};

const CreateList: React.FC<CreateListProps> = ({ navigation, route }) => {
  const { boardId } = route.params;
  const [name, setName] = useState('');

  const [selectedColor, setSelectedColor] = useState<string | null>(null); 
  // List of available colors
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#F0FF33', '#FF33A6'];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create New List</Text>

      {/* List Name Input */}
      <TextInput
      style={styles.input}
      placeholder="List Name" 
      value={name}
      onChangeText={setName}
      />

      {/* Choose Color */}
      <Text style={styles.label}>Choose a Color:</Text>
      <View style={styles.colorContainer}>
        {colors.map((color) => (
          <TouchableOpacity
            key={color}
            style={[
              styles.colorCircle,
              { backgroundColor: color },
              selectedColor === color && styles.selectedColor,
            ]}
            onPress={() => setSelectedColor(color)} // Set selected color
          />
        ))}
      </View>
      {selectedColor && (
        <Text style={styles.selectedColorText}>
          Selected Color: {selectedColor}
        </Text>
      )}

    <Button title="Save Changes" onPress={() => {
      let newListId:number = createList(boardId);
      editList(newListId, name, selectedColor, boardId);
      navigation.navigate('Lists', { boardId: boardId });
    }
    } color="#4CAF50" />
    </View>
  );
};

export default CreateList;
