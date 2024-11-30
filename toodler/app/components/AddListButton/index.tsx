import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles'; 

interface AddListButtonProps {
  navigation: any;
}

const AddListButton: React.FC<AddListButtonProps> = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.addButton}
      
      onPress={() => navigation.navigate('CreateList')}
    >
      <Text style={styles.addButtonText}>+</Text>
    </TouchableOpacity>
  );
};

export default AddListButton;