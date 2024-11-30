import { StyleSheet, Dimensions } from 'react-native';


const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      padding: 20,
      backgroundColor: '#bef4fc',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    thumbnail: {
      width: '100%',
      height: 200,
      borderRadius: 10,
      marginBottom: 20,
    },
    formGroup: {
      marginBottom: 15,
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    input: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      fontSize: 16,
    },
    textArea: {
      height: 100,
      textAlignVertical: 'top', // Ensures text starts at the top for multiline inputs
    },
    TextContainerWrapper: {
      justifyContent: 'center',
      alignItems: 'center', 
    },
    TextContainer: {
      alignSelf: 'center',
      borderRadius: 8,
      width: 160,
      height: 30,
      justifyContent: 'center', // Centers vertically
      alignItems: 'center',    // Centers horizontally
      marginBottom: 20,
    },
});

export default styles;