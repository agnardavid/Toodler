import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import { deleteBoard } from "@/app/Services/JsonInterpreter";
import DisplayBoards from "../boardList";

interface DeleteButtonProps {
    boardId: number;
    onDelete: (id: number) => void; // Function to delete a board
  }



const DeleteButton: React.FC<DeleteButtonProps> = ({ boardId }) => {
    
    return (
        <TouchableOpacity style={styles.deleteButton} onPress={() =>
            deleteBoard(boardId).then(() => {
              DisplayBoards();
            })}>
            <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
    )
}

export default DeleteButton