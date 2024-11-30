import { Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get('window').width;
const cardWidth = (screenWidth - 55) / 2

export const styles = StyleSheet.create({

    addButton: {
        width: cardWidth,
        minHeight: 150,
        margin: 4,
        padding: 12,
        borderRadius: 20,
        borderWidth: 2,             
        borderColor: '#9f9f9f',
        borderStyle: 'dashed',
        backgroundColor: '#cff6fc',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
      },
    addButtonText: {
        fontSize: 50,
        lineHeight: 0,
        fontWeight: 'bold',
        color: '#888888',
    },

});