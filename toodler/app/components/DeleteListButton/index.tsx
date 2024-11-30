import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { deleteList } from '@/app/Services/JsonInterpreter';
import styles from './styles'; 

interface DeleteListButtonProps {
    id: number,
    name: string,
    navigation: any,
    boardId: number,
}

const DeleteListButton: React.FC<DeleteListButtonProps> = ({ id, name, navigation, boardId }) => {
    return (   
        <TouchableOpacity
            style={styles.deleteButton}
            onPress={(e) => {
                e.stopPropagation();
                console.log(`Delete button pressed for: ${name}, ${id}`);
                if (typeof id === 'number') {
                    deleteList(id);
                }
                navigation.navigate('Lists', { boardId: boardId });
                }}
        >
            <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
    )
}

export default DeleteListButton;