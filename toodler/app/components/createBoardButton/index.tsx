import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';

const CreateBoardButton = () => {
  // Router for navigation
  const router = useRouter();

  // navigates to the createBoardScreen page
  const handlePress = () => {
    router.push('/views/createBoardScreen');
  };

  // Displays a button, and calls handlePress when pressed/clicked on
  return (
    <View style={styles.container}>
      <Button title="Create New Board" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default CreateBoardButton;