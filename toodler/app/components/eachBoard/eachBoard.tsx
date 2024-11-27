import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import styles from './styles';

interface eachBoardProps {
  id: number;
  photo: string;
  name: string;
  description: string;
  onPress: () => void;
  onDelete: () => void;
  label?: string;
}

const eachBoard: React.FC<eachBoardProps> = ({ id, photo, name, description, onPress, onDelete }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: photo }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default eachBoard;
