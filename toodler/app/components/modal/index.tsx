import React, { ReactNode } from 'react';
import NativeModal from 'react-native-modal';
import { View, Text } from 'react-native';
import styles from './styles';

export interface ModalProps {
    isOpen: boolean;         // Controls whether the modal is visible
    closeModal: () => void;  // Function to close the modal
    title?: string;          // Title for the modal
    children?: React.ReactNode; // Optional children (nested content)
  };

export const Modal: React.FC<ModalProps> = ({ isOpen, closeModal, title, children }) => (
    <NativeModal
        isVisible={isOpen}
        hasBackdrop={true}
        onBackButtonPress={closeModal}
        onSwipeComplete={closeModal}
        swipeDirection={["up", "down"]}
        style={styles.modal}>
        <View style={styles.body}>
            <Text>{title}</Text>
            {children}
        </View>
    </NativeModal>
);
