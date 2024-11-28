import { StyleSheet, Dimensions } from 'react-native';

// Get screen width for responsive styling
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5', // Light background color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333333', // Dark text color for good contrast with the light background
  },
  listCard: {
    width: screenWidth / 2 - 24, // Dividing screen width to fit 2 cards per row, with spacing
    height: 150, // Fixed height for the card
    margin: 8,
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#ffffff', // Light card background color
    borderWidth: 1,
    borderColor: '#dddddd', // Light border color for a clean appearance
    justifyContent: 'space-between',
    shadowColor: '#000', // Add a slight shadow to give depth to the card
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
  },
  taskText: {
    color: '#555555', // Slightly darker color for the task preview text for readability
    fontSize: 14,
  },
  moreText: {
    color: '#888888', // Light gray to indicate there are more tasks
    fontStyle: 'italic',
  },
  listTitle: {
    color: '#333333', // Dark color for list title
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  errorText: {
    fontSize: 18,
    color: '#ff0000',
    textAlign: 'center',
    marginTop: 20,
  },
  addButton: {
    width: screenWidth / 2 - 24, // Match the width of the list cards
    height: 150,                // Match the height of the list cards
    margin: 8,
    padding: 12,
    borderRadius: 10,
    borderWidth: 2,             // Border thickness
    borderColor: '#888888',     // Light gray color for dotted border
    borderStyle: 'dashed',      // Make the border dashed (dotted appearance)
    justifyContent: 'center',   // Center content vertically
    alignItems: 'center',       // Center content horizontally
    backgroundColor: '#f9f9f9', // Light background color
  },
  addButtonText: {
    fontSize: 36,               // Larger font size for the `+` symbol
    fontWeight: 'bold',
    color: '#888888',           // Gray color to match the border
  },
  
  
});

export default styles;
