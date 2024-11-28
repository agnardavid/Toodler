import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, TouchableHighlight, Image, Button, ScrollView} from 'react-native';
import DisplayBoards from '@/app/components/boardList';
import styles from './styles';

const AllBoards = () => {

    return (
        <View style={styles.container}>
        <Text>All Boards</Text>
        <DisplayBoards />
        </View>
    );
};


export default AllBoards;