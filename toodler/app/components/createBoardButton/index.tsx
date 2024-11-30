import React from 'react';
import styles from './styles';
import { TouchableOpacity, Text } from 'react-native';

interface CreateBoardButtonProps {
  onPress: () => void; 
}

const CreateBoardButton: React.FC<CreateBoardButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button]}
      onPress={onPress}
      accessibilityLabel="Create Board"
      accessibilityHint="Press to create a new board">
        
      <Text style={styles.buttonText}>Create Board</Text>
    </TouchableOpacity>
  );
};

export default CreateBoardButton;