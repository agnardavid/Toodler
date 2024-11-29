import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles'; 

interface AddBoardButtonProps {
  onPress: () => void;
}

const AddBoardButton: React.FC<AddBoardButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.addButton} onPress={onPress}>
      <Text style={styles.addButtonText}>+</Text>
    </TouchableOpacity>
  );
};

export default AddBoardButton;