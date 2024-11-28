import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      padding: 10,
      width: '90%',
    },
    listContainer: {
      paddingBottom: 20,
    },
    modal: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 10,
      width: '80%',
      alignItems: 'center',
    },
    modalButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    modalText: {
      fontSize: 18,
      marginBottom: 20,
      textAlign: 'center',
    },
    confirmButton: {
      backgroundColor: '#ff4444',
      padding: 10,
      borderRadius: 5,
      flex: 1,
      marginRight: 5,
      alignItems: 'center',
    },
    confButtonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    cancelButton: {
      backgroundColor: '#ddd',
      padding: 10,
      borderRadius: 5,
      flex: 1,
      marginLeft: 5,
      alignItems: 'center',
    },
    cancelButtonText: {
      color: '#333',
      fontWeight: 'bold',
    }
});

export default styles;