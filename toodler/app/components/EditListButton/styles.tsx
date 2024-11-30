import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    editButton: {
        position: 'absolute', // Positioning it absolutely within the parent container
        bottom: 10,
        right: 10,
        paddingVertical: 4,
        paddingHorizontal: 8,
        backgroundColor: '#cccccc',
        borderRadius: 5,
      },
      editButtonText: {
        color: '#333333',
        fontSize: 12,
        fontWeight: 'bold',
      },
})

export default styles