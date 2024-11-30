import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#97dce4',
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
    position: 'relative', 
  },
  imageContainer: {
    width: '35%',
    height: '100%',
    padding: 8, 
    backgroundColor: '#75cad6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '30%',
    height: '100%',
  },
  defaultImage: {
    width: '0%',
    height: '100%',
    backgroundColor: '#f0f0f0',
  },
  textContainer: {
    padding: 5,
    flex: 1,
    maxWidth: '60%',
  },
  name: {
    color: 'black',
    fontFamily: 'Courier',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 5,
    marginLeft: 5,
    flexWrap: 'wrap',
    lineHeight: 20,
  },
  description: {
    fontSize: 12,
    color: '#447',
    marginBottom: 5,
    marginLeft: 5,
  },
  noDescription: {
    fontSize: 12,
    color: '#669',
    fontStyle: 'italic',
    marginBottom: 5,
    marginLeft: 5,
  },
  editButton: {
    position: 'absolute',
    bottom: 10, 
    right: 10,
    backgroundColor: '#cccccc',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
    elevation: 2,
  },
  
  editButtonText: {
    color: '#333333',
    fontSize: 12,
    fontWeight: 'bold',
  },
  
});

export default styles;
