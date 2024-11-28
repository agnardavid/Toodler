import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, ScrollView } from 'react-native';
import styles from './styles';

const EditBoard = () => {
  // Dummy data
  const dummyBoard = {
    id: 1,
    name: "Trip to the Netherlands!",
    thumbnailPhoto: "https://images.prismic.io/indiecampers-demo/9f34856d-05da-4afb-832f-d3a36de83b7f_Hero---Kinderdijk.jpg",
    description: "Some stuff about some stuff with some stuff hello stuff stuff stuff ",
    isDeleted: false,
  };

  // State to manage the form fields
  const [name, setName] = useState(dummyBoard.name);
  const [description, setDescription] = useState(dummyBoard.description);
  const [thumbnailPhoto, setThumbnailPhoto] = useState(dummyBoard.thumbnailPhoto);

  // Save button handler
  const handleSave = () => {
    console.log("Board updated:");
    console.log({
      id: dummyBoard.id,
      name,
      description,
      thumbnailPhoto,
    });
    alert("Changes saved!");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Edit Board</Text>

      <Image source={{ uri: thumbnailPhoto }} style={styles.thumbnail} />

      <View style={styles.formGroup}>
        <Text style={styles.label}>Board Name:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder="Enter board name"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Description:</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={description}
          onChangeText={(text) => setDescription(text)}
          placeholder="Enter description"
          multiline
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Thumbnail Photo URL:</Text>
        <TextInput
          style={styles.input}
          value={thumbnailPhoto}
          onChangeText={(text) => setThumbnailPhoto(text)}
          placeholder="Enter thumbnail photo URL"
        />
      </View>

      <Button title="Save Changes" onPress={handleSave} color="#4CAF50" />
    </ScrollView>
  );
};

export default EditBoard;
