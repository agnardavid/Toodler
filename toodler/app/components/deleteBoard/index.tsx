import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import { deleteBoard } from "@/app/Services/JsonInterpreter";

interface DeleteButtonProps {
    boardId: number;
    onDelete: (id: number) => void; // Function to delete a board
  }



const DeleteButton: React.FC<DeleteButtonProps> = ({ boardId, onDelete }) => {
    
    return (
        <TouchableOpacity style={styles.deleteButton} onPress={() => onDelete(boardId)}>
            <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
    )
}

export default DeleteButton