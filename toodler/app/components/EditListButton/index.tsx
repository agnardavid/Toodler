// EditListButton.tsx
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

interface EditListButtonProps {
  id: number;
  name: string;
  navigation: any;
}

const EditListButton: React.FC<EditListButtonProps> = ({ id, name, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.editButton}
      onPress={(e) => {
        e.stopPropagation(); 
        console.log(`Edit button pressed for: ${name}`);
        navigation.navigate('EditList', { listId: id });
      }}
    >
      <Text style={styles.editButtonText}>Edit</Text>
    </TouchableOpacity>
  );
};

export default EditListButton;
