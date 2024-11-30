import { StyleSheet } from "react-native";

export default StyleSheet.create({
    headerContainer: {
        backgroundColor: '#75cad6',
        paddingVertical: 15,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    backButton: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        marginRight: 20, // Add some space between the button and the text
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});