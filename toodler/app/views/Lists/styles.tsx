import { StyleSheet, Dimensions } from 'react-native';

// Get screen width for responsive styling
const screenWidth = Dimensions.get('window').width;
const cardWidth = (screenWidth - 55) / 2


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#bef4fc', // Light background color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333333',
  },
  gridContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  }
});

export default styles;