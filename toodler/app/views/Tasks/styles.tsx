import { StyleSheet,Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#bef4fc', // Neutral background
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333333',
  },
  taskCard: {
    flexDirection: 'row', // Align task info and buttons horizontally
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
    backgroundColor: '#ffffff', // White background for the card
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // Shadow for Android
  },
  
  taskInfo: {
    flex: 2, // Allow task details to take most of the space
  },
  
  buttonContainer: {
    flexDirection: 'row', // Place Edit and Delete buttons side by side
    flex: 1, // Ensure the buttons take up equal space
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  
  taskName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  
  taskDescription: {
    fontSize: 14,
    color: '#666666',
    marginTop: 4,
  },
  
  taskStatus: {
    fontSize: 12,
    color: '#888888',
    marginTop: 8,
  },
  
  editButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: '#4CAF50', // Green background for edit
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8, // Add some spacing between buttons
  },
  
  editButtonText: {
    color: '#ffffff', // White text for the Edit button
    fontSize: 12,
    fontWeight: 'bold',
  },
  
  deleteButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: '#ff4d4f', // Red background for delete
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  deleteButtonText: {
    color: '#ffffff', // White text for delete button
    fontSize: 12,
    fontWeight: 'bold',
  },
  addButton: {
    width: screenWidth / 2 - 24,
    height: 150,
    margin: 8,
    padding: 12,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#888888',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  addButtonText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#888888',
  },
  
});

export default styles;
