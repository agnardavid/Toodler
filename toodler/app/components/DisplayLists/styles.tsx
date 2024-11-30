import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column', // Use row to align items horizontally
      flexWrap: 'wrap', // Allow wrapping to the next line if necessary
      justifyContent: 'flex-start',
      paddingVertical: 16,
      width: '100%', // Distribute space evenly between items
    },
    
})

export default styles;