import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      padding: 10,
      width: '90%',
    },
});

export default styles;