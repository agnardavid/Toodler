import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5, // Rounded corners for input fields
    marginBottom: 10,
    paddingHorizontal: 8,
    fontSize: 16,
    backgroundColor: '#f9f9f9', // Light grey background for inputs
  },
  TextContainerWrapper: {
    justifyContent: 'center',
    alignItems: 'center', 
  },
  TextContainer: {
    alignSelf: 'center',
    borderRadius: 8,
    width: 160,
    height: 30,
    justifyContent: 'center', // Centers vertically
    alignItems: 'center',    // Centers horizontally
    marginBottom: 20,
    
    
  },
  finishedButton: {
    color: 'white',
    textAlign: 'center', 
    alignItems: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center', 
    paddingBottom: 2,
  },
  
  textArea: {
    height: 100,
    textAlignVertical: 'top', // Ensure text starts at the top for multiline inputs
  },
  button: {
    
    marginVertical: 100, // Space between buttons
    
    borderRadius: 2,
    color: '#4CAF50', // Green button for "Save"
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff', // White text for buttons
    fontSize: 16,
    fontWeight: 'bold',
  },
  toggleButton: {
    marginVertical: 10,
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  toggleButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
