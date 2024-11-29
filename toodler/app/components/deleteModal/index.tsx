import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { ModalProps, Modal } from "../modal/index";
import styles from "./styles";

interface DeleteModalProps extends Omit<ModalProps, "title"> {
  confirmDelete: () => Promise<void>; // Function to confirm deletion
}

const DeleteModal: React.FC<DeleteModalProps> = ({ isOpen, closeModal, confirmDelete }) => (
  <Modal isOpen={isOpen} closeModal={closeModal}>
    <Text style={styles.title}>Are you sure you want to delete?</Text>
    <TouchableOpacity
      style={styles.confirmButton}
      onPress={async () => {
        await confirmDelete(); // Execute the delete action
        closeModal(); // Close the modal after deletion
      }}
    >
      <Text style={styles.buttonText}>Delete</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.cancelButton} onPress={closeModal}>
      <Text style={styles.buttonText}>Cancel</Text>
    </TouchableOpacity>
  </Modal>
);

export default DeleteModal;
