import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import styles from './styles';
import { deleteBoard } from '@/app/Services/JsonInterpreter';

interface eachBoardProps {
  id: number;
  photo: string;
  name: string;
  description: string;
  onPress: () => void;
  onDelete: () => void;
  label?: string;
}

// Component for rendering each board
const eachBoard: React.FC<eachBoardProps> = ({ id, photo, name, description, onPress, onDelete }) => {

  const isPhotoValid = photo && photo.trim() !== '';                  // checks if photo is valid, i.e. not empty

  return (
    // wrapping the entire board with press functionality, so the entire board becomes a button
    <TouchableOpacity style={styles.card} onPress={onPress}>

      {isPhotoValid ? (                                               // if photo is not empty
        <Image source={{uri: photo }} style={styles.image} />         // display photo
      ) : (
        <View style={styles.defaultImage} />                          // display default image (which atm is just a gray background)
      )}

      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>

        {description ? (                                              // checks for description
          <Text style={styles.description}>{description}</Text>       // displays description
        ) : (
          <Text style={styles.noDescription}>
            No description provided
          </Text>                                                     // displays alt text
        )}
        
      </View>

      <TouchableOpacity style={styles.deleteButton} onPress={() => deleteBoard(id)}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default eachBoard;