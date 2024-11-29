import { Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    addButton: {
    width: screenWidth / 2 - 24, // Match the width of the list cards
    height: 150,                // Match the height of the list cards
    margin: 8,
    padding: 12,
    borderRadius: 10,
    borderWidth: 2,             // Border thickness
    borderColor: '#888888',     // Light gray color for dotted border
    borderStyle: 'dashed',      // Make the border dashed (dotted appearance)
    justifyContent: 'center',   // Center content vertically
    alignItems: 'center',       // Center content horizontally
    backgroundColor: '#f9f9f9', // Light background color
    },
    addButtonText: {
        fontSize: 36,               // Larger font size for the `+` symbol
        fontWeight: 'bold',
        color: '#888888',           // Gray color to match the border
    },
});