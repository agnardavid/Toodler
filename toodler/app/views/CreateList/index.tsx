import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
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
  const [selectedColor, setSelectedColor] = useState<string | null>(null); 
  // List of available colors
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#F0FF33', '#FF33A6'];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create New List</Text>

      {/* List Name Input */}
      <TextIn placeholder="List Name" />

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
    </View>
  );
};

export default CreateList;
