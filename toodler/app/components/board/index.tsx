import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import styles from './styles';

// Class for the props the component will accept
class Board {
  id: number;
  photo: string;
  name: string;
  description: string;
  onPress: () => void;
  onDelete: () => void;
  label?: string;

  constructor(id: number, photo: string, name: string, description: string, onPress: () => void, onDelete: () => void) {
    this.id = id;
    this.photo = photo;
    this.name = name;
    this.description = description;
    this.onPress = onPress;
    this.onDelete = onDelete;
  }
}

/*
// Component for rendering each board
const eachBoard: React.FC<eachBoardProps> = ({ id, photo, name, description, onPress, onDelete }) => {
  return (
    // wrapping the entire board with press functionality, so the entire board becomes a button
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
*/
export default Board;
