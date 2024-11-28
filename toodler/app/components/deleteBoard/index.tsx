import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import { Board, getAllBoards } from "@/app/Services/JsonInterpreter";

import DisplayBoards from "../boardList";

interface DeleteButtonProps {
    boardId: number;
    onDelete: (id: number) => Promise<void>; // Function to delete a board
    setBoard: React.Dispatch<React.SetStateAction<Board[]>>;
  }



const DeleteButton: React.FC<DeleteButtonProps> = ({ boardId, onDelete, setBoard}) => {
    
    return (
        <TouchableOpacity style={styles.deleteButton} onPress={() =>
            onDelete(boardId).then(() => {
              setBoard(getAllBoards());
            })}>
            <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
    )
}

export default DeleteButton