import React, { useState } from "react";
import { TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import { Board, getAllBoards } from '@/app/Services/JsonInterpreter';
import DeleteModal from "../deleteModal/index";

interface DeleteButtonProps {
  boardId: number;
  onDelete: (id: number) => Promise<void>; // Function to delete a board
  setBoard: React.Dispatch<React.SetStateAction<Board[]>>;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ boardId, onDelete, setBoard }) => {
  const [isModalOpen, setModalOpen] = useState(false); // State to control the modal visibility

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const confirmDelete = async () => {
    await onDelete(boardId); // Perform the delete action
    setBoard(getAllBoards()); // Update the board list
    closeModal(); // Close the modal
  };

  return (
    <>
    {/* Delete Button */}
    <TouchableOpacity style={styles.deleteButton} onPress={openModal}>
        <Image
            source={{uri: 'https://w7.pngwing.com/pngs/29/45/png-transparent-delete-key-logo-button-text-rectangle-logo-thumbnail.png'}}
            style={styles.image}
        />
    </TouchableOpacity>

      {/* Delete Modal */}
    <DeleteModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        confirmDelete={confirmDelete}
      />
    </>
  );
};

export default DeleteButton;