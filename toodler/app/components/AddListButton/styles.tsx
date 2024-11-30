import { Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get('window').width;
const cardWidth = (screenWidth - 55) / 2

export const styles = StyleSheet.create({

    addButton: {
        width: cardWidth,
        height: 150,
        margin: 4,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#888888',
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
    },
    addButtonText: {
        fontSize: 50,
        lineHeight: 0,
        fontWeight: 'bold',
        color: '#888888',
    },

});