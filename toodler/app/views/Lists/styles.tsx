import { StyleSheet, Dimensions } from 'react-native';

// Get screen width for responsive styling
const screenWidth = Dimensions.get('window').width;
const cardWidth = (screenWidth - 55) / 2

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
    textAlign: 'center',
    color: '#333333',
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  listCard: {
    width: cardWidth,
    flexShrink: 0,
    flexGrow: 1,
    display: 'flex',
    height: 150, 
    margin: 4,
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#ffffff', // Neutral white background
    borderWidth: 3, // Increase border width for visibility
    borderColor: '#dddddd', 
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
    color: '#555555',
    fontSize: 14,
  },
  moreText: {
    color: '#888888',
    fontStyle: 'italic',
  },
  listTitle: {
    color: '#333333',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  editButton: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: '#cccccc',
    borderRadius: 5,
  },
  editButtonText: {
    color: '#333333',
    fontSize: 12,
    fontWeight: 'bold',
  },
  deleteButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#ff4d4f',
    borderRadius: 5,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  addButton: {
    width: cardWidth,
    height: 150,
    margin: 4,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#888888',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  addButtonText: {
    fontSize: 50,
    lineHeight: 0,
    fontWeight: 'bold',
    color: '#888888',
  },
});

export default styles;
