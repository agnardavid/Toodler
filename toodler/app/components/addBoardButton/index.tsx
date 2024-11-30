import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles'; 

interface AddBoardButtonProps {
  navigation: any;
  onPress: () => void;
}

const AddBoardButton: React.FC<AddBoardButtonProps> = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.addButton}
      onPress={() => 
        navigation.navigate('CreateBoardScreen')
      }
    >
      <Text style={styles.addButtonText}>+</Text>
    </TouchableOpacity>
  );
};

export default AddBoardButton;