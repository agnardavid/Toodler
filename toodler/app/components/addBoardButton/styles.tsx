import { Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get('window').width;
const itemWidth = screenWidth / 2 - 30;

export const styles = StyleSheet.create({
    addButton: {
        flex: 1,
        width: itemWidth,
        height: 110,
        borderRadius: 20,
        borderWidth: 2,             
        borderColor: '#9f9f9f',
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#cff6fc',
        marginBottom: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    addButtonText: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#888888',
    },
});