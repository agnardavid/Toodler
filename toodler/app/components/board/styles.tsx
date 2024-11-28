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
    position: 'relative', // Ensure relative positioning for the button
  },
  image: {
    width: '40%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  defaultImage: {
    width: '40%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: '#f0f0f0',
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
  noDescription: {
    fontSize: 12,
    color: '#999',
    fontStyle: 'italic',
    marginBottom: 5,
  },
  editButton: {
    position: 'absolute',
    bottom: 10, // Positioned near the bottom inside the card
    right: 10, // Aligned to the right inside the card
    backgroundColor: '#cccccc', // Light grey background
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
    elevation: 2, // Slight shadow for depth
  },
  
  editButtonText: {
    color: '#333333', // Dark grey text
    fontSize: 12,
    fontWeight: 'bold',
  },
  
});

export default styles;
