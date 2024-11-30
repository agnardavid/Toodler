import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import styles from './styles';
import DeleteButton from '../DeleteBoard';
import { deleteBoard, Board } from '@/app/Services/JsonInterpreter';

interface BoardDisplay {
  id: number;
  photo: string | undefined;
  name: string;
  description: string | undefined;
  navigation: any;
  setBoard: React.Dispatch<React.SetStateAction<Board[]>>;
  onPress: () => void;
  label?: string;
}

// Component for rendering each board
export const EachBoard: React.FC<BoardDisplay> = ({
  id,
  photo,
  name,
  description,
  navigation,
  onPress,
  setBoard,
}) => {
  const isPhotoValid = photo && photo.trim() !== ''; // checks if photo is valid, i.e. not empty
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {isPhotoValid ? (
        <Image source={{ uri: photo }} style={styles.image} />
      ) : (
        <View style={styles.defaultImage} />
      )}

      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>

        {description ? (
          <Text style={styles.description}>{description}</Text>
        ) : (
          <Text style={styles.noDescription}>No description provided</Text>
        )}
      </View>

      <DeleteButton boardId={id} onDelete={deleteBoard} setBoard={setBoard} />

      {/* Edit Button inside the card */}
      <TouchableOpacity
        style={styles.editButton}
        onPress={(e) => {
          e.stopPropagation(); // Prevent bubbling up to the card's onPress
          console.log(`Edit button pressed for board: ${name}`);
          navigation.navigate('EditBoard', { boardId: id });
        }}
      >
        <Text style={styles.editButtonText}>Edit</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default EachBoard;
