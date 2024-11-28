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
    fontSize: 24,           // Size of the title
    fontWeight: 'bold',     // Bold font for emphasis
    marginBottom: 16,       // Spacing below the title
    textAlign: 'center',    // Horizontally center the title
    color: '#333333',       // Dark text color
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
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8, // Space below the header
  },
  
  
  editButton: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: '#cccccc', // Light grey background
    borderRadius: 5,
  },
  
  editButtonText: {
    color: '#333333', // Dark grey text color
    fontSize: 12,
    fontWeight: 'bold',
  },
  deleteButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#ff4d4f', // Red background for delete
    borderRadius: 5,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  
  deleteButtonText: {
    color: '#fff', // White text
    fontSize: 12,
    fontWeight: 'bold',
  },
  
  
  
  
});

export default styles;
