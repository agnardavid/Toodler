import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles'; 

interface AddBoardButtonProps {
  navigation: any;
}

const AddBoardButton: React.FC<AddBoardButtonProps> = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.addButton}
      
      onPress={() => navigation.navigate('CreateBoard')}
    >
      <Text style={styles.addButtonText}>+</Text>
    </TouchableOpacity>
  );
};

export default AddBoardButton;