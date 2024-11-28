import React from 'react';
import {View, Text, TextInput, TouchableHighlight, Image, Button} from 'react-native';
import CreateBoardButton from '../../components/createBoardButton/index';
import styles from './styles';

const CreateBoard = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.heading}>Create New Board</Text>

            <TextInput
                style={styles.input}
                placeholder="Board Name"
            />
            
            <TextInput
                style={styles.input}
                placeholder="Description"
            />

            <TextInput
                style={styles.input}
                placeholder="Image URL"
            />

            <CreateBoardButton />
    </View>
  );
};


export default CreateBoard