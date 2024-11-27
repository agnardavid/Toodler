import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      borderRadius: 20,
      overflow: 'hidden',
      marginVertical: 20,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 6,
      elevation: 3,
      flexDirection: 'row',
      alignItems: 'center',
      minHeight: 100,
    },
    image: {
      width: '40%',
      height: '100%',
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
    },
    textContainer: {
      padding: 5,
      flex: 1,
    },
    name: {
      fontSize: 14,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    description: {
      fontSize: 12,
      color: '#555',
      marginBottom: 5,
    },
    deleteButton: {
      backgroundColor: '#89CFF0',
      padding: 5,
      top: 10,
      right: 10,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
    },
    deleteText: {
      color: '#fff',
      fontSize: 10,
      fontWeight: 'bold',
    }
  });

export default styles;