import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import styles from './styles';
import DeleteButton from '../deleteBoard';
import { deleteBoard } from '@/app/Services/JsonInterpreter';

interface Board {
  id: number;
  photo: string;
  name: string;
  description: string;
  onPress: () => void;
  label?: string
};

// Component for rendering each board
const eachBoard: React.FC<Board> = ({ id, photo, name, description, onPress }) => {

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
      <DeleteButton boardId={id} onDelete={deleteBoard} />
    </TouchableOpacity>
  );
};

export default eachBoard