import React from 'react';
import {View, Text, TextInput, TouchableHighlight, Image, Button} from 'react-native';
import CreateBoardButton from '@/app/components/createBoardButton/index';
import TextIn from '@/app/components/textInputField';
import styles from './styles';

const CreateBoard = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.heading}>Create New Board</Text>

            <TextIn placeholder='Board Name' />
            <TextIn placeholder="Description" />
            <TextIn placeholder="Image URL" />

            <CreateBoardButton />
    </View>
  );
};


export default CreateBoard